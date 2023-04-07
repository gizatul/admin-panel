import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtersFetching, filtersFetched, filtersFetchingError, activeFilterChanged } from "../../actions";
import classNames from "classnames";

const HeroesFilters = () => {

    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state);
    const {request} = useHttp();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(filtersFetching());
        request('http://localhost:3001/filters')
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError())) // eslint-disable-next-line
    }, []);

    if (filtersLoadingStatus === 'error') {
        return <div>Ошибка загрузки фильтра</div>
    } else if (filtersLoadingStatus === 'loading') {
        return <div>Идет загрузка</div>
    }

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Фильтры не найдены</h5>
        }

        return arr.map(({name, className, label}) => {
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });

            return <button
                    className={btnClass}
                    key={name}
                    id={name}
                    onClick={() => dispatch(activeFilterChanged(name))}>
                        {label}
                    </button>
        })
    }

    const elements = renderFilters(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;