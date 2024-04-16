import { Repository, RepositoryDto } from "./types";

export const mapRepositoryDetails = (repo: RepositoryDto): Repository => {
    return {
        ...repo,
        starsCount: repo.stargazers_count,
        htmlUrl: repo.html_url,
        owner: {
            ...repo.owner,
            htmlUrl: repo.owner.html_url
        }
    }
}