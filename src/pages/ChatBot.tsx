import React, { useState, useRef, useEffect } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

// Mock data for hospitals and doctors
const mockHospitals = [
  {
    name: "Central Hospital",
    location: "123 Main St",
    doctors: ["Dr. Smith", "Dr. Johnson"],
    emergency: "555-0123"
  },
  {
    name: "City Medical Center",
    location: "456 Park Ave",
    doctors: ["Dr. Brown", "Dr. Davis"],
    emergency: "555-0456"
  }
];

interface ChatBotProps {
  botName: string;
  botIcon: React.ReactNode;
  description: string;
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC<ChatBotProps> = ({ botName, botIcon, description }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (botName === "MediBot") {
      if (input.includes("emergency") || input.includes("urgent")) {
        const hospital = mockHospitals[0];
        return `EMERGENCY: Please call ${hospital.emergency} immediately or visit ${hospital.name} at ${hospital.location}. Available doctors: ${hospital.doctors.join(", ")}`;
      }
      
      if (input.includes("headache")) {
        return "For headaches, I recommend: 1. Rest in a quiet, dark room 2. Stay hydrated 3. Try over-the-counter pain relievers. If symptoms persist, please consult a healthcare professional.";
      }

      if (input.includes("hospital") || input.includes("doctor")) {
        const hospitalList = mockHospitals
          .map(h => `${h.name} (${h.location}) - Doctors: ${h.doctors.join(", ")}`)
          .join("\n");
        return `Here are some nearby hospitals:\n${hospitalList}`;
      }
    }

    if (botName === "DietBot") {
      if (input.includes("diet plan") || input.includes("meal plan")) {
        return "Here's a general healthy diet suggestion:\n1. Breakfast: Oatmeal with fruits\n2. Lunch: Grilled chicken salad\n3. Dinner: Fish with vegetables\nPlease consult a nutritionist for personalized advice.";
      }
      
      if (input.includes("weight loss")) {
        return "For healthy weight management:\n1. Eat more vegetables\n2. Control portion sizes\n3. Stay hydrated\n4. Exercise regularly\nConsult a healthcare provider before starting any diet program.";
      }
    }

    return "I'm a demo bot. Please consult real healthcare professionals for medical advice. How else can I assist you?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      const botMessage: Message = {
        text: generateResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-blue-50 border-b flex items-center">
          {botIcon}
          <div className="ml-3">
            <h2 className="text-xl font-bold text-gray-900">{botName}</h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 border-b">
          <div className="flex items-center text-yellow-800">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <p className="ml-3 text-sm">
              This is a demo bot. For real medical advice or emergencies,
              please consult healthcare professionals or call emergency services.
            </p>
          </div>
        </div>

        <div className="h-[60vh] overflow-y-auto p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-900 shadow'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
                <p className="text-xs mt-1 opacity-75">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="text-gray-500 text-sm">
              {botName} is typing...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
          <div className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask ${botName} a question...`}
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit" disabled={!input.trim() || isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;