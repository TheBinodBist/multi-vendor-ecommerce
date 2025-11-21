import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-red-400">
      <Button variant={"elevated"}>hello</Button>
      <Input placeholder="i am input" />
      <Textarea placeholder="i am textarea">
        
      </Textarea>
    </div>

  );
}
