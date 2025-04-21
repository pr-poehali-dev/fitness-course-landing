import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-fitness-light to-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Готовы Изменить Свою Жизнь?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Присоединяйтесь к программе сегодня и начните путь к здоровому и сильному телу уже сейчас
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Базовый",
                price: "7 990",
                period: "единоразово",
                features: [
                  "8-недельная программа тренировок",
                  "План питания",
                  "Доступ к мобильному приложению",
                  "Общий чат с участниками",
                  "Обновления на 12 месяцев"
                ],
                recommended: false
              },
              {
                name: "Оптимальный",
                price: "14 990",
                period: "единоразово",
                features: [
                  "Всё из тарифа Базовый",
                  "Еженедельные групповые созвоны",
                  "Персональная корректировка плана",
                  "Расширенный план питания и рецепты",
                  "Дополнительные тренировки"
                ],
                recommended: true
              },
              {
                name: "Премиум",
                price: "29 990",
                period: "единоразово",
                features: [
                  "Всё из тарифа Оптимальный",
                  "3 индивидуальные консультации",
                  "Персональный чат с тренером",
                  "Анализ биомаркеров",
                  "Пожизненный доступ к обновлениям"
                ],
                recommended: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.recommended ? 'border-fitness shadow-lg' : ''}`}>
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-fitness text-white px-3 py-1 text-xs font-bold">
                    ПОПУЛЯРНЫЙ ВЫБОР
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price} ₽</span>
                    <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-fitness">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.recommended ? 'bg-fitness hover:bg-fitness-dark' : ''}`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
                <p className="text-gray-600 mb-4">
                  Запишитесь на бесплатную консультацию, и я расскажу подробнее
                  о программе и отвечу на все ваши вопросы.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-fitness">📱</div>
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-fitness">✉️</div>
                    <span>fitness@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-fitness">📍</div>
                    <span>Москва, ул. Спортивная, 10</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold">Свяжитесь со мной прямо сейчас:</p>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-fitness text-fitness hover:bg-fitness/10">
                    Telegram
                  </Button>
                  <Button variant="outline" className="border-fitness text-fitness hover:bg-fitness/10">
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="border-fitness text-fitness hover:bg-fitness/10">
                    Instagram
                  </Button>
                  <Button variant="outline" className="border-fitness text-fitness hover:bg-fitness/10">
                    VK
                  </Button>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-fitness hover:bg-fitness-dark">
                    Записаться на консультацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
