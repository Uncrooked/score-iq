'use client'

import QuizTypeImage from "./QuizType/QuizTypeImage";
import QuizTypeUpload from "./QuizType/QuizTypeUpload";
import QuizTypeText from "./QuizType/QuizTypeText";
import { Question } from "@/src/type";
import { useEffect } from "react";

interface Props{
    id:number;
    questions:Question[];
    randId: number;
}

export default function QuizWrapperClient({ id, questions, randId }:Props){
    let Component = QuizTypeText;

    switch(id){
        case 2:
            Component = QuizTypeImage;
            break;
        case 1:
            Component = QuizTypeText;
            break;
        case 3:
            Component = QuizTypeUpload;
            break;
    }

    useEffect(() => {
        const quizIndex = window.localStorage.getItem('quiz_index') || "";
        if(parseInt(quizIndex) >= 10) window.location.href = "/results";
    });

    return(
      <Component question={questions[randId]} />
    )
}