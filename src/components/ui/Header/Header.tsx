import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header(){
    return(
        <section id="header" className="desktop-width">
            <Image src="img/main-logo.svg" alt="base" width={120} height={25} />
            <Button variant="outline">À propos</Button>
        </section>
    )
}