import { React } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { sortBy } from "../features/favorite/favoriteSlice";

function SearchOrder() {

    let dispatch = useDispatch()

    let onChange = (e) => {
        dispatch(sortBy(e.target.value))
        console.log(e.target.value)
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '5%'
        }}>
            <div>
                <label htmlFor="" style={{ marginRight: '5px' }}>Sort by</label>
                <select name="filter" id="" placeholder="Filter" onChange={(target) => {onChange(target)}}>
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
                <input type="text" placeholder="Search" style={{
                    borderRadius: '5px',
                    padding: '2px 4px',

                }} /><SearchIcon />
            </div>
        </div>
    );
}

export default SearchOrder