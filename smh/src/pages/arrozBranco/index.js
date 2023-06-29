import React from 'react';
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function ArrozBranco() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h1 className="text-4xl mb:text-6xl text-left mb-4">Arroz Branco</h1>

          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
              
              href="./"
             
            >
              
              <Image
                src="/images/logo.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={300}
                height={300}
                priority
              />
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="video-container">
            <iframe
              className="video"
              src="videos/arrozBranco.mp4"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          </div>
          <br></br>
          
          <div className="steps">
          <h1 className="text-4xl mb:text-6xl text-left mb-4">
            <span className="text-red-500">Modo de preparo</span>
          </h1>

            <p>
              Pique o alho e refogue-o com o azeite, coloque o arroz e o sal, misture bem, coloque a água, deixe ferver até secar a água, apague o fogo, feche a tampa da panela, deixe descansar por 10 minutinhos... e está pronto seu arroz soltinho.
            </p>
            <br></br>
          <div className="steps">
          <h1 className="text-4xl mb:text-6xl text-left mb-4">
            <span className="text-red-500">Ingredientes</span>
          </h1>

            
            <p>4 dentes de alho;</p>
              <p>1 Chabrau de Azeite;</p>
              <p>2 xícaras de arroz;</p>
              <p>2 colheres de sobremesa com sal;</p>
              <p>4 xícaras de água.</p>
            
          </div>
         
          
          </div>
          <style jsx>{`
            .container {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .video-container {
              width: 100%;
              max-width: 800px;
              margin-bottom: 20px;
            }

            .video {
              width: 100%;
              height: 400px;
            }
           

            .steps {
              max-width: 800px;
              text-align: left;
            }

            h2 {
              margin-bottom: 10px;
            }
          `}</style>
       
      </main>
      <footer className="flex items-center justify-center h-16 ">
        <p className="text-gray-600">&copy; 2023   <a
          href="https://github.com/alansmello" style={{ color: "gray" }}
          target="_blank">Alan de Souza Mello</a>. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};
