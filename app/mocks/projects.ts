
export type Project = {
  title: string
  slug: string
  summary: string
  description: string
  thumbnailUrl: string
  techs: string[]
  githubUrl?: string
  liveUrl?: string
  sections: {
    title: string
    image: string
  }[]
}

export const mockProjects: Project[] = [
  {
    title: "Flashcards App",
    slug: "flashcard-app",
    summary:
      "O projeto consiste em desenvolver um sistema de flash cards online que possa ser usado por educadores e estudantes para facilitar a memorização de conteúdos diversos. O sistema permite a criação de grupos de flash cards, que são cartões com uma pergunta e uma resposta, que devem ser revisados periodicamente. O sistema pode ser aplicado em diferentes áreas de conhecimento, como línguas estrangeiras, concursos públicos, entre outras. O objetivo do projeto é aproveitar as vantagens da tecnologia para tornar o processo de ensino e aprendizagem mais dinâmico e eficaz.",
    description:
    "O projeto consiste em desenvolver um sistema de flash cards online que possa ser usado por educadores e estudantes para facilitar a memorização de conteúdos diversos. O sistema permite a criação de grupos de flash cards, que são cartões com uma pergunta e uma resposta, que devem ser revisados periodicamente. O sistema pode ser aplicado em diferentes áreas de conhecimento, como línguas estrangeiras, concursos públicos, entre outras. O objetivo do projeto é aproveitar as vantagens da tecnologia para tornar o processo de ensino e aprendizagem mais dinâmico e eficaz.",
    thumbnailUrl: "/projects/flashcard/Thumbnail.png",
    techs: [
      "React",
      "Express",
      "Styled Components",
      "Typescript",
      "Node",
      "Prisma",
    ],
    sections: [
      {
        title: "Login",
        image: "/projects/flashcard/01 Login.png",
      },
      {
        title: "Home",
        image: "/projects/flashcard/03 Home.png",
      },
      {
        title: "Deck",
        image: "/projects/flashcard/04 Deck.png",
      },
      {
        title: "Flashcard",
        image: "/projects/flashcard/06 Revisar flash card.png",
      },
      {
        title: "Grupos",
        image: "/projects/flashcard/08 Grupos.png",
      },
      {
        title: "Modal de convite",
        image: "/projects/flashcard/10 Mandar convite.png",
      },
    ],
  },
]