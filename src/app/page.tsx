import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <Input />
      <Button>Clicked Me</Button>
      <Button variant="destructive" size="lg">
        Clicked Me
      </Button>
      <Button variant="secondary">Clicked Me</Button>
      <Button variant="ghost">Clicked Me</Button>
      <Button variant="muted">Clicked Me</Button>
      <Button variant="teritary">Clicked Me</Button>
      <Button variant="teritary" disabled>
        Clicked Me
      </Button>
    </div>
  );
}
