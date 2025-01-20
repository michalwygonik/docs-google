import { Editor } from "./editor";
import Navbar from "./navbar";
import { Room } from "./room";
import Toolbar from "./toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentID: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentID } = await params;
  console.log(documentID);
  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD]">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden">
          <Navbar />
          <Toolbar />
        </div>
        <div className="pt-[118px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};

export default DocumentIdPage;
