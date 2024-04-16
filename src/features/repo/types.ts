export type RepositoryDto = {
    id: number,
    name: string,
    html_url: string,
    stargazers_count: number
    owner: RepositoryOwnerDto
}
export type RepositoryOwnerDto = {
    id: number,
    login: string,
    html_url: string,
}

export type Repository = {
    id: number,
    name: string,
    htmlUrl: string,
    starsCount: number
    owner: RepositoryOwner
}

export type RepositoryOwner = {
    id: number,
    login: string,
    htmlUrl: string
}