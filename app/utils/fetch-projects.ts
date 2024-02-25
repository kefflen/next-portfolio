import { Project } from "../types/Project"
import { fetchHygraphQuery } from "./fetch-hygraph-query"

const query = `
query MyQuery {
  projects {
    id
    slug
    summary
    techs {
      name
    }
    title
    thumbnail {
      url
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