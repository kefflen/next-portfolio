'server only'
import { useTranslations } from 'next-intl'
import { FaDocker, FaReact } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { HeroSection } from './_components/hero-section'
import { HighlightProjects } from './_components/highlight-projects'
import { KnowTechs } from './_components/know-techs'
import { WorkExperience } from './_components/work-experience'
import { unstable_setRequestLocale } from 'next-intl/server'

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

export default function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = useTranslations()
  unstable_setRequestLocale(locale)
  const heroSectionTexts = {
    presentation: t('home.heroSection.presentation'),
    aboutMe: t('home.heroSection.aboutMe'),
    contactMe: t('home.heroSection.contactMe'),
  }
  const knowTechsTexts = {
    title: t('home.knowTechs.title'),
    subtitle: t('home.knowTechs.subtitle'),
  }
  const highlightProjectsTexts = {
    title: t('home.highlightProjects.title'),
    subtitle: t('home.highlightProjects.subtitle'),
    goToProject: t('home.highlightProjects.goToProject'),
    wantToSeeMore: t('home.highlightProjects.wantToSeeMore'),
  }

  const workExperienceTexts = {
    title: t('home.workExperience.title'),
    subtitle: t('home.workExperience.subtitle'),
    text: t('home.workExperience.text'),
  }

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection texts={heroSectionTexts} />
      <KnowTechs techs={techs} texts={knowTechsTexts} />
      <HighlightProjects texts={highlightProjectsTexts} />
      <WorkExperience texts={workExperienceTexts} />
    </main>
  )
}
