import "@/src/styles/index.css";

import Header from "@/src/components/Header/Header";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body className='dark'>
                <div id="main" className="desktop-width">
                    <Header/>
                    {children}
                </div>
            </body>
        </html>
    );
};