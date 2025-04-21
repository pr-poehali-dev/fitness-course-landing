
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const CallToAction = () => {
  // Функция плавной прокрутки к форме контактов
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <>
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-2">Выберите свой план</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Инвестируйте в своё здоровье и форму с одним из наших тарифных планов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Базовый план */}
            <Card className="hover-scale border-fitness/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">Базовый</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center mb-6">5 900 ₽</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Персональная программа тренировок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Базовый план питания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>30 дней поддержки в чате</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Доступ к базе упражнений</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-fitness hover:bg-fitness-dark"
                  onClick={scrollToContact}
                >
                  Начать сейчас
                </Button>
              </CardFooter>
            </Card>
            
            {/* Стандарт план */}
            <Card className="hover-scale border-2 border-fitness relative">
              <div className="absolute top-0 right-0 bg-fitness text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">Популярный</div>
              <CardHeader>
                <CardTitle className="text-xl text-center">Стандарт</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center mb-6">9 900 ₽</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Персональная программа тренировок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Детальный план питания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>90 дней поддержки в чате</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Еженедельные консультации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Доступ к закрытому сообществу</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-fitness hover:bg-fitness-dark"
                  onClick={scrollToContact}
                >
                  Выбрать план
                </Button>
              </CardFooter>
            </Card>
            
            {/* Премиум план */}
            <Card className="hover-scale border-fitness/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">Премиум</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center mb-6">14 900 ₽</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Персональная программа тренировок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Индивидуальный план питания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Поддержка 24/7 без ограничений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Онлайн тренировки 2 раза в неделю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>Персональный трекер прогресса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-fitness flex-shrink-0 mt-0.5" />
                    <span>VIP доступ ко всем материалам</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-fitness hover:bg-fitness-dark"
                  onClick={scrollToContact}
                >
                  Выбрать план
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Контактная форма */}
      <section id="contact" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-heading mb-4">Запишитесь на бесплатную консультацию</h2>
              <p className="text-gray-600 mb-6">
                Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время для обсуждения деталей программы и ответов на ваши вопросы.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-fitness/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fitness" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>info@fitclub.ru</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-fitness/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fitness" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+7 (800) 123-45-67</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Ваше имя</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Введите ваше имя"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fitness/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fitness/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fitness/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                    <textarea
                      id="message"
                      placeholder="Ваше сообщение или вопрос"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fitness/50"
                    ></textarea>
                  </div>
                </div>
                <Button className="w-full bg-fitness hover:bg-fitness-dark">
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
