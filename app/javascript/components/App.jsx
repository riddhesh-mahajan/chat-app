import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import User from './user/User';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<User />} />
            </Routes>
        </>
    )
}
