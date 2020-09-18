export type HttpMethod = 'GET';
export type ResponseType = 'json' | 'none';

export interface OtherParamsHttpData {
    typeRequest?: ResponseType;
    typeResponse?: ResponseType;
}

export interface HttpData {
    loading: boolean;
    request: (url: string, method: HttpMethod, body?: any, headers?: any, otherParams?: OtherParamsHttpData) => any;
    error: string | null;
    clearError: () => void;
    controller: AbortController;
}

export interface HttpFunc {
    (): HttpData;
}

export interface RepositoryOwnerServerInfo {
    login: string;
    avatar_url: string;
}

export interface RepositoryServerInfo {
    id: number;
    name: string;
    description: string;
    owner: RepositoryOwnerServerInfo;
}
