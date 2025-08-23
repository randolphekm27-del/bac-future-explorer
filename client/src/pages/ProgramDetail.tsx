import { useParams, Navigate } from "react-router-dom";
import { getProgramBySlug } from "@/data/programs";
import { getProgramPageContent } from "@/data/program-pages";
import { ProgramPageLayout } from "@/components/ui/program-page-layout";

export default function ProgramDetail() {
  const { slug } = useParams();
  
  if (!slug) {
    return <Navigate to="/programs" replace />;
  }

  const program = getProgramBySlug(slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  // Obtenir le contenu spécifique uniquement
  const pageContent = getProgramPageContent(slug);

  if (!pageContent) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <ProgramPageLayout content={pageContent} />
  );
}