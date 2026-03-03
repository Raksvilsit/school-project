import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import HistoryPage from "@/pages/history";

function Router() {
  const [location] = useLocation();
  const base = "/school-project";

  return (
    <Switch>
      <Route path={`${base}/`} component={Home} />
      <Route path={`${base}/history`} component={HistoryPage} />
      {/* Fallback for development/root */}
      <Route path="/" component={Home} />
      <Route path="/history" component={HistoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
