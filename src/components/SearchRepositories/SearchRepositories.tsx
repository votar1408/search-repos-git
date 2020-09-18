import './searchRepositories.scss';

import React, {
    ChangeEvent,
    FC,
    FormEvent,
    useCallback,
    useEffect,
    useState
} from 'react';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    common,
    texts
} from '../../consts';
import {
    changeSearchValueAction,
    clearRepositoriesAction,
    getRepositoriesAction
} from '../../redux/app/actions';
import {selectApp} from '../../redux/types';
import {getRepositoriesUrl} from '../../routes';
import {
    useHttp,
    useMountedRef
} from '../hooks';

export const SearchRepositories: FC = () => {
    const dispatch = useDispatch();
    const isMountedRef = useMountedRef();
    const {page, repositories, searchValue} = useSelector(selectApp);
    const {request, controller} = useHttp();
    const [searchValueState, setSearchValueState] = useState<string>('');

    useEffect(() => {
        onSendRequestHandler();
        return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const onSendRequestHandler = useCallback(async () => {
        const isNewSearchValue: boolean = searchValueState !== searchValue;
        if (searchValueState && (isNewSearchValue || !repositories[page])) {
            try {
                const data = await request(
                    getRepositoriesUrl(searchValueState, isNewSearchValue ? common.getDefaultPage : page),
                    'GET'
                );

                if (isMountedRef.current) {
                    dispatch(getRepositoriesAction(data.items));
                }
            } catch (e) {
                alert(e.message);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, searchValue, searchValueState, page, repositories]);

    const onChangeSearchValueHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setSearchValueState(event.target.value);
    }, []);

    const onSearchRepositoriesHandler = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            onSendRequestHandler();
            if (isMountedRef.current) {
                if (searchValueState !== searchValue) {
                    dispatch(changeSearchValueAction(searchValueState));
                    dispatch(clearRepositoriesAction());
                }
            }
        },
        [dispatch, isMountedRef, onSendRequestHandler, searchValue, searchValueState]
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
