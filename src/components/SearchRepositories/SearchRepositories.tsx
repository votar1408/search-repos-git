import './searchRepositories.scss';

import React, {
    ChangeEvent,
    FC,
    FormEvent,
    useCallback,
    useState
} from 'react';

import {useDispatch} from 'react-redux';

import {texts} from '../../consts';
import {getRepositoriesAction} from '../../redux/app/actions';
import {getRepositoriesUrl} from '../../routes';
import {
    useHttp,
    useMountedRef
} from '../hooks';

export const SearchRepositories: FC = () => {
    const dispatch = useDispatch();
    const isMountedRef = useMountedRef();
    const {request} = useHttp();
    const [searchValueState, setSearchValueState] = useState<string>('');

    const onSendRequestHandler = useCallback(async () => {
        const searchValue: string = searchValueState.trim();
        if (searchValue) {
            let data = await request(getRepositoriesUrl(searchValueState, 1), 'GET');

            if (isMountedRef.current) {
                dispatch(getRepositoriesAction(data.items));
            }
        }
    }, [dispatch, isMountedRef, request, searchValueState]);

    const onChangeSearchValueHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setSearchValueState(event.target.value);
    }, []);

    const onSearchRepositoriesHandler = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            onSendRequestHandler();
        },
        [onSendRequestHandler]
    );

    return (
        <form className="search" onSubmit={onSearchRepositoriesHandler}>
            <input
                type="text"
                className="search__term"
                placeholder={texts.inputRepositoryName}
                value={searchValueState}
                onChange={onChangeSearchValueHandler}
            />
            <button type="submit" className="search__button">
                <i className="fa fa-search"></i>
            </button>
        </form>
    );
};
