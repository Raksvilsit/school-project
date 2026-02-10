
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Главная" },
    { href: "/history", label: "История Интернета" },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-8 flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Web History
          </span>
        </div>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
              "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
              location === link.href
                ? "text-primary"
                : "text-muted-foreground"
            )}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
