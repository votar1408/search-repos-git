import './pagination.scss';

import React, {
    FC,
    ReactElement,
    useCallback,
    useMemo
} from 'react';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {common} from '../../consts';
import {RepositoryServerInfo} from '../../interfaces/ServerData';
import {changePageAction} from '../../redux/app/actions';
import {selectApp} from '../../redux/types';

export const Pagination: FC = () => {
    const {page, repositories, searchValue, loading} = useSelector(selectApp);
    const dispatch = useDispatch();

    const listForPage: RepositoryServerInfo[] = !repositories[page] ? repositories[page - 1] : repositories[page];

    const onChangePageHandler = useCallback(
        (value: number) => {
            dispatch(changePageAction(value));
        },
        [dispatch]
    );

    const buttons: ReactElement | null = useMemo(() => {
        return searchValue && repositories.length > 0 ? (
            <div className="pagination">
                <button
                    type="submit"
                    className="pagination__button"
                    disabled={page === common.getDefaultPage || loading}
                    data-id="left-button"
                    onClick={() => onChangePageHandler(-1)}
                >
                    <i className="fa fa-angle-left"></i>
                </button>
                <button
                    type="submit"
                    className="pagination__button"
                    disabled={!listForPage?.length || loading}
                    data-id="right-button"
                    onClick={() => onChangePageHandler(1)}
                >
                    <i className="fa fa-angle-right"></i>
                </button>
            </div>
        ) : null;
    }, [listForPage, loading, onChangePageHandler, page, repositories.length, searchValue]);

    return <>{buttons}</>;
};
