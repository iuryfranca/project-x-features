import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex w-full flex-col items-center justify-between gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="flex-rows flex items-center gap-2">
            <Icons.logo className="hidden h-6 w-6 md:inline-block" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Desenvolvido por{' '}
              <a
                href={siteConfig.links.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Iury França
              </a>{' '}
              com 💚.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Hospedado na{' '}
              <a
                href="https://vercel.com/dashboard"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Vercel
              </a>
              .
            </p>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Ilustrações por{' '}
              <a
                href="https://popsy.co/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                popsy.co
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
