import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, History, Globe, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
          
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              История появления и развития <span className="text-primary">Интернета</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Индивидуальный итоговый проект ученика 9б класса Тищенко Александра. 
              Путешествие от первого телеграфа до глобальной сети.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/history">
                <Button size="lg" className="gap-2 text-md">
                  Начать изучение <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Этапы эволюции</h3>
                <p className="text-muted-foreground">
                  От электрического телеграфа 1830-х годов до современных цифровых систем.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Технологии</h3>
                <p className="text-muted-foreground">
                  Пакетная передача, протоколы TCP/IP и World Wide Web.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Проверка знаний</h3>
                <p className="text-muted-foreground">
                  Интерактивные тесты для закрепления изученного материала.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Автор проекта: Тищенко Александр</p>
          <p className="text-sm">МБОУ ШКОЛА №33, Самара, 2026</p>
        </div>
      </footer>
    </div>
  );
}
