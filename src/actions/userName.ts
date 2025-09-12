'use server'

import { redirect } from 'next/navigation';
import { cookies } from "next/headers";

export async function setUserName(formData: FormData){
    const cookieStore = await cookies();
    const userName = formData.get("user_name") as string;

    cookieStore.set('user_name', userName, {
      path: "/",
      maxAge: 60 * 60 * 24
    });

    redirect('/quiz/1');
}

export async function getUserName(){
  const cookieStore = await cookies();
  return cookieStore.get('user_name');
}

export async function delUserName(){
  const cookieStore = await cookies();
  if(cookieStore.get("user_name")) cookieStore.delete('user_name');
}