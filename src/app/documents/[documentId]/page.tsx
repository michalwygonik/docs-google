import { Editor } from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentID: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentID } = await params;
  return <div>Document ID: {documentID}</div>;
  <Editor />;
};

export default DocumentIdPage;
