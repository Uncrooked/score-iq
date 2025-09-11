'use server'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setUserName } from "@/src/actions/userName";
import Form from 'next/form';

export default async function Page() {
  
  return (
    <section id="landing-page">
      <div className="bg-shape"></div>
      <h1>Le test ultime qui teste votre intelligence</h1>
      <Form action={setUserName}>
        <Input placeholder="Votre prénom..." id="user_name" name="user_name" />
        <Button type="submit" variant="secondary" className="anim">Commencer</Button>
      </Form>
      <span className="credits">Made by Léo & Nathan</span>
    </section>
  );
}