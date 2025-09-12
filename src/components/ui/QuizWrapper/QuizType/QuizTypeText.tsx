'use client'

import Image from "next/image"
import { Question } from "@/src/type";
import AnwserWrapper from "../../AnswerWrapper/AnswerWrapper";
import { redirect } from "next/navigation";
import { useEffect } from "react";

interface Props {
    question:Question;
}

export default function QuizTypeText({question}:Props){

    useEffect(() => {
        const quizIndex = window.localStorage.getItem('quiz_index') || "0";
        window.localStorage.setItem('quiz_index',`${parseInt(quizIndex) + 1}`);
    });

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