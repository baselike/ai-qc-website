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
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 leading-tight mb-6">
                Увеличим выручку на <span className="text-violet">10–20 %</span> за 90 дней с помощью <span className="bg-gradient-to-r from-lime to-green-400 bg-clip-text text-transparent">ИИ-отдела</span> контроля качества
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                100 % звонков под контролем. Без найма новых сотрудников. Гарантия результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-lime text-black hover:bg-lime/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Получить бесплатный аудит
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg transition-all">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black">
                <img 
                  src="https://cdn.poehali.dev/files/268a70bc-6353-4d6a-90ba-89d2dd40e4bc.png"
                  alt="AI Growth Analytics"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-6 right-6 bg-lime/90 backdrop-blur-sm text-black px-4 py-2 rounded-full font-bold shadow-lg">
                  <Icon name="TrendingUp" size={20} className="inline mr-2" />
                  AI Growth
                </div>
              </div>
            </div>
          </div>
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
      <section className="py-20 px-6 bg-gradient-to-r from-lime/10 to-violet/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-6">
            Бесплатная демонстрация
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Оставьте заявку, мы проведем вам экскурсию по работе сервиса на примере вашей сферы.
          </p>
          <Button size="lg" className="bg-lime text-black hover:bg-lime/90 font-semibold px-12 py-4 text-lg">
            Оставить заявку
          </Button>
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