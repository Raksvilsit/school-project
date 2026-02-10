import { Navbar } from "@/components/layout/Navbar";
import { historyData, quizQuestions } from "@/data/history";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function HistoryPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-background font-sans pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-4">История и Технологии</h1>
          <p className="text-muted-foreground">
            Изучите ключевые этапы развития Интернета и проверьте свои знания.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="space-y-12 max-w-4xl mx-auto mb-24">
          {historyData.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm ring-1 ring-border/50">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                      {item.year}
                    </Badge>
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground/80 mt-1">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 text-muted-foreground leading-relaxed text-sm">
                    {item.fullText}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quiz Section */}
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-2xl border shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-muted">
            <div 
              className="h-full bg-primary transition-all duration-300" 
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            Проверьте свои знания
          </h2>

          {!showResult ? (
            <div className="space-y-6">
              <p className="text-lg font-medium">
                {currentQuestion + 1}. {quizQuestions[currentQuestion].question}
              </p>
              <div className="grid gap-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    disabled={selectedOption !== null}
                    className={`p-4 text-left rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      selectedOption === null 
                        ? "hover:bg-muted border-border" 
                        : index === quizQuestions[currentQuestion].answer
                        ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400"
                        : selectedOption === index
                        ? "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400"
                        : "opacity-50 border-border"
                    }`}
                  >
                    {option}
                    {selectedOption !== null && index === quizQuestions[currentQuestion].answer && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                    {selectedOption === index && index !== quizQuestions[currentQuestion].answer && (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </button>
                ))}
              </div>
              <Button 
                className="w-full h-12 text-lg" 
                disabled={selectedOption === null}
                onClick={handleNext}
              >
                {currentQuestion === quizQuestions.length - 1 ? "Завершить" : "Следующий вопрос"}
              </Button>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="mb-6 inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Тест завершен!</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Ваш результат: <span className="text-foreground font-bold">{score}</span> из {quizQuestions.length}
              </p>
              <Button onClick={resetQuiz} variant="outline" size="lg">
                Попробовать снова
              </Button>
            </div>
          )}
        </div>

        <footer className="mt-24 text-center text-muted-foreground">
          <p>Проект выполнил: <span className="font-semibold text-foreground">Тищенко Александр</span></p>
          <p className="text-xs mt-2">© 2026 Самара, Школа №33</p>
        </footer>
      </main>
    </div>
  );
}
