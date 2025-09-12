'use client'

import { NextImageAttrs, Question } from "@/src/type";
import Image from "next/image";
import AnwserWrapper from "../../AnswerWrapper/AnswerWrapper";
import { redirect } from "next/navigation";
import { useEffect } from "react";

interface Props {
    question:Question;
    indexQuiz:React.RefObject<number>;
}

export default function QuizTypeImage({question,indexQuiz}:Props){

    if(indexQuiz.current >= 10) redirect("/results");
    
    indexQuiz.current++;

    return(
        <div id="quiz-wrapper" className="type-image">
            <div id="question-wrapper">
                <div className="head">
                    <h1>Question 1</h1>
                    <Image src="/img/icon-logo.svg" alt="Logo icône de score iq" width={24} height={25} />
                </div>
                <p>{question.content_text}</p>
                {question.img && <Image className="image" {...question.img as NextImageAttrs} />}
            </div>
            <AnwserWrapper currentHref="2" answerData={question.answer} />
        </div>  
    )
}