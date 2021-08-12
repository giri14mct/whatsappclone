import React, {  useContext } from 'react';
import './Home.css';
import ChatList from './ChatList';
import { ChatContext } from './Routing'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function App() {
   const [chat] = useContext(ChatContext);

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
               <div className="search-icon">
                  <SearchIcon style={{ color: '#919191' }} />
                  <input type="search" placeholder="Search or start new chat" />
               </div>
            </div>

            <div className="chat">
               {chat.contacts.map((item) => (
                  < ChatList key={item.id} idHolder={item.id}
                  img={item.img} name={item.name} msg={item.chat} time={item.time} />
               ))}
            </div>

         </div>
      </>
   );
}
// idHolder={item.id}
export default App;
