'use client';

import { useRouter } from 'next/navigation';
import { Question } from "@/src/type";
import { redirectError } from '@/src/utils/redirectError';
import { getRandId } from '@/src/utils/getRandQuestionType';

interface Props {
  answerData: Question["answer"];
  currentHref: string;
}

export default function AnwserWrapper({ answerData,currentHref}: Props) {
  const router = useRouter();


  const handleClick = (valid:boolean | null) => {
    const randId = getRandId(1,3);
    router.push(valid ? "/quiz/" + randId : '/quiz/' + currentHref + "?error=true");
  };


  return (
    <div id="answer-wrapper">
      {answerData.map((value, index) => (
        <button key={index} onClick={() => handleClick(value.valid)} className="answer anim">
          {value.content}
        </button>
      ))}
    </div>
  );
}
