import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import ChatBot from './pages/ChatBot';
import { Bot, Stethoscope } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat/medibot" element={
            <ChatBot 
              botName="MediBot" 
              botIcon={<Stethoscope className="w-6 h-6 text-blue-500" />}
              description="Your healthcare assistant (Demo only - not for real medical advice)"
            />
          } />
          <Route path="/chat/dietbot" element={
            <ChatBot 
              botName="DietBot" 
              botIcon={<Bot className="w-6 h-6 text-green-500" />}
              description="Your nutrition assistant (Demo only - consult professionals for real advice)"
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;