import Image from "next/image";
import { DownloadIcon } from "lucide-react";

export default function QuizTypeUpload(){
    return(
        <div id="quiz-wrapper" className="type-upload">
            <div id="question-wrapper">
                <div className="head">
                    <h1>Question 1</h1>
                    <Image src="/img/icon-logo.svg" alt="Logo icône de score iq" width={24} height={25} />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed lacus ipsum. Maecenas vitae libero suscipit, malesuada ex ac, </p>
                <form>
                    <label htmlFor="file"><DownloadIcon width={18} height={18}/> Importer un fichier</label>
                    <input id="file" name="file" type="file" placeholder="Importer un fichier" style={{display:'none'}} />
                </form>
            </div>
        </div>  
    )
}