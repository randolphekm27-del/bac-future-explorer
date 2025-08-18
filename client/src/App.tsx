import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingAccessibility } from "@/components/ui/floating-accessibility";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import Index from "./pages/Index";
import Universities from "./pages/Universities";
import UniversityDetail from "./pages/UniversityDetail";
import UniversityGallery from "./pages/UniversityGallery";
import Programs from "./pages/Programs";
import ProgramSchools from "./pages/ProgramSchools";
import ProgramDetail from "./pages/ProgramDetail";
import Internships from "./pages/Internships";
import Competitions from "./pages/Competitions";
import Courses from "./pages/Courses";
import Conseils from "./pages/Conseils";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AccessibilityProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:slug" element={<UniversityDetail />} />
          <Route path="/universities/:slug/gallery" element={<UniversityGallery />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/program-schools/:slug" element={<ProgramSchools />} />
          <Route path="/program-detail/:slug" element={<ProgramDetail />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/conseils" element={<Conseils />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingAccessibility />
      </BrowserRouter>
      </TooltipProvider>
    </AccessibilityProvider>
  </QueryClientProvider>
);

export default App;
