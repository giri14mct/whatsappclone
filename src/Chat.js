import React, { useState, useContext } from 'react'
import './Chat.css';
import { ChatContext } from './Routing'
import { Link } from 'react-router-dom';


import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachmentIcon from '@material-ui/icons/Attachment';
import SendIcon from '@material-ui/icons/Send';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const Chat = (props) => {
    const [chat] = useContext(ChatContext);
    const [store, setStore] = useState('');

    const currInd = props.location.lister.index;
    let chats = chat.contacts[currInd]

    let sender = (e) => {
        e.preventDefault();
        setStore("")
    }
    function pushMessage() {
        if (store) {
            props.location.lister.txt.push(store)

        }
    }
    return (
        <>
            <div className="chat-head">
                <header className="header-content">
                    <Link to="/"> <button type="button" className="back" > <KeyboardBackspaceIcon style={{ color: '#919191' }} /> </button></Link>
                    <img className="pic" src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile of your fried" />
                    <div className="head-profile" >
                        <div className="profile-name" >{props.location.lister.title}</div>
                        <div className="profile-time">last seen today at {new Date().toLocaleTimeString()}</div>
                    </div>
                    <div className="chat-icon" >
                        <MoreVertIcon />
                        <SearchIcon />
                    </div>
                </header>
                <main className="message-area">
                    <div className="message " >
                        {chats.chat.map((a, i) => (
                            <div className="messageItem  messageItem-none">
                                <li key={i} className="message-text">{a}</li>
                                <p className="message-time">{new Date().toLocaleTimeString()}</p>
                            </div>

                        ))}
                    </div>
                </main>
                <form onSubmit={sender} className="input-area">

                    <label className="input-Attachment" htmlFor='fileInput'>

                        <input type="file" autoComplete="off" multiple id="fileInput" style={{ visibility: "hidden" }} />
                        <AttachmentIcon style={{ color: '#919191' }} />

                    </label>

                    <input type="text" onChange={(e) => setStore(e.target.value)} autoComplete="off" name="chat" value={store} className="input-text" placeholder="Type a message" />

                    <button type="submit" onClick={pushMessage} className="input-send" ><SendIcon style={{ color: '#919191' }} /></button>

                </form>
            </div>
        </>
    )
}

export default Chat
