import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, ButtonProps, buttonVariants } from '@/components/ui/button'

interface ButtonLoadingProps extends ButtonProps {
  children?: React.ReactNode
}

export function ButtonLoading({
  variant,
  size,
  className,
  children,
}: ButtonLoadingProps) {
  return (
    <Button
      disabled
      className={cn(buttonVariants({ variant, size, className }))}
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {children}
    </Button>
  )
}
