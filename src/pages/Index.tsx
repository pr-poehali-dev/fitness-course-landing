import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProgramSection from '@/components/ProgramSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-fitness">FitnessPro</div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#program" className="text-gray-700 hover:text-fitness">Программа</a>
              <a href="#benefits" className="text-gray-700 hover:text-fitness">Преимущества</a>
              <a href="#pricing" className="text-gray-700 hover:text-fitness">Цены</a>
              <a href="#contact" className="text-gray-700 hover:text-fitness">Контакты</a>
            </nav>
            <button className="bg-fitness text-white px-4 py-2 rounded-md hover:bg-fitness-dark transition-colors">
              Начать сейчас
            </button>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <ProgramSection />
        <CallToAction />
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-bold text-xl text-fitness mb-2">FitnessPro</div>
              <p className="text-gray-600 text-sm">
                © 2023 FitnessPro. Все права защищены.<br />
                Авторский курс тренера по фитнесу.
              </p>
            </div>
            <div className="flex flex-col md:items-end">
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-600 hover:text-fitness">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-fitness">Telegram</a>
                <a href="#" className="text-gray-600 hover:text-fitness">VK</a>
                <a href="#" className="text-gray-600 hover:text-fitness">YouTube</a>
              </div>
              <p className="text-gray-500 text-sm">
                Политика конфиденциальности | Условия использования
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
