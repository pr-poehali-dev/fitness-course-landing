
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Dumbbell, Salad, Clock, Users, Medal } from 'lucide-react';

const ProgramSection = () => {
  return (
    <section id="program" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight font-heading mb-2">Программа FitClub</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Подробная программа персональных тренировок и питания, которая поможет вам достичь ваших фитнес-целей быстрее и эффективнее.
          </p>
        </div>

        {/* Что входит в программу */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="hover-scale border-0 shadow-md">
            <CardContent className="p-6">
              <Dumbbell className="h-10 w-10 text-fitness mb-4" />
              <h3 className="text-xl font-bold mb-2">Индивидуальные тренировки</h3>
              <p className="text-gray-600">
                Персонализированная программа тренировок, адаптированная под ваши цели, уровень подготовки и доступное оборудование.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover-scale border-0 shadow-md">
            <CardContent className="p-6">
              <Salad className="h-10 w-10 text-fitness mb-4" />
              <h3 className="text-xl font-bold mb-2">План питания</h3>
              <p className="text-gray-600">
                Сбалансированный план питания с учетом ваших предпочтений, аллергий и режима дня для максимальных результатов.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover-scale border-0 shadow-md">
            <CardContent className="p-6">
              <Clock className="h-10 w-10 text-fitness mb-4" />
              <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">
                Постоянная связь с тренером через мессенджеры для ответов на вопросы и корректировки программы в любое время суток.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Преимущества */}
        <div id="benefits" className="pt-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight font-heading mb-2">Преимущества курса</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Почему наша программа эффективнее других и что делает её особенной
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-fitness mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Научно обоснованный подход</h3>
                <p className="text-gray-600">
                  Все тренировки и рекомендации основаны на последних научных исследованиях в области фитнеса и нутрициологии.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-fitness mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Регулярные корректировки</h3>
                <p className="text-gray-600">
                  Программа регулярно обновляется на основе вашего прогресса для достижения максимальных результатов.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-fitness mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Видео-инструкции</h3>
                <p className="text-gray-600">
                  Детальные видео с правильной техникой выполнения каждого упражнения для предотвращения травм.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-fitness mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Сообщество единомышленников</h3>
                <p className="text-gray-600">
                  Доступ к закрытому сообществу участников программы для обмена опытом и мотивации.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-fitness mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Отслеживание прогресса</h3>
                <p className="text-gray-600">
                  Удобная система для отслеживания ваших результатов с графиками и аналитикой.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-fitness mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Пожизненный доступ</h3>
                <p className="text-gray-600">
                  После приобретения программы вы получаете пожизненный доступ ко всем материалам и обновлениям.
                </p>
              </div>
            </div>
          </div>
          
          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
            <div className="p-6 bg-fitness/5 rounded-lg">
              <div className="text-4xl font-bold text-fitness mb-1">500+</div>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            
            <div className="p-6 bg-fitness/5 rounded-lg">
              <div className="text-4xl font-bold text-fitness mb-1">10+</div>
              <p className="text-gray-600">Лет опыта</p>
            </div>
            
            <div className="p-6 bg-fitness/5 rounded-lg">
              <div className="text-4xl font-bold text-fitness mb-1">98%</div>
              <p className="text-gray-600">Достигли цели</p>
            </div>
            
            <div className="p-6 bg-fitness/5 rounded-lg">
              <div className="text-4xl font-bold text-fitness mb-1">24/7</div>
              <p className="text-gray-600">Поддержка</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
