/* import './chat.scss'

function Chat(){
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="https://deadline.com/wp-content/uploads/2021/05/thumbnail_Robert-Pattinson_2-e1621870926530.jpeg?w=790" alt=""/>
                <span>Robert Pattinson</span>
                <p>Lorem ipsum dolor sit amet ...</p>
            </div>
            <div className="message">
                <img src="https://deadline.com/wp-content/uploads/2021/05/thumbnail_Robert-Pattinson_2-e1621870926530.jpeg?w=790" alt=""/>
                <span>Robert Pattinson</span>
                <p>Lorem ipsum dolor sit amet ...</p>
            </div>
            <div className="message">
                <img src="https://deadline.com/wp-content/uploads/2021/05/thumbnail_Robert-Pattinson_2-e1621870926530.jpeg?w=790" alt=""/>
                <span>Robert Pattinson</span>
                <p>Lorem ipsum dolor sit amet ...</p>
            </div>
        </div>
        <div className="chatbox">box</div>
    </div>
}

export default Chat; */

import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
            <img
                src="https://deadline.com/wp-content/uploads/2021/05/thumbnail_Robert-Pattinson_2-e1621870926530.jpeg?w=790"
                alt=""
            />
            <span>Robert Pattinson</span>
            <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
            <img
                src="https://deadline.com/wp-content/uploads/2021/05/thumbnail_Robert-Pattinson_2-e1621870926530.jpeg?w=790"
                alt=""
            />
            <span>Robert Pattinson</span>
            <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
            <img
                src="https://deadline.com/wp-content/uploads/2021/05/thumbnail_Robert-Pattinson_2-e1621870926530.jpeg?w=790"
                alt=""
            />
            <span>Robert Pattinson</span>
            <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
            <img
                src="https://deadline.com/wp-content/uploads/2021/05/thumbnail_Robert-Pattinson_2-e1621870926530.jpeg?w=790"
                alt=""
            />
            <span>Robert Pattinson</span>
            <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
        {chat && (
            <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img
                            src="https://deadline.com/wp-content/uploads/2021/05/thumbnail_Robert-Pattinson_2-e1621870926530.jpeg?w=790"
                            alt=""
                        />
                        Robert Pattinson
                    </div>
                    <span className="close" onClick={()=>setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
            </div>
        )}
        </div>
    );
}

export default Chat;