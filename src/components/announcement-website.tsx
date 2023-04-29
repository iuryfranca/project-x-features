import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'

import { CardAnnouncementWebsite } from './card-announcement'
import { OnlineShoppingSvg } from './images/online-shopping'
import { SaleSvg } from './images/sales'
import { WebDesignSvg } from './images/web-design'
import { WomanHoldingHeartSvg } from './images/woman-holding-a-heart'
import { WorkPartySvg } from './images/work-party'
import { buttonVariants } from './ui/button'

export const AnnouncementWebsite = () => {
  return (
    <div className="mt-16 flex w-full flex-col gap-5 sm:h-[700px] sm:flex-row">
      <Link
        href="/shopping"
        aria-label="Acessar página de listagem de produtos"
        className=""
      >
        <Tilt
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          className="relative flex h-full w-full cursor-pointer flex-col items-center justify-between gap-10 rounded-lg border border-border bg-muted p-6 py-16 text-center text-secondary-foreground sm:gap-0 sm:p-14 sm:py-24 sm:pt-20"
        >
          <SaleSvg
            height={300}
            width={300}
            className="text-secondary-foreground"
          />
          <div>
            <h1 className="text-5xl font-black">Project X</h1>
            <span className="text-sm">by Iury França</span>
          </div>
          <span className="font-medium">
            Faça compras, salve favorite seus produtos preferidos na sua própria
            conta!
          </span>
          <div
            className={buttonVariants({
              variant: 'default',
              className: 'hover: flex gap-2 rounded-md',
            })}
          >
            Conheça agora!
          </div>
        </Tilt>
      </Link>
      <div className="flex w-full flex-col gap-5 sm:max-w-[340px]">
        <CardAnnouncementWebsite className="h-full cursor-pointer p-0">
          <Link
            href="/login"
            className="flex h-full flex-col justify-center gap-5 p-6"
            aria-label="Acessar página de login"
          >
            <div className=" flex flex-col items-center justify-center gap-2">
              <WorkPartySvg
                height={180}
                width={180}
                className="text-secondary-foreground"
              />
              <h1 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                Faça Login
              </h1>
            </div>
            <span className="font-medium">
              Com o{' '}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                login
              </span>{' '}
              você mantém seu carrinho salvo
            </span>
          </Link>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="h-4/5 gap-5">
          <div className="flex flex-col items-center justify-center">
            <OnlineShoppingSvg
              height={180}
              width={180}
              className="text-secondary-foreground"
            />
            <h1 className="text-xl font-semibold text-amber-600 dark:text-amber-400">
              Lista de Pedidos
            </h1>
          </div>
          <span className="font-medium">
            Tenha acesso a um{' '}
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              histórico
            </span>{' '}
            de pedidos
          </span>
        </CardAnnouncementWebsite>
      </div>
      <div className="flex w-full flex-col gap-5 sm:max-w-[340px]">
        <CardAnnouncementWebsite className="h-4/5 gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <WomanHoldingHeartSvg
              height={150}
              width={150}
              className="text-secondary-foreground"
            />
            <h1 className="text-xl font-semibold text-red-600 dark:text-red-400">
              Favorite produtos
            </h1>
          </div>
          <span className="font-medium">
            Gostou de algum produto?{' '}
            <span className="font-semibold text-red-600 dark:text-red-400">
              Favorite
            </span>{' '}
            para visita-lo novamente mais tarde
          </span>
        </CardAnnouncementWebsite>
        <CardAnnouncementWebsite className="h-full gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <WebDesignSvg
              height={180}
              width={180}
              className="text-secondary-foreground"
            />
            <h1 className="text-xl font-semibold text-violet-600 dark:text-violet-500">
              Permissões de ADM
            </h1>
          </div>
          <span className="font-medium">
            ADMs tem acesso a diversas{' '}
            <span className="font-semibold text-violet-600 dark:text-violet-500">
              configurações
            </span>{' '}
            e{' '}
            <span className="font-semibold text-violet-600 dark:text-violet-500">
              permissões
            </span>{' '}
            de usurários
          </span>
        </CardAnnouncementWebsite>
      </div>
    </div>
  )
}
