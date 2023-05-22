import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { io } from 'socket.io-client'
import WaitingRoom from './pages/waiting-room/waiting-room'
import ChatRoom from './pages/chatroom/chatroom'

export const socket = io(`http://localhost:4000/chat`)

function App() {
  return (
    <Routes>
      <Route path="/" element={<WaitingRoom />} />
      <Route path="/room/:roomName" element={<ChatRoom />} />
    </Routes>
  )
}

export default App
