import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-red-400">
      <Button variant={"elevated"}>hello</Button>
      <Input placeholder="i am input" />
    </div>

  );
}
