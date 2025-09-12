'use server'
import { prisma } from "@db";
import QuizWrapperClient from "./QuizWrapper.client";
import { getRandId } from "@/src/utils/getRandQuestionType";
import { getindexQuiz } from "@/src/cookies/indexQuiz";

interface Props{
    id: number;
}

export default async function QuizWrapperServer({id}:Props){

    const questions = await prisma.question.findMany({
      where:{
        type_id:id
      },
      select: {
        content_text: true,
        type_id:true,
        question_type: {
          select: {
            type: true,
          },
        },
        answer: { 
          select: {
            content: true,
            valid: true,
          },
        },
        img: {     
          select: {
            src: true,
            width: true,
            height: true,
            alt: true,
          },
        },
        upload_type: {
          select: {
            mime_type: true,
          },
        },
      },
    });

    const randId = getRandId(0,3);

    const indexQuiz = await getindexQuiz() || 0;

    return <QuizWrapperClient randId={randId} id={id} questions={questions} indexQuiz={indexQuiz}/>
}