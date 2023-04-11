import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHero } from "../heroesList/heroesSlice";
import { v4 as uuidv4 } from 'uuid';
import {useHttp} from '../../hooks/http.hook';

const HeroesAddForm = () => {
    
    const [heroName, setHeroName] = useState('');
    const [heroDescr, setHeroDescr] = useState('');
    const [heroElem, setHeroElem] = useState('');

    const dispatch = useDispatch();
    const {filters} = useSelector(state => state.filters);
    const {request} = useHttp();

    const onSubmit = (e) => {
        e.preventDefault();
        const newHero = {
            id: uuidv4(),
            name: heroName,
            description: heroDescr,
            element: heroElem,
        }
        request('https://admin-panel-tr9g.vercel.app/heroes', 'POST', JSON.stringify(newHero))
            .then(dispatch(addHero(newHero)))
            .catch(err => console.err(err))
            .finally(() => {
                setHeroName('');
                setHeroDescr('');
                setHeroElem('');
            })
    }

    const renderFilters = (filters) => {
        if (filters && filters.length > 0) {
            return filters.map(({name, label}) => {
                if (name === 'all') return;
                return <option key={name} value={name}>{label}</option>
            })
        }
    }

    return (
        <form className="border p-4 shadow-lg rounded"
              onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={heroName}
                    onChange={(e) => setHeroName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={heroDescr}
                    onChange={(e) => setHeroDescr(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    value={heroElem}
                    className="form-select" 
                    id="element" 
                    name="element"
                    onChange={(e) => setHeroElem(e.target.value)}>
                    <option >Я владею элементом...</option>
                    {renderFilters(filters)}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;