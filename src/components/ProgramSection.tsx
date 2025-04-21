
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProgramSection = () => {
  const programFeatures = [
    {
      title: "Персонализированная программа",
      description: "Индивидуальный план тренировок, учитывающий ваши цели, уровень подготовки и особенности организма."
    },
    {
      title: "Рацион питания",
      description: "Сбалансированное меню с учетом ваших предпочтений, направленное на достижение максимальных результатов."
    },
    {
      title: "Онлайн-поддержка",
      description: "Постоянное сопровождение тренера, еженедельная корректировка программы и ответы на все вопросы."
    }
  ];

  const benefits = [
    "Уникальная методика, проверенная на сотнях клиентов",
    "Тренировки, которые можно выполнять дома или в зале",
    "Контроль техники выполнения через видео-отчеты",
    "Постоянная мотивация и поддержка сообщества",
    "Доступ к закрытому чату с единомышленниками",
    "Бонусные материалы по восстановлению и растяжке"
  ];

  return (
    <section id="program" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
            Что включает программа <span className="text-fitness">FitnessPro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный подход к вашему здоровью и физической форме, который приведет к видимым результатам уже через 30 дней.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-fitness-light/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80" 
                alt="Результаты трансформации" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div id="benefits">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-6">
              Преимущества курса
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-fitness flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
