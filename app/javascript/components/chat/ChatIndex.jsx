import React, {useRef, useState, useEffect} from 'react'
import consumer from "../../channels/consumer"
import { v4 as uuidv4 } from 'uuid';

let chatRoomChannel = null;

export default function ChatIndex() {
    const newMessageRef = useRef();
    const [messages, setMessages] = useState([])
    

    function getUsername(){
        return localStorage.getItem("username")
    }

    useEffect(()=>{
        chatRoomChannel = consumer.subscriptions.create("ChatChannel", {
            connected() {
                console.log("Connected")
            },
            
            disconnected() {
    
            },
            
            received(data) {
                console.log(data)
                if(data['message'] == undefined || data['username'] == getUsername()) return
                appendMessage(data)
            },
            
            speak(message){
                this.perform('speak', { username: getUsername(), message: message })
            }
        });
    
    },[]);
    
    function handleMessageSend(){
        const newMessage = newMessageRef.current.value;
        if(newMessage == '') return
        chatRoomChannel.speak(newMessage);
        appendMessage({ username: getUsername(), message: newMessage })
    }

    function appendMessage(messageData){
        setMessages(prevMessages=>{
            return [...prevMessages, messageData]
        })
    }

    return (
        <div className="container">
            <h1>Chat index</h1>

            {
                messages.map(messageData=>{
                    return (
                        <div key={uuidv4()} className="border shadow">
                            <p>{messageData.username}</p>
                            <p>{messageData.message}</p>
                        </div>
                    )
                })
            }

            <input ref={newMessageRef} type="text" className="form-control" />
            <button className="btn btn-primary" onClick={handleMessageSend}>Send</button>
        </div>
    )
}
