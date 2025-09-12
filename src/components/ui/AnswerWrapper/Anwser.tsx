import Link from "next/link"
export default function Answer(valid:boolean | null;index:number}){
    return valid ?
    <Link key={index} href={"/quiz/" + randId} className="answer anim">{value.content}</Link>
    :<div key={index} onClick={() => redirectError(currentHref ||"")} className="answer anim">{value.content}</div>
}