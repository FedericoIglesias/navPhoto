import { React, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { sortBy } from "../features/favorite/favoriteSlice";
import { searchPhoto } from "../features/search/searchSlice";
import { sortSearch } from "../features/search/searchSlice";
import { searchFAvorite } from "../features/favorite/favoriteSlice";

function SearchOrder() {

    let [search, setSearch] = useState('')

    let dispatch = useDispatch()

    let onSort = (e) => {
        dispatch(sortBy(e.target.value))
        dispatch(sortSearch(e.target.value))
    }

    let searchAction = () =>{
        dispatch(searchPhoto({search}))
        dispatch(searchFAvorite(search))
    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '5%'
        }}>
            <div>
                <label htmlFor="" style={{ marginRight: '5px' }}>Sort by</label>
                <select name="filter" id="" placeholder="Filter" onChange={(target) => {onSort(target)}}>
                    <option value="none">None</option>
                    <option value="width">Width</option>
                    <option value="height">Height</option>
                    <option value="likes">Likes</option>
                    <option value="date">Date</option>
                </select>
            </div>
            <div style={{
                display: 'flex',
                marginRight: '5%'

            }}>
                <input onChange={(ev) => setSearch(ev.target.value)} type="text" placeholder="Search" style={{
                    borderRadius: '5px',
                    padding: '2px 4px',
                }} />
                <SearchIcon onClick={() => searchAction()} />
                
            </div>
        </div>
    );
}

export default SearchOrder