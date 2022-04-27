import React, {useEffect, useState} from 'react';
import './style.css';
import Layout from '../../components/Layout';
import {useDispatch, useSelector} from 'react-redux';
import {getRealtimeUsers, updateMessage, getRealtimeConversations} from '../../actions';

const User = (props) => {
    const {user, onClick} = props;

    return (
        <div onClick={() => onClick(user)} className="displayName">

            <div className="displayPic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpE9t8ecfF7lusS8jjCd-GlgquMwS0kI6SSZ5e6wQ7CjCwIwuqsxc6oBpHDr92J72g308&usqp=CAU" alt=""/>
            </div>

            <div style={{display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px'}}>
                <span style={{fontWeight: 500}}>{user.firstName} {user.lastName}</span>
                <span className={user.isOnline ? `onlineStatus` : `onlineStatus off`}></span>
            </div>
        </div>
    );
}

const HomePage = (props) => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const [chatStarted, setChatStarted] = useState(false);
    const [chatUser, setChatUser] = useState('');
    const [message, setMessage] = useState('');
    const [userUid, setUserUid] = useState(null);
    let unsubscribe;


    useEffect(() => {

        unsubscribe = dispatch(getRealtimeUsers(auth.uid))
            .then(unsubscribe => {
                return unsubscribe;
            })
            .catch(error => {
                console.log(error);
            })


    }, []);

    // console.log(user);

    //componentWillUnmount
    useEffect(() => {
        return () => {
            //cleanup
            unsubscribe.then(f => f()).catch(error => console.log(error));

        }
    }, []);


    const initChat = (user) => {

        setChatStarted(true)
        setChatUser(`${user.firstName} ${user.lastName}`)
        setUserUid(user.uid);

        console.log(user);

        dispatch(getRealtimeConversations({uid_1: auth.uid, uid_2: user.uid}));

    }

    const submitMessage = (e) => {

        const msgObj = {
            user_uid_1: auth.uid,
            user_uid_2: userUid,
            message
        }


        if (message !== "") {
            dispatch(updateMessage(msgObj))
                .then(() => {
                    setMessage('')
                });
        }

        //console.log(msgObj);

    }


    return (
        <Layout>
            <section className="container">
                <div className="listOfUsers">
                    {
                        user.users.length > 0 ?
                            user.users.map(user => {
                                return (
                                    <User className="user"
                                        onClick={initChat}
                                        key={user.uid}
                                        user={user}
                                    />
                                );
                            }) : null
                    }
                </div>

                <div className="chatArea">
                    <div className="headerChat">
                        Chat with &nbsp;
                         {
                            chatStarted ? chatUser : ''
                        }
                    </div>
                    <div className="messageSections">
                        {
                            chatStarted ?
                                user.conversations.map(con =>
                                    <div style={{textAlign: con.user_uid_1 === auth.uid ? 'right' : 'left'}}>
                                        <p className="styleMessage" >{con.message}</p>
                                    </div>)
                                : null
                        }


                    </div>
                    {
                        chatStarted ?
                            <div className="chatControls">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message"
                />
                                <div onClick={submitMessage}>
                                    <img src="https://pngimage.net/wp-content/uploads/2018/06/send-message-icon-png-9.png"/>
                                </div>
                            </div> : null
                    }

                </div>
            </section>
        </Layout>
    );
}

export default HomePage;