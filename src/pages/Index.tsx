import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
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
          <Button className="bg-lime text-black hover:bg-lime/90 font-medium">
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
              100 % звонков под контролем. Без найма новых сотрудников. Гарантия результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-lime text-black hover:bg-lime/90 font-bold px-10 py-5 text-xl shadow-2xl hover:shadow-lime/25 transition-all">
                Получить бесплатный аудит
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white/80 text-white hover:bg-white hover:text-black px-10 py-5 text-xl backdrop-blur-sm transition-all">
                <Icon name="Play" size={24} className="mr-3" />
                Смотреть демо
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
              ИИ-контроль качества — точка роста продаж
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Наш сервис на основе нейросетей помогает находить слабые места в работе отдела продаж, 
              чтобы вы зарабатывали больше без лишней нагрузки на команду и затрат на привлечение клиентов.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="UserCheck" size={32} className="text-violet" />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-gray-900">
                  Менеджер по продажам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Понимаете, что исправить, чтобы закрывать больше сделок.
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
              Выгоды решения
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
                    Рост продаж и конверсий
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  ИИ находит ключевые моменты в звонках и даёт рекомендации для увеличения конверсии и снижения отказов.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <Icon name="Plus" size={16} className="mr-2" />
                    <span className="font-semibold">+5–8% к конверсии за 1–2 месяца</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Icon name="Plus" size={16} className="mr-2" />
                    <span className="font-semibold">50+ компаний повысили LTV на 15–18%</span>
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
                    5 ключевых метрик
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Анализ звонков и этапов
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Сводная аналитика
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Рейтинг сотрудников
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-lg font-semibold">💰 Внедрение: 70 000 ₽</div>
                  <div className="text-lg font-semibold">📅 Абонплата: 35 000 ₽</div>
                  <div className="text-sm text-gray-600">⏱ Стоимость минуты: 5 ₽</div>
                </div>
                <Button className="w-full bg-lime text-black hover:bg-lime/90">
                  Выбрать тариф
                </Button>
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
                    Кастомные этапы продаж
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Личный чек-лист оценки
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Отчёты для собственника
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-lg font-semibold">💰 Внедрение: 100 000 ₽</div>
                  <div className="text-lg font-semibold">📅 Абонплата: 50 000 ₽</div>
                  <div className="text-sm text-gray-600">⏱ Стоимость минуты: 3 ₽</div>
                </div>
                <Button className="w-full bg-violet text-white hover:bg-violet/90">
                  Выбрать тариф
                </Button>
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
                    Индивидуальные воронки
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Расширенные отчёты
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-lg font-semibold">💰 Внедрение: 150 000 ₽</div>
                  <div className="text-lg font-semibold">📅 Абонплата: 75 000 ₽</div>
                  <div className="text-sm text-gray-600">⏱ Стоимость минуты: 2 ₽</div>
                </div>
                <Button className="w-full bg-lime text-black hover:bg-lime/90">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            {/* Custom */}
            <Card className="relative border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-semibold">
                  Индивидуальный
                </CardTitle>
                <CardDescription className="text-violet font-medium">
                  от 15 пользователей
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Без ограничений
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
                <Button variant="outline" className="w-full border-violet text-violet hover:bg-violet/10">
                  Обсудить условия
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
        {/* Organic decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute top-10 left-10 w-80 h-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="url(#gradient1)" strokeWidth="1" d="M30,150 Q50,50 80,100 Q110,150 140,80 Q170,120 180,60" />
            <path fill="none" stroke="url(#gradient1)" strokeWidth="0.8" d="M20,120 Q60,40 90,90 Q120,140 150,70" />
            <path fill="none" stroke="url(#gradient1)" strokeWidth="0.6" d="M40,180 Q70,80 100,130 Q130,180 160,110" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="100%" stopColor="#65a30d" />
              </linearGradient>
            </defs>
          </svg>
          <svg className="absolute bottom-10 right-10 w-60 h-60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="url(#gradient2)" strokeWidth="1.2" d="M160,40 Q120,80 90,50 Q60,20 30,60 Q10,100 50,120" />
            <path fill="none" stroke="url(#gradient2)" strokeWidth="0.9" d="M180,60 Q140,100 110,70 Q80,40 50,80" />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="100%" stopColor="#a3e635" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-lime/20 rounded-2xl mb-6 border border-lime/30">
              <Icon name="Sparkles" size={32} className="text-lime" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
              Проведем бесплатный аудит и демонстрацию уже сегодня
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Покажем реальные возможности ИИ-анализа на примере ваших звонков и дадим персональные рекомендации по росту продаж
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-lime/50 transition-all duration-300">
              <div className="w-12 h-12 bg-lime/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Search" size={24} className="text-lime" />
              </div>
              <h3 className="text-white font-semibold mb-2">Аудит звонков</h3>
              <p className="text-gray-400 text-sm">Анализируем ваши записи и находим точки роста</p>
              <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-lime rounded-full"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-lime/50 transition-all duration-300">
              <div className="w-12 h-12 bg-lime/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={24} className="text-lime" />
              </div>
              <h3 className="text-white font-semibold mb-2">Прогноз роста</h3>
              <p className="text-gray-400 text-sm">Показываем потенциал увеличения продаж</p>
              <div className="mt-4 flex space-x-1">
                <div className="flex-1 h-8 bg-lime rounded"></div>
                <div className="flex-1 h-6 bg-lime/70 rounded"></div>
                <div className="flex-1 h-10 bg-lime rounded"></div>
                <div className="flex-1 h-7 bg-lime/60 rounded"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-lime/50 transition-all duration-300">
              <div className="w-12 h-12 bg-lime/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Target" size={24} className="text-lime" />
              </div>
              <h3 className="text-white font-semibold mb-2">Персональный план</h3>
              <p className="text-gray-400 text-sm">Составляем roadmap под вашу отрасль</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-lime rounded-full"></div>
                  <div className="h-1 bg-lime/60 rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-lime rounded-full"></div>
                  <div className="h-1 bg-lime/40 rounded flex-1"></div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-lime/50 transition-all duration-300">
              <div className="w-12 h-12 bg-lime/20 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} className="text-lime" />
              </div>
              <h3 className="text-white font-semibold mb-2">Быстрый старт</h3>
              <p className="text-gray-400 text-sm">Настройка за 30 минут, результат сегодня</p>
              <div className="mt-4 relative">
                <div className="w-full h-1 bg-gray-700 rounded-full"></div>
                <div className="absolute top-0 left-0 w-3/4 h-1 bg-lime rounded-full"></div>
                <div className="absolute -top-1 right-1/4 w-3 h-3 bg-lime rounded-full border-2 border-gray-800"></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-lime text-black hover:bg-lime/90 font-semibold px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на бесплатный аудит
              </Button>
              <div className="flex items-center text-gray-300">
                <Icon name="Clock" size={16} className="mr-2 text-lime" />
                <span className="text-sm">Займет всего 30 минут</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Или позвоните прямо сейчас: 
              <span className="text-lime font-semibold ml-2">+7 (999) 123-45-67</span>
            </p>
          </div>
        </div>
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
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Проведем бесплатный аудит и демонстрацию уже сегодня
          </h2>
          <Button size="lg" className="bg-lime text-black hover:bg-lime/90 font-semibold px-12 py-4 text-lg">
            Оставить заявку
          </Button>
        </div>
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
              <h4 className="font-montserrat font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Документация</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900">Техподдержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>+7 (999) 123-45-67</li>
                <li>info@baselike.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2024 BaseLike. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">Политика конфиденциальности</a>
              <a href="#" className="hover:text-gray-900">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;