'use client'

import Image from "next/image"
import { Question } from "@/src/type";
import AnwserWrapper from "../../AnswerWrapper/AnswerWrapper";
import { redirect } from "next/navigation";
import { useEffect } from "react";

interface Props {
    question:Question;
    indexQuiz:React.RefObject<number>;
}

export default function QuizTypeText({question,indexQuiz}:Props){
    
    if(indexQuiz.current >= 10) redirect("/results");
    
    indexQuiz.current++;
    console.log(indexQuiz.current);

    return(
        <div id="quiz-wrapper" className="type-text">
            <div id="question-wrapper">
                <div className="head">
                    <h1>Question 1</h1>
                    <Image src="/img/icon-logo.svg" alt="Logo icône de score iq" width={24} height={25} />
                </div>
                <p>{question.content_text}</p>
            </div>
            <AnwserWrapper currentHref="1" answerData={question.answer} />
        </div>  
    )
}