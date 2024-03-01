import { Project } from "../types/Project"
import { fetchHygraphQuery } from "./fetch-hygraph-query"

const query = `
query MyQuery {
  projects {
    id
    slug
    summary
    liveProjectUrl
    githubUrl
    techs {
      name
    }
    title
    thumbnail {
      url
    }
    sections {
      title
      image {
        url
      }
    }
  }
}
`

export const fetchProjects = async () => {
  const { projects } = (await fetchHygraphQuery<{ projects: Project[] }>(
    query,
    60 * 60 * 24
  ))

  return projects
}