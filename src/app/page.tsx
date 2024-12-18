import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-700">
      <p>Hello</p>
      <Link href={"/documents/123"}>
        <Button variant={"destructive"}>Click me</Button>
      </Link>
    </div>
  );
};

export default Home;
