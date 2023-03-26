import Image from 'next/image'

import { CardAnnouncementWebsite } from './card-announcement'
import { Icons } from './icons'
import { Button } from './ui/button'

export const TechsList = () => {
  return (
    <>
      <div className="mt-16 flex w-full flex-col justify-center gap-5">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-3xl">
          Tecnologias utilizadas para a criação do site
        </h1>
        <div className="flex w-full flex-row justify-center gap-5">
          <CardAnnouncementWebsite className="flex h-full max-w-sm gap-5">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div className="flex flex-row gap-2">
                <Icons.logo height={25} />
                <h1 className="text-xl font-semibold">NextJs</h1>
              </div>
              <a href="https://nextjs.org/" target="_blank">
                <Button variant="ghost" className="px-2">
                  <Icons.blankLink />
                </Button>
              </a>
            </div>
            <span className="h-28 overflow-y-scroll text-start text-slate-600 dark:text-slate-400">
              Usado por algumas das maiores empresas do mundo, o Next.js permite
              que você crie aplicativos web de pilha completa, estendendo os
              recursos mais recentes do React e integrando poderosas ferramentas
              JavaScript baseadas em Rust para compilações mais rápidas.
            </span>
          </CardAnnouncementWebsite>
          <CardAnnouncementWebsite className="flex h-full max-w-sm gap-5">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div className="flex flex-row gap-2">
                <Image
                  src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"
                  alt="Logo Firebase"
                  height={25}
                  width={20}
                />
                <h1 className="text-xl font-semibold">Firebase</h1>
              </div>
              <a href="https://firebase.google.com/" target="_blank">
                <Button variant="ghost" className="px-2">
                  <Icons.blankLink />
                </Button>
              </a>
            </div>
            <span className="h-28 overflow-y-scroll text-start text-slate-600 dark:text-slate-400">
              O Firebase é uma plataforma de desenvolvimento de aplicativos que
              ajuda você a criar e desenvolver aplicativos e jogos que os
              usuários amam. Com o apoio do Google e a confiança de milhões de
              empresas no mundo todo.
            </span>
          </CardAnnouncementWebsite>
          <CardAnnouncementWebsite className="flex h-full max-w-sm gap-5">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div className="flex flex-row gap-2">
                <Icons.lucideIcons />
                <h1 className="text-xl font-semibold">Lucide Icons</h1>
              </div>
              <a href="https://lucide.dev/" target="_blank">
                <Button variant="ghost" className="px-2">
                  <Icons.blankLink />
                </Button>
              </a>
            </div>
            <div className="h-28 overflow-y-scroll text-start text-slate-600 dark:text-slate-400">
              Kit de ferramentas de ícones bonito e consistente feito pela
              comunidade. Projeto de código aberto e uma bifurcação do Feather
              Icons. Estamos expandindo o conjunto de ícones o máximo possível,
              mantendo-o bonito
            </div>
          </CardAnnouncementWebsite>
        </div>
      </div>
    </>
  )
}
