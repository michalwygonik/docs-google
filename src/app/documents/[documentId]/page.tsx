import { Editor } from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentID: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentID } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
