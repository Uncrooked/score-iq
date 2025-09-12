'use server'

import { redirect } from 'next/navigation';
import { getRandId } from "@/src/utils/getRandQuestionType";
import { redirectError } from '../utils/redirectError';

export async function checkMimeType(formData: FormData) {
    const file = formData.get("file") as File | null;
    const mimeType = formData.get("mime_type");
    const currentHref = formData.get("current_href") as string;

    if (!file || !mimeType) redirectError("/quiz/" + currentHref);

    if (mimeType !== file?.type) redirectError("/quiz/" + currentHref);

    redirect("/quiz/" + getRandId(1, 3));
}