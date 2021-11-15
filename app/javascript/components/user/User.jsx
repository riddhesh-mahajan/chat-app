import React, {useRef} from 'react'
import './User.css';
import { useNavigate, Link } from "react-router-dom";

export default function User() {
    const usernameRef = useRef();
    const navigate = useNavigate();

    function  processUsername() {
        const currentUsernameValue = usernameRef.current.value;
        
        if(currentUsernameValue == '') return

        localStorage.setItem('username', currentUsernameValue)
           
        navigate('chat')
    }

    return (
        <div className="full-height d-flex align-items-center justify-content-center flex-column">
            <Link to="/chat">Chat link</Link>
            <div className="container col-10 col-md-4">
                <div className="p-4 border shadow-sm rounded">
                    <p className="h1 mb-4 text-center">Chat App</p>
                    <input ref={usernameRef} type="text" className="form-control form-control-lg mb-2" placeholder="Enter username" />
                    <button onClick={processUsername} className="btn btn-primary w-100">Start chat</button>
                </div>
            </div>
        </div>
    )
}
