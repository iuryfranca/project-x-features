import Image from 'next/image'
import Link from 'next/link'

import { CardAnnouncementWebsite } from './card-announcement'
import { Icons } from './icons'
import { Button } from './ui/button'

export const TechsList = () => {
  return (
    <>
      <div className="mt-16 flex w-full flex-col gap-5 text-center">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-3xl">
          Tecnologias utilizadas para a criação do site
        </h1>
        <div className="mt-5 flex w-full flex-col justify-center gap-5 last:flex-wrap sm:flex-row">
          <CardAnnouncementWebsite className="flex h-full gap-5 sm:max-w-sm">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div className="flex flex-row gap-2">
                <Icons.nextjs height={25} />
                <h1 className="text-xl font-semibold">NextJs</h1>
              </div>
              <Link
                href="https://nextjs.org/"
                target="_blank"
                aria-label="Link para acessar o nextjs em outra Aba do navegador"
              >
                <Button
                  variant="ghost"
                  className="px-2"
                  aria-label="link-to-nextjs"
                >
                  <Icons.blankLink />
                </Button>
              </Link>
            </div>
            <span className="h-28 overflow-y-scroll text-start">
              Usado por algumas das maiores empresas do mundo, o Next.js permite
              que você crie aplicativos web de pilha completa, estendendo os
              recursos mais recentes do React e integrando poderosas ferramentas
              JavaScript baseadas em Rust para compilações mais rápidas.
            </span>
          </CardAnnouncementWebsite>
          <CardAnnouncementWebsite className="flex h-full gap-5 sm:max-w-sm">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-2">
                <div className="relative h-7 w-7">
                  <Image
                    src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"
                    alt="Logo Firebase"
                    fill
                  />
                </div>
                <h1 className="text-xl font-semibold">Firebase</h1>
              </div>
              <Link
                href="https://firebase.google.com/"
                target="_blank"
                aria-label="Link para acessar o firebase em outra Aba do navegador"
              >
                <Button
                  variant="ghost"
                  className="px-2"
                  aria-label="link-to-firebase"
                >
                  <Icons.blankLink />
                </Button>
              </Link>
            </div>
            <span className="h-28 overflow-y-scroll text-start">
              O Firebase é uma plataforma de desenvolvimento de aplicativos que
              ajuda você a criar e desenvolver aplicativos e jogos que os
              usuários amam. Com o apoio do Google e a confiança de milhões de
              empresas no mundo todo.
            </span>
          </CardAnnouncementWebsite>
          <CardAnnouncementWebsite className="flex h-full gap-5 sm:max-w-sm">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div className="flex flex-row gap-2">
                <Icons.lucideIcons />
                <h1 className="text-xl font-semibold">Lucide Icons</h1>
              </div>
              <Link
                href="https://lucide.dev/"
                target="_blank"
                aria-label="Link para acessar o lucide em outra Aba do navegador"
              >
                <Button
                  variant="ghost"
                  className="px-2"
                  aria-label="link-to-lucide"
                >
                  <Icons.blankLink />
                </Button>
              </Link>
            </div>
            <div className="h-28 overflow-y-scroll text-start">
              Kit de ferramentas de ícones bonito e consistente feito pela
              comunidade. Projeto de código aberto e uma bifurcação do Feather
              Icons. Estamos expandindo o conjunto de ícones o máximo possível,
              mantendo-o bonito
            </div>
          </CardAnnouncementWebsite>
          <CardAnnouncementWebsite className="flex h-full gap-5 sm:max-w-sm">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <div className="flex flex-row gap-2">
                <Icons.tailwind height={28} className="text-blue-400" />
                <h1 className="text-xl font-semibold">TailwindCss</h1>
              </div>
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                aria-label="Link para acessar o tailwindcss em outra Aba do navegador"
              >
                <Button
                  variant="ghost"
                  className="px-2"
                  aria-label="link-to-tailwind"
                >
                  <Icons.blankLink />
                </Button>
              </Link>
            </div>
            <div className="h-28 overflow-y-scroll text-start">
              Crie rapidamente sites modernos sem sair do HTML. Uma estrutura
              CSS baseada em utilitários, repleta de classes que pode ser
              composta para criar qualquer design, diretamente em sua marcação.
              flex pt-4 text-center rotate-90
            </div>
          </CardAnnouncementWebsite>
        </div>
      </div>
    </>
  )
}
