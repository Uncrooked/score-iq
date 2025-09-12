'use client'

import Image from "next/image";
import { useRef } from "react";
import { DownloadIcon } from "lucide-react";
import Form from "next/form";
import { checkMimeType } from "@/src/actions/mimeType";
import { Question } from "@/src/type";
import { redirect } from "next/navigation";
import { useEffect } from "react";

interface Props {
    question:Question;
    indexQuiz:React.RefObject<number>;
}

export default function QuizTypeUpload({question,indexQuiz}:Props){
    const form = useRef<HTMLFormElement | null>(null);

    function handleFileChange(){
        form.current?.requestSubmit();
    }

    if(indexQuiz.current >= 10) redirect("/results");

    return(
        <div id="quiz-wrapper" className="type-upload">
            <div id="question-wrapper">
                <div className="head">
                    <h1>Question 1</h1>
                    <Image src="/img/icon-logo.svg" alt="Logo icône de score iq" width={24} height={25} />
                </div>
                <p>{question.content_text}</p>
                <Form action={checkMimeType} ref={form}>
                    <input type="hidden" name="mime_type" id="mime_type" value={question.upload_type?.mime_type || ""} />
                    <input type="hidden" name="current_href" id="current_href" value={question.type_id ?  `${question.type_id}` : ""} />
                    <label htmlFor="file"><DownloadIcon width={18} height={18}/> Importer un fichier</label>
                    <input id="file" name="file" type="file" placeholder="Importer un fichier" style={{display:'none'}} onChange={handleFileChange}/>
                </Form>
            </div>
        </div>  
    )
}