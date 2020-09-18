export const getRepositoriesUrl = (searchValue: string, page: number, perPage: number = 30): string => {
    return `https://api.github.com/search/repositories?q=${searchValue}%20in:name&sort=stars&order=desc&page=${page}&per_page=${perPage}`;
};
