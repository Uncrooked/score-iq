import QuizTypeImage from "./QuizType/QuizTypeImage";
import QuizTypeUpload from "./QuizType/QuizTypeUpload";
import QuizTypeText from "./QuizType/QuizTypeText";

interface Props{
    id?:string;
}

type type = "image" | "text" | "upload";

export default function QuizWrapper({id}:Props){

    let Component = QuizTypeText;
    let type = "upload";

    switch(type){
        case "image":
            Component = QuizTypeImage;
            break;
        case "text":
            Component = QuizTypeText;
            break;
        case "upload":
            Component = QuizTypeUpload;
            break;
    }

    return(
        <Component/>
    )
}