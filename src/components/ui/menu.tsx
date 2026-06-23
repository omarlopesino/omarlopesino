import * as React from "react"
import { cn } from "@/lib/utils"

function Menu({ className, children, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav className={cn(className, 'navbar max-md:flex-col max-md:items-start shadow-sm')} {...props}>
      <div className="flex-1">
        <a href="/" className="text-xl font-bold text-base-content hover:opacity-80">Omar Lopesino</a>
      </div>
      <div className="flex-none">
        <ul className="menu md:menu-horizontal">
          {children}
        </ul>
      </div>
    </nav>
  )
}

function Submenu({ className, summary, children, ...props }: {
  summary: React.ReactNode,
  children: React.ReactNode,
  className?: string}
) {
  return (
    <li className={cn(className)}>
        <details {...props}>
          <summary>
            {summary}
          </summary>
          <ul className="px-1 w-max">
            {children}
          </ul>
        </details>
    </li>
  )
}

function MenuLink({className, href, children, ...props} : React.ComponentProps<"a">) {
  return (
    <li><a className={className} href={href} {...props}>{children}</a></li>
  )
}

export {
  Menu,
  Submenu,
  MenuLink,
}
