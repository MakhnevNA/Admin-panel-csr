type HTTPRequestMethods = 'GET' | 'POST' | 'PATCH';

interface HTTPHeaders {
    [key: string]: string;
}

interface RequestConfig {
    url: string;
    method?: HTTPRequestMethods;
    body?: string | null;
    headers?: HTTPHeaders;
}

const _baseUrl = 'api/';

export const useHttp = () => {
    const request = async <ResponseType>({
        url,
        method = 'GET',
        body = null,
        headers = { 'Content-type': 'application/json' },
    }: RequestConfig): Promise<ResponseType> => {
        try {
            const response = await fetch(`${_baseUrl}${url}`, {
                method,
                body,
                headers,
            });

            if (!response.ok) {
                throw Error(
                    `Could not fetch ${url}, status: ${response.status}`,
                );
            }

            const data: ResponseType = await response.json();

            return data;
        } catch (e) {
            throw e;
        }
    };

    return { request };
};
