type NextImageAttrs = {
    src: string | StaticImport; 
    alt: string; 
    width?: number | `${number}` | undefined; 
    height?: number | `${number}` | undefined
};

type ImageAttrs = { src: string; width: number | null; height: number | null; alt: string | null; }

export type Question = {
    content_text : string | null;
    question_type: {type : string} | null;
    answer: {
        content: string; 
        valid: boolean | null;
    }[],
    img: ImageAttrs | null;
    upload_type: { mime_type: string; } | null;
    type_id:number | null;
}