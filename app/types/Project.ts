export type Project = {
  title: string
  slug: string
  summary: string
  description: string
  thumbnail: {
    url: string
  }
  techs: {
    name: string
  }[]
  githubUrl?: string
  liveProjectUrl?: string
  sections: {
    title: string
    image: {
      url: string
    }
  }[]
}