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
            <div className="container col-11 col-md-4">
                <div className="p-4 shadow-sm rounded">
                    <p className="fw-bold fs-1 mb-3 text-center">Chat App</p>
                    <input ref={usernameRef} type="text" className="form-control form-control-lg mb-2" placeholder="Enter username" />
                    <button onClick={processUsername} className="btn btn-primary w-100">Start chat</button>
                </div>
            </div>
        </div>
    )
}
