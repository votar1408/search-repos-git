import {
    useCallback,
    useEffect,
    useState
} from 'react';

import {useDispatch} from 'react-redux';

import {texts} from '../../consts';
import {
    HttpData,
    HttpFunc,
    ResponseType
} from '../../interfaces/ServerData';
import {loadingAction} from '../../redux/app/actions';
import {useMountedRef} from './useMountedRef';

const parseDataType = async (response: Response, type: ResponseType) => {
    switch (type) {
        case 'blob':
            return await response.blob();
        case 'json':
            return await response.json();
        default:
            return response;
    }
};

export const useHttp: HttpFunc = (): HttpData => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const isMountedRef = useMountedRef();
    const dispatch = useDispatch();

    const controller: AbortController = new AbortController();
    const signal: AbortSignal = controller.signal;

    const request = useCallback(
        async (
            url,
            method = 'GET',
            body = null,
            headers = {},
            otherParams = {typeRequest: 'json', typeResponse: 'json'}
        ) => {
            setLoading(true);
            try {
                if (body && otherParams.typeRequest === 'json') {
                    body = JSON.stringify(body);
                    headers['Content-type'] = 'application/json';
                }

                const response: Response = await fetch(url, {
                    method,
                    body,
                    headers,
                    signal
                });
                const data = await parseDataType(response, otherParams.typeResponse);

                if (!response.ok) {
                    throw new Error(data?.error?.message || texts.errorMessage);
                }

                setLoading(false);

                return data;
            } catch (e) {
                if (e.name !== 'AbortError') {
                    if (isMountedRef.current) {
                        setLoading(false);
                    }
                    throw e;
                }
            }
        },
        [isMountedRef, signal]
    );

    useEffect(() => {
        dispatch(loadingAction(loading));
    }, [dispatch, loading]);

    const clearError = useCallback(() => setError(null), []);

    return {loading, request, error, clearError, controller};
};
