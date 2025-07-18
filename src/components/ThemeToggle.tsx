import { Moon, Sun, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themes = [
    { name: "light", label: "Light", class: "" },
    { name: "dark", label: "Dark", class: "" },
    { name: "purple-light", label: "Purple Light", class: "theme-purple" },
    { name: "purple-dark", label: "Purple Dark", class: "theme-purple dark" },
    { name: "blue-light", label: "Blue Light", class: "theme-blue" },
    { name: "blue-dark", label: "Blue Dark", class: "theme-blue dark" },
    { name: "green-light", label: "Green Light", class: "theme-green" },
    { name: "green-dark", label: "Green Dark", class: "theme-green dark" },
  ];

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && theme) {
      const selectedTheme = themes.find(t => t.name === theme);
      if (selectedTheme) {
        document.documentElement.className = selectedTheme.class;
      }
    }
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
        <div className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 hover:bg-secondary transition-smooth hover-scale"
          aria-label="Toggle theme"
        >
          <Palette className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.name}
            onClick={() => setTheme(themeOption.name)}
            className={theme === themeOption.name ? "bg-accent text-accent-foreground" : ""}
          >
            {themeOption.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;