import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ProgramSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Содержание Программы</h2>
          <p className="text-lg text-gray-600">
            Моя авторская программа даст вам все необходимые инструменты для достижения 
            результатов даже если раньше у вас ничего не получалось
          </p>
        </div>

        <Tabs defaultValue="program" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="program">Программа</TabsTrigger>
            <TabsTrigger value="benefits">Преимущества</TabsTrigger>
            <TabsTrigger value="results">Результаты</TabsTrigger>
          </TabsList>
          
          <TabsContent value="program" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-fitness">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-fitness-light p-2 rounded-lg text-fitness-dark">💪</div>
                    <h3 className="font-bold text-xl">Тренировочные Планы</h3>
                  </div>
                  <p className="text-gray-600">
                    8-недельная программа тренировок, адаптированная под разные уровни 
                    подготовки. Тренируйтесь дома или в зале - оба варианта доступны.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-fitness">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-fitness-light p-2 rounded-lg text-fitness-dark">🥗</div>
                    <h3 className="font-bold text-xl">Питание и Рецепты</h3>
                  </div>
                  <p className="text-gray-600">
                    Гибкий план питания, который не заставит вас страдать. 
                    Включает рецепты вкусных блюд и рекомендации по добавкам.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-fitness">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-fitness-light p-2 rounded-lg text-fitness-dark">📱</div>
                    <h3 className="font-bold text-xl">Мобильное Приложение</h3>
                  </div>
                  <p className="text-gray-600">
                    Доступ к тренировкам через специальное приложение. 
                    Отслеживайте прогресс и получайте напоминания о тренировках.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-fitness">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-fitness-light p-2 rounded-lg text-fitness-dark">👨‍🏫</div>
                    <h3 className="font-bold text-xl">Поддержка Тренера</h3>
                  </div>
                  <p className="text-gray-600">
                    Еженедельные групповые созвоны и закрытый чат с участниками программы, 
                    где я отвечаю на все ваши вопросы.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="benefits" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Индивидуальный подход",
                  description: "Программа учитывает ваш уровень подготовки и особенности тела"
                },
                {
                  icon: "⏱️",
                  title: "Экономия времени",
                  description: "Эффективные тренировки от 30 минут, вписывающиеся в любой график"
                },
                {
                  icon: "🧠",
                  title: "Ментальное здоровье",
                  description: "Улучшение самочувствия и уровня энергии уже с первой недели"
                },
                {
                  icon: "🔄",
                  title: "Устойчивые результаты",
                  description: "Фокус на формировании здоровых привычек, а не временном эффекте"
                },
                {
                  icon: "👫",
                  title: "Сообщество",
                  description: "Вы тренируетесь вместе с единомышленниками и поддерживаете друг друга"
                },
                {
                  icon: "📊",
                  title: "Отслеживание прогресса",
                  description: "Специальная система учета результатов для поддержания мотивации"
                }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3 mx-auto">{item.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="results" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Что вы получите после 8 недель:</h3>
                <ul className="space-y-3">
                  {[
                    "Снижение веса на 5-8 кг (при соблюдении рекомендаций)",
                    "Улучшение физической формы и выносливости",
                    "Повышение мышечного тонуса и силовых показателей",
                    "Стабильный уровень энергии в течение дня",
                    "Улучшение качества сна и общего самочувствия",
                    "Знание основ тренировок и питания для поддержания результатов"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-fitness">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Истории успеха участников</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Екатерина, 32 года",
                      text: "После родов я набрала 15 кг и не могла их сбросить 2 года. С программой Алексея я достигла желаемого веса за 3 месяца! Рекомендую всем мамам.",
                      result: "-12 кг"
                    },
                    {
                      name: "Дмитрий, 40 лет",
                      text: "Сидячая работа и возраст сделали свое дело. Программа помогла мне вернуть энергию и избавиться от болей в спине. Теперь я в лучшей форме, чем в 30!",
                      result: "+20% силы"
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold">{item.name}</div>
                        <div className="bg-fitness text-white text-sm px-2 py-1 rounded-full">
                          {item.result}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramSection;
