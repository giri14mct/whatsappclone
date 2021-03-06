import React, { useState, createContext } from 'react';
import Home from './Home';
import Chat from './Chat';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export const ChatContext = createContext();


export const Routing = () => {
    const [chat] = useState({
        contacts: [
            {
                id: 0,
                name: "jawa",
                img: "https://www.w3schools.com/w3images/avatar2.png",
                chat: [],
                time: []
            },
            {
                id: 1,
                name: "gowtham",
                img: "https://www.w3schools.com/w3images/avatar2.png",
                chat: [],
                time: []
            },
            {
                id: 2,
                name: "appa",
                img: "https://www.w3schools.com/w3images/avatar2.png",
                chat: [],
                time: []
            },
            {
                id: 3,
                name: "bro",
                img: "https://www.w3schools.com/w3images/avatar2.png",
                chat: [],
                time: []
            },
            {
                id: 4,
                name: "agan",
                img: "https://www.w3schools.com/w3images/avatar2.png",
                chat: [],
                time: []
            },
            {
                id: 5,
                name: "revanth",
                img: "https://www.w3schools.com/w3images/avatar2.png",
                chat: [],
                time: []
            }
        ]
    });


    return (

        <ChatContext.Provider value={[chat]}>
            <Router>
                <div className="App">
                    <Route path="/" exact component={Home} />
                    <Route path="/Chat" component={Chat} />
                </div>
            </Router>
        </ChatContext.Provider>
    )
}
