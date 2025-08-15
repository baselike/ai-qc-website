import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface LeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    phone: '',
    fullName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    phone: ''
  });

  const validatePhone = (phone: string): boolean => {
    // Проверяем российский номер телефона
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Очищаем ошибки при изменении поля
    if (field === 'phone' && errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация телефона
    if (!validatePhone(formData.phone)) {
      setErrors({ phone: 'Введите корректный номер телефона' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/form_filled.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company_name: formData.companyName,
          phone: formData.phone,
          full_name: formData.fullName
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        if (data.status === 'ok') {
          // Успешная отправка - перенаправляем на страницу успеха
          window.location.href = '/success';
          return;
        }
      }
      
      // Если что-то пошло не так
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
      
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.companyName.trim() && formData.phone.trim() && formData.fullName.trim() && !errors.phone;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-lime/10 rounded-2xl flex items-center justify-center mb-4">
            <Icon name="Sparkles" size={32} className="text-lime" />
          </div>
          <DialogTitle className="text-2xl font-montserrat font-bold">
            Получить бесплатный аудит
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Заполните форму и мы свяжемся с вами в течение часа
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
              Название компании *
            </label>
            <Input
              id="companyName"
              type="text"
              placeholder="ООО «Ваша компания»"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              required
              className="border-gray-300 focus:border-lime focus:ring-lime"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
              Ваше ФИО *
            </label>
            <Input
              id="fullName"
              type="text"
              placeholder="Иванов Иван Иванович"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
              className="border-gray-300 focus:border-lime focus:ring-lime"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Телефон *
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className={`border-gray-300 focus:border-lime focus:ring-lime ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 flex items-center">
                <Icon name="AlertCircle" size={16} className="mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-4 pt-4">
            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full bg-lime text-black hover:bg-lime/90 font-semibold py-3 text-base disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                  Отправляем...
                </div>
              ) : (
                <div className="flex items-center">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </div>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="https://baselike.ru/privacy" className="text-lime hover:underline">политикой конфиденциальности</a>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;