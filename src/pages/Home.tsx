import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Stethoscope, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          AI-Powered Healthcare Assistant
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Get instant health guidance and dietary advice through our AI assistants.
          <span className="block text-red-500 font-semibold mt-2">
            Demo Only - Always consult healthcare professionals for medical advice.
          </span>
        </p>

        <div className="mt-10">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center">
                <Stethoscope className="h-12 w-12 text-blue-500" />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">MediBot</h2>
              <p className="mt-2 text-gray-600">
                Get preliminary health guidance and find nearby medical facilities.
              </p>
              <Link to="/chat/medibot">
                <Button className="mt-4 w-full">Chat with MediBot</Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center">
                <Bot className="h-12 w-12 text-green-500" />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">DietBot</h2>
              <p className="mt-2 text-gray-600">
                Receive personalized nutrition advice and diet plans.
              </p>
              <Link to="/chat/dietbot">
                <Button className="mt-4 w-full">Chat with DietBot</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <p className="ml-3 text-yellow-700">
              This is a demo application. For real medical emergencies, 
              please call your local emergency services immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;