'use server'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import QuizWrapperServer from "@/src/components/ui/QuizWrapper/QuizWrapper.server";
import { getUserName } from "@/src/actions/userName";
import Error from "@/src/components/ui/Error/Error";

export default async function Page({params,searchParams}:{
    params: Promise<{id : string}>,
    searchParams: { [key: string]: string | string[] | undefined }
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
            <QuizWrapperServer id={parseInt(id)} />
            <div className="tag">1</div>
            {(await searchParams).error && <Error/>}
        </section>
    )
}