import { Container } from '@/components/Container'
import {
  DocumentIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WebsiteIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'
import clsx from 'clsx'
import Image from 'next/image'

const links = [
  {
    href: 'https://www.z3n.pro/',
    label: 'Portfolio',
    icon: WebsiteIcon,
  },
  {
    href: 'https://github.com/Lukapetro',
    label: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/lukapetro/',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'https://twitter.com/lukapetro_',
    label: 'Twitter',
    icon: TwitterIcon,
  },
  {
    href: 'https://www.instagram.com/lucapetro/',
    label: 'Instagram',
    icon: InstagramIcon,
  },
  {
    href: 'https://read.cv/lukapetro',
    label: 'Curriculum',
    icon: DocumentIcon,
  },
]

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li
      className={clsx(
        className,
        'flex w-full items-center justify-center self-center ',
      )}
    >
      <a
        href={href}
        target="_blank"
        className="group relative inline-flex w-full max-w-sm items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white"
      >
        <span className="relative flex w-full items-center justify-center rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-zinc-900">
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-white" />
          <span className="ml-4">{children}</span>
        </span>
      </a>
    </li>
  )
}

export default function Page() {
  return (
    <>
      <Container className="mt-8">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={portraitImage}
            alt=""
            className="h-32 w-32 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
          />
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            @lukapetro
          </h1>
          <p className="mt-2 text-center text-base text-zinc-600 dark:text-zinc-400 sm:mt-4">
            I&apos;m Luka Petrovic, blending la dolce vita with lines of code to
            create digital magic 🧙‍♂️
          </p>
        </div>
      </Container>
      <Container className="mt-6 md:mt-10">
        <ul className="flex w-full flex-col items-center justify-center space-y-6 ">
          {links.map(({ href, label, icon: Icon }) => (
            <SocialLink key={href} href={href} icon={Icon}>
              {label}
            </SocialLink>
          ))}
        </ul>
      </Container>
    </>
  )
}
