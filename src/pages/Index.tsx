import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import LeadForm from '@/components/LeadForm';

const Index = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleOpenLeadForm = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/c81ab5fe-5776-4be8-84bf-da2e5c097f4a.png" 
              alt="BaseLike Logo" 
              className="h-8"
            />
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-gray-900 transition-colors">О сервисе</a>
            <a href="#benefits" className="hover:text-gray-900 transition-colors">Выгоды</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Тарифы</a>
            <a href="#cases" className="hover:text-gray-900 transition-colors">Кейсы</a>
          </nav>
          <Button onClick={handleOpenLeadForm} className="bg-lime text-black hover:bg-lime/90 font-medium">
            Получить аудит
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="py-32 px-6 relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/c17f981c-053d-4b77-9b99-203c0082e1e6.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-montserrat font-bold text-white leading-tight mb-8">
              Увеличим выручку на <span className="text-lime">10–20 %</span> за 90 дней с помощью <span className="text-lime">ИИ-отдела</span> контроля качества
            </h1>
            <p className="text-2xl text-gray-100 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Увеличим выручку минимум на 10 % с помощью ИИ-отдела контроля качества.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button onClick={handleOpenLeadForm} size="lg" className="bg-lime text-black hover:bg-lime/90 font-bold px-10 py-5 text-xl shadow-2xl hover:shadow-lime/25 transition-all">
                Записаться на онлайн экскурсию
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating AI Badge */}
        <div className="absolute top-8 right-8 bg-lime/95 backdrop-blur-sm text-black px-6 py-3 rounded-full font-bold shadow-2xl">
          <Icon name="Brain" size={24} className="inline mr-2" />
          AI Powered
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Для кого?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-violet" />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-gray-900">
                  Руководитель продаж
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Держите отдел под контролем и выводите KPI на новый уровень.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" size={32} className="text-gray-800" />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-gray-900">
                  Собственник бизнеса
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Видите, где теряются деньги, и получаете план по росту прибыли.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Benefits Timeline */}
      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Что дает ИИ отдел контроля качетва?
            </h2>
          </div>

          <div className="space-y-12">
            {/* Benefit 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center mr-4">
                    <Icon name="TrendingUp" size={24} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-semibold text-gray-900">
                    Увеличение выручки
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Наша задача помочь вам увеличить ваши продажи, за счет внедрения нашего инструмента. Без расширения штата, дополнительной нагрузки и временных затрат.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <Icon name="Plus" size={16} className="mr-2" />
                    <span className="font-semibold">+ 10% к выручке</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Icon name="Plus" size={16} className="mr-2" />
                    <span className="font-semibold">+5–8% к конверсии за 1–2 месяца</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-lime/20 to-violet/20 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-violet mb-2">+18%</div>
                    <div className="text-gray-600">Средний рост LTV</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-violet rounded-full flex items-center justify-center mr-4">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-semibold text-gray-900">
                    Экономия бюджета и контроль команды
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Автоматическая проверка звонков по чек-листам. Быстро находит ошибки и предлагает решение.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span className="font-semibold">40–60 часов экономим руководителю</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Icon name="TrendingUp" size={16} className="mr-2" />
                    <span className="font-semibold">20–35% рост эффективности</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-violet/20 to-lime/20 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-violet mb-2">60ч</div>
                    <div className="text-gray-600">Экономия времени в месяц</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center mr-4">
                    <Icon name="Shield" size={24} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-semibold text-gray-900">
                    Отдел продаж под контролем
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Вся аналитика и ошибки менеджеров в одном дашборде.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <Icon name="BarChart" size={16} className="mr-2" />
                    <span className="font-semibold">100+ метрик</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Icon name="Phone" size={16} className="mr-2" />
                    <span className="font-semibold">10 000+ звонков обучено</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Icon name="Users" size={16} className="mr-2" />
                    <span className="font-semibold">От 3 до 100 менеджеров</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-lime/20 to-violet/20 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-violet mb-2">100+</div>
                    <div className="text-gray-600">Контролируемых метрик</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Что нужно для старта работы?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">
                Доступ к звонкам
              </h3>
              <p className="text-gray-600 text-sm">
                Подключаемся к записи звонков из вашей CRM или телефонии.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">
                Чек-листы качества
              </h3>
              <p className="text-gray-600 text-sm">
                Используем ваши или настроим готовые под ваш бизнес.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">
                Настройка ИИ-анализа
              </h3>
              <p className="text-gray-600 text-sm">
                Синхронизация с CRM, загрузка исторических звонков, запуск мониторинга.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                4
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">
                Первые результаты
              </h3>
              <p className="text-gray-600 text-sm">
                Через 14 дней получаете первый отчёт с аналитикой и планом улучшений.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Тарифы
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Basic */}
            <Card className="relative border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-semibold">
                  Базовый
                </CardTitle>
                <CardDescription className="text-violet font-medium">
                  от 3 направлений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    До 5 пользователей
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    5 ключевых метрик для контроля
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Анализ звонков и этапов продаж
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Сводная аналитика по отделу
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Рейтинг сотрудников
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Точная транскрипция звонков
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Личный менеджер и поддержка
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Персональное обучение
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600">⏱ Стоимость минуты: 5 ₽</div>
                </div>
              </CardContent>
            </Card>

            {/* Standard */}
            <Card className="relative border-2 border-violet bg-violet/5">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-violet text-white">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-semibold">
                  Стандарт
                </CardTitle>
                <CardDescription className="text-violet font-medium">
                  от 5 направлений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    До 10 пользователей
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    10 метрик для анализа
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    10 метрик для анализа
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Все функции базового тарифа
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Кастомные этапы продаж
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Личный чек-лист оценки
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Отчёты для собственника и РОПа
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Рекомендации по повышению конверсии
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600">⏱ Стоимость минуты: 3 ₽</div>
                </div>
              </CardContent>
            </Card>

            {/* Premium */}
            <Card className="relative border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-semibold">
                  Премиум
                </CardTitle>
                <CardDescription className="text-violet font-medium">
                  от 7 направлений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    До 15 пользователей
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    15 метрик
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Максимальная персонализация
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Индивидуальные воронки и скрипты
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Расширенные отчёты и аналитика
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Совместная разработка улучшений отдела продаж
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Полная интеграция с CRM и внешними сервисами
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600">⏱ Стоимость минуты: 2 ₽</div>
                </div>
              </CardContent>
            </Card>

            {/* Custom */}
            <Card className="relative border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-semibold">
                  Индивидуальный
                </CardTitle>
                <CardDescription className="text-violet font-medium">
                  Без ограничений по направлениям и метрикам
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    От 15 пользователей
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Любая интеграция с CRM
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Любой объём звонков
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Все условия под вас
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-lg font-semibold text-center">💬 Обсуждается индивидуально</div>
                </div>
                <Button onClick={handleOpenLeadForm} variant="outline" className="w-full border-violet text-violet hover:bg-violet/10">
                  Обсудить условия
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet/5 to-lime/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet/5 via-transparent to-lime/5"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-700">
                <img 
                  src="https://cdn.poehali.dev/files/3a9f9b1f-05b4-4a1b-a06b-b0e699d5cbbf.png"
                  alt="Analytics Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-lime/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold">
                  <Icon name="BarChart3" size={16} className="inline mr-1" />
                  Live Demo
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-6">
                Бесплатная демонстрация
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Оставьте заявку, мы проведем вам экскурсию по работе сервиса на примере вашей сферы.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={handleOpenLeadForm} size="lg" className="bg-lime text-black hover:bg-lime/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на демо
                </Button>
                <a href="tel:+79101307620" >
                  <Button variant="outline" size="lg" className="border-violet text-violet hover:bg-violet/10 px-8 py-4 text-lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (910) 130-76-60
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-lime/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-violet/10 rounded-full blur-3xl"></div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Кейсы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Home" size={24} className="text-gray-800" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-montserrat font-semibold">
                      «Чистый Дом»
                    </CardTitle>
                    <CardDescription>Клининговые услуги</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 italic">
                  "Подключили ИИ-аудит звонков в феврале. До этого теряли заявки из-за невнятных скриптов и забытых перезвонов. 
                  После внедрения менеджеры стали быстрее реагировать и использовать нужные фразы."
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">📈</span>
                    <span className="font-semibold">Прирост заявок с 62% до 88%</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">⏱</span>
                    <span className="font-semibold">Время перезвона: с 15 до 6 минут</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">💰</span>
                    <span className="font-semibold">Средний чек вырос на 12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case 2 */}
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-violet/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Heart" size={24} className="text-violet" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-montserrat font-semibold">
                      «Doc+»
                    </CardTitle>
                    <CardDescription>Медицинская клиника</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 italic">
                  "Раньше не знали, что половина звонков на запись к врачу остаётся без ответа. 
                  ИИ помог понять, где именно сливаются пациенты. Настроили напоминания, обучение и контроль."
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">📈</span>
                    <span className="font-semibold">Успешные записи: с 54% до 85%</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">⏱</span>
                    <span className="font-semibold">Время дозвона: с 9 до 3 минут</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">📅</span>
                    <span className="font-semibold">Заполняемость графика +22%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case 3 */}
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Scale" size={24} className="text-gray-800" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-montserrat font-semibold">
                      «ЮрПрофи»
                    </CardTitle>
                    <CardDescription>Юридические услуги</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 italic">
                  "Мы были уверены, что менеджеры работают отлично, но оказалось, что 30% лидов 'теряются' на первых вопросах. 
                  После ИИ-аудита переписали скрипты и начали отрабатывать возражения."
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">📈</span>
                    <span className="font-semibold">Конверсия: с 18% до 31%</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">📉</span>
                    <span className="font-semibold">Пустые звонки -27%</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">💼</span>
                    <span className="font-semibold">Выручка на клиента +15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case 4 */}
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-violet/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Car" size={24} className="text-violet" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-montserrat font-semibold">
                      «АвтоСелл»
                    </CardTitle>
                    <CardDescription>Автосалон</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 italic">
                  "Клиенты часто просили перезвонить, но менеджеры забывали или звонили слишком поздно. 
                  Благодаря ИИ мы увидели, кто и где допускает ошибки, и внедрили автопостановку задач в CRM."
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">📈</span>
                    <span className="font-semibold">Завершённые сделки +19%</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">⏱</span>
                    <span className="font-semibold">Время ответа: с 12 до 4 минут</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="mr-2">💰</span>
                    <span className="font-semibold">Допопции +23%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gray-950 text-white relative overflow-hidden">
        {/* Organic leaf-like decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute top-8 left-8 w-96 h-96" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="url(#leafGradient1)" strokeWidth="2" opacity="0.8" 
                  d="M50,250 Q80,150 120,200 Q160,130 200,180 Q240,120 280,160 Q250,90 220,130 Q180,60 140,100 Q100,30 60,80" />
            <path fill="none" stroke="url(#leafGradient1)" strokeWidth="1.5" opacity="0.6"
                  d="M30,220 Q70,140 110,190 Q150,110 190,160 Q230,100 270,140" />
            <path fill="none" stroke="url(#leafGradient1)" strokeWidth="1" opacity="0.4"
                  d="M40,280 Q90,200 130,250 Q170,180 210,230 Q250,160 290,200" />
            <defs>
              <linearGradient id="leafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a3e635" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#84cc16" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#65a30d" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
          
          <svg className="absolute bottom-8 right-8 w-80 h-80" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="url(#leafGradient2)" strokeWidth="2" opacity="0.7"
                  d="M200,50 Q170,90 140,70 Q110,110 80,90 Q50,130 20,110 Q10,160 50,180 Q90,200 130,180 Q170,200 210,180" />
            <path fill="none" stroke="url(#leafGradient2)" strokeWidth="1.2" opacity="0.5"
                  d="M220,70 Q190,110 160,90 Q130,130 100,110 Q70,150 40,130" />
            <defs>
              <linearGradient id="leafGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#84cc16" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#a3e635" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - AI branding and organic elements */}
            <div className="relative">
              {/* AI Badge like in reference */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-lime/20 to-lime/10 border-2 border-lime/30 rounded-3xl mb-8">
                <span className="text-4xl font-black text-lime">AI</span>
              </div>
              
              {/* Dashboard cards grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="text-gray-400 text-sm mb-2">Соответствие скрипту</div>
                  <div className="flex items-end space-x-1 h-16">
                    <div className="w-6 h-8 bg-gray-600 rounded-sm"></div>
                    <div className="w-6 h-12 bg-gray-600 rounded-sm"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
                    <div className="w-6 h-10 bg-gray-600 rounded-sm"></div>
                    <div className="w-6 h-4 bg-gray-600 rounded-sm"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">0% 5% 10% 20% 30%</div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="text-gray-400 text-sm mb-2">Приветствие</div>
                  <div className="flex items-end space-x-1 h-16">
                    <div className="w-8 h-full bg-lime rounded-sm"></div>
                    <div className="w-8 h-8 bg-lime/60 rounded-sm"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Да Нет</div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="text-gray-400 text-sm mb-2">Презентация</div>
                  <div className="flex items-end space-x-1 h-16">
                    <div className="w-8 h-full bg-lime rounded-sm"></div>
                    <div className="w-8 h-8 bg-lime/60 rounded-sm"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Да Нет</div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="text-gray-400 text-sm mb-2">Возражения</div>
                  <div className="flex items-end space-x-1 h-16">
                    <div className="w-6 h-12 bg-lime rounded-sm"></div>
                    <div className="w-6 h-6 bg-lime/70 rounded-sm"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Да Частично</div>
                </div>
              </div>
            </div>

            {/* Right side - CTA content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-8 leading-tight">
                Проведем бесплатный аудит и демонстрацию уже сегодня
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start lg:justify-start justify-center">
                  <div className="w-2 h-2 bg-lime rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">Покажем реальные возможности на ваших данных</p>
                </div>
                <div className="flex items-start lg:justify-start justify-center">
                  <div className="w-2 h-2 bg-lime rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">Дадим персональные рекомендации по росту</p>
                </div>
                <div className="flex items-start lg:justify-start justify-center">
                  <div className="w-2 h-2 bg-lime rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">Составим план внедрения под вашу CRM</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <Button onClick={handleOpenLeadForm} size="lg" className="bg-lime text-black hover:bg-lime/90 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-lime/25 transition-all">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Получить бесплатный аудит
                </Button>
                <div className="flex items-center text-gray-400 lg:justify-start justify-center">
                  <Icon name="Clock" size={25} className="mr-2 text-lime" />
                  <span>30 минут Сегодня</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional organic glow elements */}
        <div className="absolute top-32 right-32 w-40 h-40 bg-lime/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-32 h-32 bg-lime/5 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/c81ab5fe-5776-4be8-84bf-da2e5c097f4a.png" 
                alt="BaseLike Logo" 
                className="h-8 mb-4"
              />
              <p className="text-gray-600 text-sm">
                ИИ-отдел контроля качества звонков для роста продаж
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-gray-900">О сервисе</a></li>
                <li><a href="#benefits" className="hover:text-gray-900">Выгоды</a></li>
                <li><a href="#pricing" className="hover:text-gray-900">Тарифы</a></li>
                <li><a href="#cases" className="hover:text-gray-900">Кейсы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="tel:+79101307620" className="hover:text-gray-900">+7 (910) 130-76-20</a></li>
                <li><a href='https://t.me/rodionov9' className="hover:text-gray-900">@rodionov9</a></li>
                <li><a href="email:b2b@baselike-tech.ru" className="hover:text-gray-900">b2b@baselike-tech.ru</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2025 BaseLike. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://baselike.ru/privacy-agreement" className="hover:text-gray-900">Согласие на обработку персональных данных</a>
              <a href="https://baselike.ru/privacy" className="hover:text-gray-900">Политика обработки персональных данных</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lead Form Modal */}
      <LeadForm 
        open={isLeadFormOpen} 
        onOpenChange={setIsLeadFormOpen} 
      />
    </div>
  );
};

export default Index;