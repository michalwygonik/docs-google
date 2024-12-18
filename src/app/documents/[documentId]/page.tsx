import { Editor } from "./editor";
import Toolbar from "./toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentID: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentID } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
