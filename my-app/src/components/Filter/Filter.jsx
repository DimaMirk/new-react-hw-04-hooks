import React from "react";

const Filter = ({onFilterChange,filter}) => {
    return ( <input
              type="text"
              name="filter"
              value={filter}
              onInput={onFilterChange}
            />)
}
export default Filter