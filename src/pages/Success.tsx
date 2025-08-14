import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Success: React.FC = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime/5 to-violet/5 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Icon name="CheckCircle" size={40} className="text-green-500" />
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
            Заявка отправлена!
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Спасибо за ваш интерес к нашему сервису. 
            Мы свяжемся с вами в течение часа для проведения 
            бесплатного аудита.
          </p>

          {/* Additional Info */}
          <div className="bg-lime/10 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Clock" size={20} className="text-lime mr-2" />
              <span className="font-medium text-gray-700">Что дальше?</span>
            </div>
            <p className="text-sm text-gray-600">
              Наш специалист позвонит вам для согласования времени демонстрации 
              и проведения аудита ваших продаж
            </p>
          </div>

          {/* Back Button */}
          <Button 
            onClick={handleBackToHome}
            className="w-full bg-lime text-black hover:bg-lime/90 font-semibold py-3"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;