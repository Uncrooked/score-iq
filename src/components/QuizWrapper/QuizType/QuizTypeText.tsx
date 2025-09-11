import Image from "next/image"

export default function QuizTypeText(){
    return(
        <div id="quiz-wrapper" className="type-text">
            <div id="question-wrapper">
                <div className="head">
                    <h1>Question 1</h1>
                    <Image src="/img/icon-logo.svg" alt="Logo icône de score iq" width={24} height={25} />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed lacus ipsum. Maecenas vitae libero suscipit, malesuada ex ac, </p>
            </div>
            <div id="answer-wrapper">
                <div className="answer anim">Lorem ipsum dolor</div>
                <div className="answer anim">Lorem ipsum dolor</div>
                <div className="answer anim">Lorem ipsum dolor</div>
            </div>
        </div>  
    )
}