import Image from "next/image"

type ProjectSectionsProps = {
  sections: {
    title: string
    image: {
      url: string
    }
  }[]
}

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section, index) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="tex-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image.url}
            alt={`Imagem da seção ${section.title}`}
            width={1080}
            height={372}
            className="w-full aspect-auto rounded-lg object-cover"
          />
        </div>
      ))}
    </section>
  )
}
