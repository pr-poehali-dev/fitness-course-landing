
import React from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import ProgramSection from '@/components/ProgramSection';
import CallToAction from '@/components/CallToAction';
import { Menu } from 'lucide-react';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-fitness">FitnessPro</div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#program" className="text-gray-700 hover:text-fitness transition-colors">Программа</a>
              <a href="#benefits" className="text-gray-700 hover:text-fitness transition-colors">Преимущества</a>
              <a href="#pricing" className="text-gray-700 hover:text-fitness transition-colors">Цены</a>
              <a href="#contact" className="text-gray-700 hover:text-fitness transition-colors">Контакты</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <Button className="bg-fitness hover:bg-fitness-dark text-white hidden md:flex">
                Начать сейчас
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden" 
                onClick={toggleMobileMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
            <div className="container px-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#program" 
                  className="text-gray-700 hover:text-fitness transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Программа
                </a>
                <a 
                  href="#benefits" 
                  className="text-gray-700 hover:text-fitness transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Преимущества
                </a>
                <a 
                  href="#pricing" 
                  className="text-gray-700 hover:text-fitness transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Цены
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-fitness transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <Button className="bg-fitness hover:bg-fitness-dark text-white w-full">
                  Начать сейчас
                </Button>
              </nav>
            </div>
          </div>
        )}
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
