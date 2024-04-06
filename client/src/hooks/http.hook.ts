import { ref } from 'vue';

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

type TLodaidngStatus = 'idle' | 'loading';

export const useHttp = () => {
    const lodaidngStatus = ref<TLodaidngStatus>('idle');

    const request = async <ResponseType>({
        url,
        method = 'GET',
        body = null,
        headers = { 'Content-type': 'application/json' },
    }: RequestConfig): Promise<ResponseType> => {
        lodaidngStatus.value = 'loading';

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw Error(
                    `Could not fetch ${url}, status: ${response.status}`,
                );
            }

            const data: ResponseType = await response.json();

            lodaidngStatus.value = 'idle';

            return data;
        } catch (e) {
            throw e;
        }
    };

    return { request, lodaidngStatus };
};
