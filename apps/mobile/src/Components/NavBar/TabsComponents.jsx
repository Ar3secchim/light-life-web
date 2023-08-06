import { cn } from '@/lib/ultis'
import { Link } from 'react-router-dom'

const Tabs = ({ className, children }) => {
  return (
    <div
      className={cn(
        'inline-flex w-full items-center justify-between rounded-lg bg-zinc-100 p-2 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400',
        className,
      )}
    >
      {children}
    </div>
  )
}

const TabsList = ({ className, children, routes }) => {
  return (
    <div
      className={cn(
        'whitespace-nowrap rounded-md px-3 py-1 text-base font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-800 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50',
        className,
      )}
    >
      <Link to={routes} className="flex flex-col items-center justify-center ">
        {children}
      </Link>
    </div>
  )
}

export { Tabs, TabsList }
