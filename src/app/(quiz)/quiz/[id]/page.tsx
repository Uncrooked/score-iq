'use server'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import QuizWrapper from "@/src/components/ui/QuizWrapper/QuizWrapper";
import { getUserName } from "@/src/actions/userName";
// import { prisma } from "@db";

export default async function Page({params}:{
    params: Promise<{id : string}>
}){
    const { id } = await params;

    const userCookie = await getUserName();

    return(
        <section id="quiz-page">
            <div id="head">
                <Link href="/">
                    <Button variant="outline" className="home-btn"><HomeIcon/> Accueil</Button>
                </Link>
                <p id="user-name">{userCookie?.value}</p>
            </div>
            <QuizWrapper id={id} />
            <div className="tag">1</div>
        </section>
    )
}