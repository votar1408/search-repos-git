import {
    useEffect,
    useRef
} from 'react';

export const useMountedRef = () => {
    const isMountedRef = useRef<null | boolean>(null);

    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    return isMountedRef;
};
