import React, { createContext, useContext, useState, useEffect } from 'react';

export type FontSize = 'small' | 'normal' | 'large' | 'extra-large';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  getFontSizeClass: () => string;
  getFontSizeScale: () => number;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const saved = localStorage.getItem('font-size');
    return (saved as FontSize) || 'normal';
  });

  useEffect(() => {
    localStorage.setItem('font-size', fontSize);
    
    // Apply font size to document root for global scaling
    const root = document.documentElement;
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    root.classList.add(`font-${fontSize}`);
  }, [fontSize]);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small': return 'text-sm';
      case 'normal': return 'text-base';
      case 'large': return 'text-lg';
      case 'extra-large': return 'text-xl';
      default: return 'text-base';
    }
  };

  const getFontSizeScale = () => {
    switch (fontSize) {
      case 'small': return 0.875;
      case 'normal': return 1;
      case 'large': return 1.125;
      case 'extra-large': return 1.25;
      default: return 1;
    }
  };

  const value: AccessibilityContextType = {
    fontSize,
    setFontSize,
    getFontSizeClass,
    getFontSizeScale,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};