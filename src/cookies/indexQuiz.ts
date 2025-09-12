'use server'

import { cookies } from "next/headers";

export async function setindexQuiz(value:number){
    const cookieStore = await cookies();

    cookieStore.set('index_quiz', `${value}`, {
      path: "/",
      maxAge: 60 * 60 * 24
    });
}

export async function getindexQuiz(){
  const cookieStore = await cookies();
  return parseInt(cookieStore.get('index_quiz')?.value || "");
}

export async function delindexQuiz(){
  const cookieStore = await cookies();
  if(cookieStore.get("index_quiz")) cookieStore.delete('index_quiz');
}