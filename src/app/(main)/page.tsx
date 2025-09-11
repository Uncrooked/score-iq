import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <section id="landing-page">
      <div className="bg-shape"></div>
      <h1>Le test ultime qui teste votre intelligence</h1>
      <form>
        <Input placeholder="Votre prénom..." />
        <Button type="submit" variant="secondary" className="anim">Commencer</Button>
      </form>
      <span className="credits">Made by Léo & Nathan</span>
    </section>
  );
}