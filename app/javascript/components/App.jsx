import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ChatIndex from './chat/ChatIndex';
import User from './user/User';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/chat" element={<ChatIndex />} />
            </Routes>
        </>
    )
}
