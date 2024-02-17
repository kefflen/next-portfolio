import { Button } from "@/app/components/Button"
import { TechBadge } from "@/app/components/tech-badge"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Image from "next/image"

const MOCK_CONTACT = [
  {
    url: "https://github.com.br/kefflen",
    icon: Github,
  },
  {
    url: "https://linkedin.com/in/kefflen",
    icon: Linkedin,
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex item-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Ola, meu nome é</p>
          <h2 className="text-4xl font-medium">
            Kefflen Moreno Ramos
          </h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou um desenvolvedor de software criativo, proativo e apaixonado por
            resolver problemas complexos com soluções inteligentes. Formado com
            excelência em Análise e Desenvolvimento de Sistemas.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            <TechBadge tech="React" />
            <TechBadge tech="Next.js" />
            <TechBadge tech="Tailwind" />
            <TechBadge tech="Node.js" />
          </div>
          <div className="flex mt-6 flex-col lg:mt-10 sm:items-center sm:gap-5 sm:flex-row">
            <Button className="shadow-button">
              Entre em contato
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
        </div>
        <Image
          width={420}
          height={404}
          src={"/images/profile-pic.jpg"}
          alt="Foto de perfil"
        />
      </div>
    </section>
  )
}
