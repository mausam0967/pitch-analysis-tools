import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary flex items-center justify-center">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-6">Modern Soccer UI</h1>
        <p className="text-xl mb-8">Track your performance, analyze your game, and improve your skills</p>
        <div className="space-x-4">
          <Button 
            onClick={() => navigate('/auth/login')}
            variant="default"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Login
          </Button>
          <Button 
            onClick={() => navigate('/auth/register')}
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;