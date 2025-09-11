import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <section id="header" className="desktop-width">
            <Link href="/">
                <Image src="img/main-logo.svg" alt="base" width={120} height={25} />
            </Link>
            <Button variant="outline">À propos</Button>
        </section>
    )
}