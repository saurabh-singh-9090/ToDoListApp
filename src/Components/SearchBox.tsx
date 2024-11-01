import { useContext, useState } from "react";
import { TaskContext } from "./utils/TaskContext";
import React from "react";

const SearchBox = () => {

    const { setSearchTerm } = useContext(TaskContext);

    const [searchInput, setSearchInput] = useState('');

    const debounceSearch = (fn: any, delay: any) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };

    const handleSearchChange = debounceSearch((value) => {
        setSearchTerm(value);
    }, 300);

    return (
        <div className="search-bar">
            <input
                className="search-input"
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                    handleSearchChange(e.target.value);
                }}
            />
            {/* <span className="search-icon">🔍</span> */}
        </div>
    )
}

export default SearchBox;