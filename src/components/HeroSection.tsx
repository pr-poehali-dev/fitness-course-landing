
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-fitness-light/30 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-heading text-gray-900">
              Трансформируй своё тело с <span className="text-fitness">FitnessPro</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-[600px]">
              Персональная программа тренировок и питания, разработанная профессиональным тренером для достижения ваших фитнес-целей.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                size="lg" 
                className="bg-fitness hover:bg-fitness-dark text-white"
              >
                Начать трансформацию
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-fitness text-fitness hover:bg-fitness-light/50"
              >
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative mx-auto lg:mr-0 hover-scale">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80" 
                alt="Профессиональный фитнес-тренер" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-semibold text-gray-900">Дмитрий Соколов</div>
              <div className="text-xs text-gray-600">Сертифицированный тренер • 10+ лет опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
