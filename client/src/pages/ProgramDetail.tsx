import { useParams, Navigate } from "react-router-dom";
import { getProgramBySlug, getProgramFullDetails } from "@/data/programs";
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

  // Obtenir les détails complets depuis la base de données centralisée
  const programDetails = getProgramFullDetails(slug);

  if (!programDetails) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <ProgramPageLayout content={programDetails} />
  );
}