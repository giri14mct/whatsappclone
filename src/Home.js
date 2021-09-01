import React, { useState, useContext } from 'react';
import './Home.css';
import ChatList from './ChatList';
import { ChatContext } from './Routing'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function App() {
   const [searchName, setSearchName] = useState('');
   const [chat] = useContext(ChatContext);

   const searchTxt = e => {
      setSearchName(e.target.value)
   }

   return (
      <>
         <div className="window">
            <header className="profile">
               <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile for the user" />
               <div className="icons">
                  <DonutLargeIcon style={{ color: '#919191' }} />
               </div>
               <div className="icons">
                  <ChatIcon style={{ color: '#919191' }} />
               </div>
               <div className="icons">
                  <MoreVertIcon style={{ color: '#919191' }} />
               </div>
            </header>
            <div className="search">

               <label className="search-icon" htmlFor="search-ic" >
                  <SearchIcon style={{ color: '#919191' }} />
                  <input id="search-ic" type="search" autoComplete="off" value={searchName} onChange={searchTxt} placeholder="Search or start new chat" />
               </label>

            </div>

            <div className="chat">

               {chat.contacts.filter((val) => {
                  if (searchName === '') {
                     return val
                  }
                  else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                     return val
                  }
                  return val
               }).map((val) => (
                  <ChatList key={val.id} idHolder={val.id}
                     img={val.img} name={val.name} msg={val.chat} time={val.time} />
               ))}

            </div>

         </div>
      </>
   );
}

export default App;
