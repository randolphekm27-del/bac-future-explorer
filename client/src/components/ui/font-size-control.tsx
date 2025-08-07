import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useAccessibility, FontSize } from "@/contexts/AccessibilityContext";
import { Type, Minus, Plus, Settings } from "lucide-react";

interface FontSizeControlProps {
  className?: string;
}

export function FontSizeControl({ className }: FontSizeControlProps) {
  const { fontSize, setFontSize } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);

  const fontSizes: { value: FontSize; label: string; icon: React.ReactNode }[] = [
    { value: 'small', label: 'Petit', icon: <Type size={14} /> },
    { value: 'normal', label: 'Normal', icon: <Type size={16} /> },
    { value: 'large', label: 'Grand', icon: <Type size={18} /> },
    { value: 'extra-large', label: 'Très grand', icon: <Type size={20} /> },
  ];

  return (
    <div className={cn("relative", className)}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-font-size-toggle"
        className={cn(
          "group relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:shadow-xl",
          "bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600",
          "text-white hover:scale-105"
        )}
        aria-label="Régler la taille des polices"
      >
        <Type size={20} />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-black bg-opacity-75 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Taille du texte
        </span>
      </button>

      {/* Control Panel */}
      {isOpen && (
        <div 
          className={cn(
            "absolute bottom-14 right-0 z-[100000]",
            "rounded-lg bg-white dark:bg-gray-800 p-4 shadow-xl border border-gray-200 dark:border-gray-700",
            "min-w-[200px] animate-in slide-in-from-bottom-2 duration-300"
          )}
          data-testid="panel-font-size-control"
        >
          <div className="mb-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
              <Settings size={16} />
              Taille du texte
            </h3>
          </div>

          <div className="space-y-2">
            {fontSizes.map((size) => (
              <button
                key={size.value}
                onClick={() => setFontSize(size.value)}
                data-testid={`button-font-size-${size.value}`}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-all duration-200",
                  "hover:bg-gray-100 dark:hover:bg-gray-700",
                  fontSize === size.value 
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-600" 
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                <span className="flex-shrink-0">
                  {size.icon}
                </span>
                <span className="font-medium">{size.label}</span>
                {fontSize === size.value && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                )}
              </button>
            ))}
          </div>

          {/* Preview Text */}
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Aperçu :</div>
            <div className={cn(
              "text-gray-900 dark:text-white transition-all duration-200",
              fontSize === 'small' && "text-sm",
              fontSize === 'normal' && "text-base", 
              fontSize === 'large' && "text-lg",
              fontSize === 'extra-large' && "text-xl"
            )}>
              Exemple de texte d'orientation
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            data-testid="button-close-font-control"
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            ×
          </button>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[99999]" 
          onClick={() => setIsOpen(false)}
          data-testid="backdrop-font-size-control"
        />
      )}
    </div>
  );
}