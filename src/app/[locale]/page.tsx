'server only'
import { FaDocker, FaReact } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { HeroSection } from './_components/hero-section'
import { HighlightProjects } from './_components/highlight-projects'
import { KnowTechs } from './_components/know-techs'
import { WorkExperience } from './_components/work-experience'
import { useTranslations } from 'next-intl'

const techs = [
  {
    icon: <FaReact />,
    name: 'React',
    startDate: '2020',
  },
  {
    icon: <TbBrandNextjs />,
    name: 'Next.js',
    startDate: '2024',
  },
  {
    icon: <SiTailwindcss />,
    name: 'Tailwind CSS',
    startDate: '2024',
  },
  {
    icon: <FaNode />,
    name: 'Node.js',
    startDate: '2020',
  },
  {
    icon: <SiTypescript />,
    name: 'Typecript',
    startDate: '2020',
  },
  {
    icon: <IoLogoJavascript />,
    name: 'Javascript',
    startDate: '2020',
  },
  {
    icon: <FaDocker />,
    name: 'Docker',
    startDate: '2023',
  },
]

export default function Home() {
  const t = useTranslations()
  const presentation = t('home.heroSection.presentation')
  const aboutMe = t('home.heroSection.aboutMe')
  const contactMe = t('home.heroSection.contactMe')

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        presentation={presentation}
        aboutMe={aboutMe}
        contactMe={contactMe}
      />
      <KnowTechs techs={techs} />
      <HighlightProjects />
      <WorkExperience />
    </main>
  )
}