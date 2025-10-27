import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/projects/59f6fdc6-3dcb-4335-b604-1f143fde7d44/files/2c05c55d-0ce6-4a42-a94a-2f18f2e789ac.jpg",
      title: "Наша группа",
    },
    {
      url: "https://cdn.poehali.dev/projects/59f6fdc6-3dcb-4335-b604-1f143fde7d44/files/2c05c55d-0ce6-4a42-a94a-2f18f2e789ac.jpg",
      title: "Занятия творчеством",
    },
    {
      url: "https://cdn.poehali.dev/projects/59f6fdc6-3dcb-4335-b604-1f143fde7d44/files/2c05c55d-0ce6-4a42-a94a-2f18f2e789ac.jpg",
      title: "Игры на свежем воздухе",
    },
    {
      url: "https://cdn.poehali.dev/projects/59f6fdc6-3dcb-4335-b604-1f143fde7d44/files/2c05c55d-0ce6-4a42-a94a-2f18f2e789ac.jpg",
      title: "Праздничные мероприятия",
    },
  ];

  const awards = [
    {
      title: "Диплом воспитателя высшей категории",
      year: "2023",
      description: "Присвоена высшая квалификационная категория",
    },
    {
      title: "Победитель конкурса 'Лучший воспитатель года'",
      year: "2022",
      description: "Городской конкурс профессионального мастерства",
    },
    {
      title: "Сертификат повышения квалификации",
      year: "2023",
      description: "Современные методики дошкольного образования",
    },
    {
      title: "Благодарность от Министерства образования",
      year: "2021",
      description: "За вклад в развитие дошкольного образования",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Воспитатель детского сада</h2>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`transition-colors ${
                  activeSection === "home" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`transition-colors ${
                  activeSection === "about" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Обо мне
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className={`transition-colors ${
                  activeSection === "gallery" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Фотогалерея
              </button>
              <button
                onClick={() => scrollToSection("awards")}
                className={`transition-colors ${
                  activeSection === "awards" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Награды
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          <div className="space-y-6">
            <Badge className="bg-secondary text-secondary-foreground">
              Дошкольное образование
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Создаём будущее <br />с любовью и заботой
            </h1>
            <p className="text-lg text-muted-foreground">
              Профессиональный воспитатель с 15-летним опытом работы. 
              Каждый день я помогаю детям открывать мир, развиваться и расти счастливыми.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform"
              >
                Узнать больше
              </button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/7d65c7b2-a211-41c8-8925-6f61c4d52de7.jpg"
                alt="Воспитатель"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Обо мне</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональный путь и философия работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Каждый ребёнок уникален. Я нахожу особый подход к каждому малышу, 
                  учитывая его интересы и особенности развития.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Творческое развитие</h3>
                <p className="text-muted-foreground">
                  Использую современные методики и игровые формы обучения, 
                  чтобы развивать творческие способности и воображение детей.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Работа с родителями</h3>
                <p className="text-muted-foreground">
                  Поддерживаю открытое общение с родителями, 
                  создавая команду для гармоничного развития каждого ребёнка.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 space-y-6">
            <h3 className="text-2xl font-semibold">Моя история</h3>
            <p className="text-muted-foreground leading-relaxed">
              Свою карьеру воспитателя я начала 15 лет назад, окончив педагогический университет 
              с красным дипломом. За эти годы я прошла путь от младшего воспитателя до воспитателя 
              высшей категории. Постоянно совершенствую свои навыки, посещаю семинары и курсы повышения 
              квалификации. Для меня нет большей радости, чем видеть, как растут и развиваются мои воспитанники, 
              как они делают первые шаги к знаниям и дружбе.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground mt-2">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">300+</div>
                <div className="text-muted-foreground mt-2">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground mt-2">Проектов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary/20">
        <div className="max-w-6xl w-full space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Фотогалерея</h2>
            <p className="text-lg text-muted-foreground">
              Моменты из жизни нашей группы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Награды и сертификаты</h2>
            <p className="text-lg text-muted-foreground">
              Признание профессиональных достижений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <Badge variant="outline">{award.year}</Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                    <p className="text-muted-foreground text-sm">{award.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Trophy" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Постоянное развитие</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Регулярно прохожу курсы повышения квалификации и участвую в профессиональных 
              конкурсах. Для меня важно идти в ногу со временем и применять лучшие практики 
              дошкольного образования.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-semibold">Свяжитесь со мной</h3>
          <p className="text-background/80">
            Буду рада ответить на ваши вопросы о воспитании и развитии детей
          </p>
          <div className="flex gap-6 justify-center pt-4">
            <button className="hover:scale-110 transition-transform">
              <Icon name="Mail" size={24} />
            </button>
            <button className="hover:scale-110 transition-transform">
              <Icon name="Phone" size={24} />
            </button>
            <button className="hover:scale-110 transition-transform">
              <Icon name="MessageCircle" size={24} />
            </button>
          </div>
          <p className="text-background/60 text-sm pt-8">
            © 2024 Воспитатель детского сада. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;