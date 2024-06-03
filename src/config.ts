const isProd = Boolean(import.meta.env.PROD)

export const site = {
  url: 'https://cheatsheet.hhf.co.in',
  title: 'HHF TechTips cheatsheets'
} as const

export const etc = {
  advertisedSheetCount: 357
} as const

export const disqus = {
  enabled: true,
  host: 'hhfcheetsheet.disqus.com'
} as const

export const googleAnalytics = {
  enabled: isProd,
  measurementId: 'G-N7TC6B227L'
} as const

export const github = {
  repositoryUrl: 'https://github.com/hhftechnologies/cheatsheet',
  branch: 'master'
} as const

export const urls = {
  newCheatsheetUrl: 'https://github.com/hhftechnologies/cheatsheet/issues/907'
} as const

export const carbon = {
  enabled: isProd,
  // src: 'https://cdn.carbonads.com/carbon.js?serve=CE7IK5QM&placement=devhintsio'
  src: 'https://pubsrv.cheetsheet.hhf.co.in/carbon.js?serve=CE7IK5QM&placement=cheetsheethhf'
} as const

export const categories = [
  'Analytics',
  'Ansible',
  'Apps',
  'C-like',
  'CLI',
  'CSS',
  'Databases',
  'Devops',
  'Elixir',
  'Git',
  'HTML',
  'Java & JVM',
  'JavaScript',
  'JavaScript libraries',
  'Jekyll',
  'Ledger',
  'Markup',
  'macOS',
  'Node.js',
  'PHP',
  'Python',
  'Rails',
  'React',
  'Ruby',
  'Ruby libraries',
  'Vim',
  'Fitness',
  'Others'
]

export const announcement = {
  id: '2024-06-01',
  title: `We're on Twitter ♥️`,
  body: [
    `Follow [@hhftechtips](https://twitter.com/hhftechtips) on X/Twitter for daily "today We taught" security.`,
    ``,
    `Also: I've started a new docs with some insights on homeLab management. Have a look! [**techtips.hhf.co.in/blog**](https://techtips.hhf.co.in/blog?utm_source=cheatsheet)`
  ].join('\n')
}
