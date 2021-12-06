import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { HashRouter, Routes, Route } from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
