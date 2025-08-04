import { useState, useEffect } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Input } from './input';
import { cn } from '@/lib/utils';

const suggestions = [
  "Médecine", "Ingénierie", "Commerce", "Droit", "Arts", 
  "Sciences", "Littérature", "Psychologie", "Architecture", "Informatique"
];

const popularSearches = [
  "Classes préparatoires", "Écoles d'ingénieurs", "Universités Paris",
  "Stages d'été", "Bourses d'études", "Formations en alternance"
];

interface SmartSearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function SmartSearch({ onSearch, placeholder = "Rechercher...", className }: SmartSearchProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = [...suggestions, ...popularSearches].filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 6));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch?.(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    onSearch?.(query);
  };

  return (
    <div className={cn("relative w-full", className)}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="pl-10 sm:pl-12 pr-10 sm:pr-12 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 text-sm sm:text-base py-3 sm:py-4"
          />
          <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse" />
        </div>
      </form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border shadow-lg rounded-lg z-50 animate-fade-in">
          <div className="p-2">
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 hover:bg-accent/10 rounded transition-colors text-sm"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Search className="w-4 h-4 inline mr-2 text-muted-foreground" />
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}