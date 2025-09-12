'use client'

import QuizTypeImage from "./QuizType/QuizTypeImage";
import QuizTypeUpload from "./QuizType/QuizTypeUpload";
import QuizTypeText from "./QuizType/QuizTypeText";
import { Question } from "@/src/type";
import { useRef } from "react";

interface Props{
    id:number;
    questions:Question[];
    randId: number;
}

export default function QuizWrapperClient({ id, questions, randId }:Props){
    let Component = QuizTypeText;

    const indexQuiz = useRef<number>(0);

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

    return(
      <Component question={questions[randId]} indexQuiz={indexQuiz} />
    )
}