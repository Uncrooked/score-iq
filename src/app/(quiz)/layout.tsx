import "@/src/styles/index.css";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body className='dark quiz'>
                <div id="main" className="desktop-width quiz">
                    {children}
                </div>
            </body>
        </html>
    );
}