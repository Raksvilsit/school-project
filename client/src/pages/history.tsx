import { Navbar } from "@/components/layout/Navbar";
import { historyData } from "@/data/history";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background font-sans pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Хронология событий</h1>
          <p className="text-muted-foreground">
            Ключевые вехи в истории развития коммуникаций и интернета.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {historyData.map((item, index) => (
            <div key={item.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Mobile/Desktop distinct styles could be added, keeping it simple for now) */}
              
              <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm ring-1 ring-border/50">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto bg-muted">
                     {/* Image Container */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
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
                    
                    <CardContent className="p-0 text-muted-foreground leading-relaxed">
                      {item.fullText}
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
