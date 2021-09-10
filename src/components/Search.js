import { useState } from "react";

const Search = (props) => {
    const [search, setSearch] = useState("");

    const onSearch = (value) => {
        setSearch(value);
        props.searchValue(value);
    };

    return (
        <form className="flex space-x-4">
            <input
                type="text"
                name="search"
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search employee..."
                className="flex-1 py-2 px-3 border rounded-sm outline-none focus:ring ring-gray-300"
                autoComplete="off"
            />
            {/* <button
                type="submit"
                className="py-2 px-4 rounded-sm text-sm text-white uppercase font-bold bg-gray-700 hover:bg-gray-800 outline-none focus:ring focus:ring-gray-300"
            >
                Search
            </button> */}
        </form>
    );
};

export default Search;
