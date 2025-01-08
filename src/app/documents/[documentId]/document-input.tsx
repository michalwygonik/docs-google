import { BsCloudCheck } from "react-icons/bs";
import Link from "next/link";

import { Menubar } from "@/components/ui/menubar";

const DocumentInput = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">
        Untitled Document
      </span>
      <BsCloudCheck />
    </div>
  );
};

export default DocumentInput;
