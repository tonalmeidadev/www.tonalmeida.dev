import {
  CodeBlock,
  Envelope,
  FileTsx,
  Fingerprint,
  Paperclip,
  Square,
  UserPlus,
} from '@phosphor-icons/react/dist/ssr'
import { usePathname, useRouter } from 'next/navigation'

export function CommandActions() {
  const router = useRouter()
  const pathname = usePathname()

  const baseActions = [
    {
      id: 'copy',
      name: 'Copy link',
      shortcut: ['l'],
      keywords: 'copy-url',
      section: 'Quick shortcuts',
      perform: () => {
        navigator.clipboard.writeText(window.location.href)
      },
      icon: <Paperclip size={20} weight={'light'} />,
      path: undefined,
    },
    {
      id: 'send-email',
      name: 'Send e-mail',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'Quick shortcuts',
      perform: () => window.open('mailto:oi@tonalmeida.dev', '_self'),
      icon: <Envelope size={20} weight={'light'} />,
      path: undefined,
    },
    {
      id: 'view-source',
      name: 'View source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'Quick shortcuts',
      perform: () =>
        window.open(
          'https://github.com/tonalmeidadev/www.tonalmeida.dev',
          '_blank',
        ),
      icon: <CodeBlock size={20} weight={'light'} />,
      path: undefined,
    },
    {
      id: 'index',
      name: 'Index',
      shortcut: ['i'],
      keywords: 'go-to-index',
      section: 'Go to',
      perform: () => router.push('/'),
      icon: <Square size={20} weight={'light'} />,
      path: '/',
    },
    {
      id: 'works',
      name: 'Works',
      shortcut: ['w'],
      keywords: 'go-to-works',
      section: 'Go to',
      perform: () => router.push('/works'),
      icon: <FileTsx size={20} weight={'light'} />,
      path: '/works',
    },
    {
      id: 'profile',
      name: 'Profile',
      shortcut: ['p'],
      keywords: 'go-to-profile',
      section: 'Go to',
      perform: () => router.push('/profile'),
      icon: <Fingerprint size={20} weight={'light'} />,
      path: '/profile',
    },
    {
      id: 'get-in-touch',
      name: 'Get in touch',
      shortcut: ['g'],
      keywords: 'go-to-get-in-touch',
      section: 'Go to',
      perform: () => router.push('/get-in-touch'),
      icon: <UserPlus size={20} weight={'light'} />,
      path: '/get-in-touch',
    },
  ]

  const actions = baseActions.filter((action) => action.path !== pathname)

  return actions
}
