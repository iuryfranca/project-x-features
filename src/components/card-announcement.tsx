import { cn } from '../lib/utils'

interface CardAnnouncementWebsiteProps {
  children: React.ReactNode
  className?: string
}

export const CardAnnouncementWebsite = ({
  children,
  className,
}: CardAnnouncementWebsiteProps) => {
  return (
    <>
      <div
        className={cn(
          'relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-border bg-muted p-6 text-center text-muted-foreground transition-all hover:scale-[1.03] hover:cursor-default dark:border-border dark:bg-muted dark:text-muted-foreground',
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
