'use client'
import { Button } from '@/app/components/Button'
import { TechBadge } from '@/app/components/tech-badge'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

const MOCK_CONTACT = [
  {
    url: 'https://github.com/kefflen',
    icon: Github,
  },
  {
    url: 'https://linkedin.com/in/kefflen',
    icon: Linkedin,
  },
]

const MOCK_TECHS = [
  'React',
  'Next.js',
  'Tailwind',
  'Node.js',
  'TypeScript',
  'Docker',
]

type HeroSectionProps = {
  texts: {
    presentation: string
    aboutMe: string
    contactMe: string
  }
}

export const HeroSection = ({
  texts,
}: HeroSectionProps) => {
  const { presentation, aboutMe, contactMe } = texts
  const handleContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex item-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[530px]"
        >
          <p className="font-mono text-emerald-400">{presentation}</p>
          <h2 className="text-4xl font-medium">Kefflen Moreno Ramos</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">{aboutMe}</p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {MOCK_TECHS.map((tech, index) => (
              <TechBadge
                key={`intro-tech-${tech}`}
                tech={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </div>
          <div className="flex mt-6 flex-col lg:mt-10 sm:items-center sm:gap-5 sm:flex-row">
            <Button onClick={handleContact} className="shadow-button">
              {contactMe}
              <ArrowRight size={24} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACT.map((contact, index) => (
                <a
                  key={contact.url}
                  href={contact.url}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  <contact.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            className="rounded-lg"
            width={420}
            height={404}
            src={'/images/profile-pic.jpg'}
            alt="Foto de perfil"
          />
        </motion.div>
      </div>
    </section>
  )
}
