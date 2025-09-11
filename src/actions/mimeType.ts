'use server'
import { redirect } from 'next/navigation';

export async function checkMimeType(formData:FormData){
    const file = formData.get("file") as File | null;

    if (!file) throw new Error("Aucun fichier trouvé dans le FormData");

    const allowedTypes = ["image/png", "image/jpeg", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
        throw new Error("Type de fichier non autorisé");
    }

    redirect("/results");
}