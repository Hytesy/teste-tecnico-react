/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { getTypes } from "../../services/requestApi";

const TypesFilter = React.memo(function TypesFilter({ handleFilerChange }) {
    // console.log("Renderizando TypesFilter"); // Adicione esta linha
    const [types, setTypes] = useState([]);
    useEffect(() => {
        async function fetchTypes() {
            const response = await getTypes();
            setTypes(response);
        }
        fetchTypes();
    }, []);

    return (
        <select onChange={(event) => handleFilerChange(event.target.value)}>
            <option value="">All</option>
            {types.map((type, index) => (
                <option key={index} value={type.name}>
                    {type.name}
                </option>
            ))}
        </select>
    );
});

TypesFilter.displayName = "TypesFilter";

export default TypesFilter;
