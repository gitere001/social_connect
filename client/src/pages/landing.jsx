import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

export default function Landing() {
  const [currentView, setCurrentView] = useState('register');
  return (
    <>
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      <div className="container mx-auto px-4 py-4 md:py-6">
        {/* Layout for desktop - side by side */}
        <div className="hidden md:flex md:items-center md:justify-between md:space-x-8 lg:space-x-16">
          <HeroSection
            currentView={currentView}
          />

          <div className="w-full max-w-md">
            {currentView === 'register' ? (
              <RegisterForm setCurrentView={setCurrentView} />
            ) : (
              <LoginForm setCurrentView={setCurrentView} />
            )}
          </div>
        </div>

        {/* Layout for mobile - stacked */}
        <div className="md:hidden">
          {currentView === 'register' ? (
            <>
              <HeroSection currentView={currentView} />
              <div className="mt-8">
                <RegisterForm setCurrentView={setCurrentView} />
              </div>
            </>
          ) : (
            <>
              <HeroSection currentView={currentView} />
              <div className="mt-8">
                <LoginForm setCurrentView={setCurrentView} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
