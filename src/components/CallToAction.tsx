
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  CalendarCheck,
  MessageCircle, 
  FileText, 
  TrendingUp
} from 'lucide-react';

const CallToAction = () => {
  const pricingPlans = [
    {
      title: "Базовый",
      price: "4 900 ₽",
      duration: "1 месяц",
      features: [
        "Персональная программа тренировок",
        "Базовые рекомендации по питанию",
        "Поддержка в чате 2 раза в неделю",
        "Доступ к базе упражнений"
      ],
      buttonText: "Выбрать план",
      highlighted: false
    },
    {
      title: "Оптимальный",
      price: "9 900 ₽",
      duration: "2 месяца",
      features: [
        "Расширенная программа тренировок",
        "Детальный план питания",
        "Ежедневная поддержка в чате",
        "Еженедельные видео-консультации",
        "Доступ к закрытому сообществу",
        "Анализ прогресса каждые 2 недели"
      ],
      buttonText: "Лучший выбор",
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-fitness-light/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
            Начните свое преображение сегодня
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий тарифный план и сделайте первый шаг к лучшей версии себя
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                rounded-xl p-6 relative overflow-hidden
                ${plan.highlighted 
                  ? 'bg-fitness text-white shadow-lg border-2 border-fitness' 
                  : 'bg-white border border-gray-200 text-gray-900'}
              `}
            >
              {plan.highlighted && (
                <div className="absolute top-3 right-3 bg-white text-fitness text-xs font-bold px-3 py-1 rounded-full">
                  Популярный
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? 'text-white/80' : 'text-gray-600'}>
                  /{plan.duration}
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center 
                      ${plan.highlighted ? 'bg-white' : 'bg-fitness-light'}`}>
                      <div className={`w-2 h-2 rounded-full 
                        ${plan.highlighted ? 'bg-fitness' : 'bg-fitness'}`}></div>
                    </div>
                    <span className={plan.highlighted ? 'text-white/90' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${plan.highlighted 
                  ? 'bg-white text-fitness hover:bg-gray-100' 
                  : 'bg-fitness text-white hover:bg-fitness-dark'}`}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div id="contact" className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">
              Остались вопросы?
            </h3>
            <p className="text-gray-600">
              Свяжитесь со мной любым удобным способом, и я отвечу на все ваши вопросы
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-fitness-light/50 rounded-full flex items-center justify-center mb-3">
                <MessageCircle className="h-6 w-6 text-fitness" />
              </div>
              <h4 className="font-semibold text-gray-900">Telegram</h4>
              <p className="text-sm text-gray-600">@fitness_pro</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-fitness-light/50 rounded-full flex items-center justify-center mb-3">
                <MessageCircle className="h-6 w-6 text-fitness" />
              </div>
              <h4 className="font-semibold text-gray-900">WhatsApp</h4>
              <p className="text-sm text-gray-600">+7 (999) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-fitness-light/50 rounded-full flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-fitness" />
              </div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-sm text-gray-600">info@fitnesspro.ru</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-fitness-light/50 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="h-6 w-6 text-fitness" />
              </div>
              <h4 className="font-semibold text-gray-900">Instagram</h4>
              <p className="text-sm text-gray-600">@fitnesspro_coach</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-fitness hover:bg-fitness-dark text-white"
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
