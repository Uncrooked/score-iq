'use client'

import { NextImageAttrs, Question } from "@/src/type";
import Image from "next/image";
import AnwserWrapper from "../../AnswerWrapper/AnswerWrapper";
import { useEffect, useState } from "react";

interface Props {
    question:Question;
}

export default function QuizTypeImage({question}:Props){

    const [index, setIndex] = useState("1");

    useEffect(() => {
        const quizIndex = window.localStorage.getItem('quiz_index') || "0";
        window.localStorage.setItem('quiz_index',`${parseInt(quizIndex) + 1}`);

        setIndex(quizIndex);
    },[]);

    return(
        <div id="quiz-wrapper" className="type-image">
            <div id="question-wrapper">
                <div className="head">
                    <h1>Question {index}</h1>
                    <Image src="/img/icon-logo.svg" alt="Logo icône de score iq" width={24} height={25} />
                </div>
                <p>{question.content_text}</p>
                {question.img && <Image className="image" {...question.img as NextImageAttrs} />}
            </div>
            <AnwserWrapper currentHref="2" answerData={question.answer} />
        </div>  
    )
}