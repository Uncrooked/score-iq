import { redirect } from 'next/navigation';

export function redirectError(search:string,get:boolean = false){
    const searchParams = new URLSearchParams(search);

    if(get) return `${search + (!searchParams.get('error') ? '/?error=true' : '')}`;
    
    redirect(`${search + (!searchParams.get('error') ? '/?error=true' : '')}`);
}