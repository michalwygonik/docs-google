import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "./navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <p>Hello</p>
        <Link href={"/documents/123"}>
          <Button variant={"destructive"}>Click me</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
