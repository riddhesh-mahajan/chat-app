import React, {useRef, useState, useEffect} from 'react'
import consumer from "../../channels/consumer"
import { v4 as uuidv4 } from 'uuid';
import './ChatIndex.css'
import { FaPaperPlane } from 'react-icons/fa';


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
                
                data['datetime'] = formatDatetime(new Date(data['datetime']))
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
        appendMessage({ username: getUsername(), message: newMessage, datetime:  formatDatetime(new Date())})
    }

    function appendMessage(messageData){
        setMessages(prevMessages=>{
            return [...prevMessages, messageData]
        })
    }

    function formatDatetime(newDate, separator='-'){      
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();

        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year} ${hours}:${minutes}`
    }

    return (
        <div className="container col-md-8 col-11 pt-3">
            <p className="fw-bold fs-1">Chat</p>

            <div className="bg-light" style={{minHeight: '75vh', maxHeight: '70px', overflowY: 'scroll'}}>
                {
                    messages.map((messageData, index)=>{
                        return (   
                            <div key={uuidv4()} className={"col-md-5 col-9 " + (messageData.username == getUsername() ? 'ms-auto' : 'me-auto')}>
                                {(() => {
                                    if(index > 0){
                                        if(messages[index-1].username != messages[index].username){
                                            return (<p className="fs-7 fw-bold mb-0">{messageData.username}</p>)
                                        }
                                    }else{
                                        return (<p className="fs-7 fw-bold mb-0">{messageData.username}</p>)
                                    }
                                })()}
                                
                                
                                <div className={"d-flex border shadow-sm pt-2 pb-2 ps-3 mt-1 text-justify " + (messageData.username == getUsername() ? 'receive_chat_bubble_bg' : 'send_chat_bubble_bg')}>
                                    <p className="mb-0">{messageData.message}</p>
                                    <p className="fs-7 mb-0 mt-1 ms-auto me-2 text-secondary">{messageData.datetime}</p>                             
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            

            <div className="col-12 mb-4">
                <div className="d-flex align-items-center mt-3">
                    <input ref={newMessageRef} type="text" className="form-control mb-2 me-2" placeholder="Write message here" />
                    <div className="bg-primary p-3 d-flex align-items-center justify-content-center" style={{borderRadius: '200px', cursor: 'pointer'}} onClick={handleMessageSend}>
                    <FaPaperPlane color="white" fontSize="0.8em"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
