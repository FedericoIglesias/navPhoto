import { React } from "react";
import SearchIcon from '@mui/icons-material/Search';



function SearchFilter() {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '5%'
        }}>
            <select name="filter" id="" placeholder="Filter">
                <option value="none">Filter</option>
                <option value="Name">Name</option>
                <option value="Size">Size</option>
                <option value="Date">Date</option>
            </select>
            <div style={{
                display: 'flex',
                marginRight: '5%'
                
            }}>
                <input type="text" placeholder="Search" style={{
                    borderRadius: '5px',
                    padding: '2px 4px',
                    
                }}/><SearchIcon/>
            </div>
        </div>
    );
}

export default SearchFilter