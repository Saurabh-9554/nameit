import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import './Searchbox.css';

const Searchbox =({onInputChange})=>{
    return (
        <div className="search-conatiner">
            <input onChange={(event)=> onInputChange(event.target.value)}
             placeholder="Type keyword" className="search-input" />
        </div>

    )
}
export default Searchbox;