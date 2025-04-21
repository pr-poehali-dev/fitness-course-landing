import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-fitness-light">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-fitness/10 text-fitness-dark font-medium text-sm mb-2">
              Авторский фитнес-курс
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Трансформация Тела <br />
              <span className="text-fitness">За 8 Недель</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Привет, я Алексей Петров — сертифицированный фитнес-тренер с 10-летним опытом. 
              Помогаю людям достигать желаемой формы без изнуряющих тренировок и жестких диет.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="bg-fitness hover:bg-fitness-dark text-white">
                Начать сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-fitness text-fitness hover:bg-fitness/10">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="lg:pl-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Тренер Алексей Петров" 
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-fitness rounded-full p-1">
                    ✓
                  </span>
                  <span className="font-medium">Сертифицированный тренер</span>
                </div>
                <div className="flex items-center gap-6 mt-3">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-80">Довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10</div>
                    <div className="text-sm opacity-80">Лет опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
