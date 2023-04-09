import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtersActiveChanged } from "./filtersSlice";
import { fetchFilters } from './filtersSlice';
import classNames from "classnames";

const HeroesFilters = () => {

    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchFilters());
         // eslint-disable-next-line
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
                    onClick={() => dispatch(filtersActiveChanged(name))}>
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