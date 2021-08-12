import React from 'react'
import './Chatlist.css';

import { Link } from 'react-router-dom';


const ChatList = (props) => {
  const { idHolder, name, img, msg, time,} = props
  return (
    <>
      <Link className="nav" to={{
         pathname: `chat/${name}` ,                                  //        pathname: 'chat' + '/' + name,
         lister : {
              index: idHolder,
              title: name,
              avatar: img,
              txt: msg,
              chatTime: time
         }
      }}>
        <div className="container" >
          <img className="info-img" src={img} alt="Profile of the person you chated" />
          <div className="info">
            <div className="info-content">
              <div className="info-name">{name}</div>
              <div className="info-time">{time}</div>
            </div>
            <div className="info-chat">
              <p>{msg}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
  //lister : {
  //     index: idHolder,
  //     title: name,
  //     avatar: img,
  //     txt: msg,
  //     chatTime: time
  // }
export default ChatList;
