import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
       
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Receitas do dia a dia...

          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Link

              href="./"

            >

              <Image
                src="/images/logo.png"
                alt="Dicasa Logo"
                className="dark:invert"
                width={300}
                height={500}
                priority
              />
            </Link>
          </div>
        </div>
        <div style={{}}>
        <p>Bem-vindo(a) ao nosso site de receitas caseiras simples para o dia a dia! Aqui você encontrará uma variedade de deliciosas receitas que podem ser facilmente preparadas em casa, tornando as suas refeições cotidianas mais práticas e saborosas.

Sabemos que nem sempre é fácil encontrar tempo e disposição para cozinhar, mas acreditamos que uma alimentação saudável e feita em casa pode fazer toda a diferença na sua rotina. Por isso, reunimos um conjunto de receitas que são rápidas, fáceis e cheias de sabor.</p>
        </div>
        <br></br>

        <div style={{ width: '100%', height: '80vh' }} className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/images/1cheff.jpg"
            alt="Next.js Logo"
            style={{ borderRadius: '10px', objectFit: "cover" }}
            fill={true}
            sizes="(max-width: 768px) 100vw"


            priority
          />
           
        </div>
        
      </main>
     
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '36px', width: '100%' }}>
        <Card sx={{ flex: '1 1 0', maxWidth: 'calc(25% - 16px)' }}>

          <CardActionArea>
            <Link href="/arrozBranco">
              <CardMedia
                component="img"
                height="220"
                image="/images/arrozBranco.jpg"
                alt="ArrozBranbco"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Arroz Branco
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aprenda a fazer o tradicional arroz branco soltinho.
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>

        <Card sx={{ flex: '1 1 0', maxWidth: 'calc(25% - 16px)' }}>

          <CardActionArea>
            <Link href="/farofa">
              <CardMedia
                component="img"
                height="220"
                image="/images/farofa.jpg"
                alt="paciente"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Farofa de Cebola
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Farofa de cebola feita na manteiga.
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>

        <Card sx={{ flex: '1 1 0', maxWidth: 'calc(25% - 16px)' }}>

          <CardActionArea>
            <Link href="/maionese">
              <CardMedia
                component="img"
                height="220
                "
                image="/images/maionese.png"
                alt="paciente"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Maionese de Batatas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Maionese de batatas simples e caseira.
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>

        <Card sx={{ flex: '1 1 0', maxWidth: 'calc(25% - 16px)' }}>

          <CardActionArea>
            <Link href="/omelete">
              <CardMedia
                component="img"
                style={{height:'240px'}}
                image="/images/omelete.webp"
                alt="paciente"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Omelete de legumes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aprenda a fazer esse delicioso omelte perfeito.
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </div>
      <footer className="flex items-center justify-center h-16 ">
        <p className="text-gray-600">&copy; 2023   <a
          href="https://github.com/alansmello" style={{ color: "gray" }}
          target="_blank">Alan de Souza Mello</a>. Todos os direitos reservados.</p>
      </footer>

    </>
  )
}
