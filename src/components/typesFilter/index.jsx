import { useEffect, useState } from "react"
import { getTypes } from "../../services/requestApi"

const TypesFilter = ({value, onChange}) => {
    const [types, setTypes] = useState([])
    useEffect(() => {
        async function fetchTypes() {
            const response = await getTypes()
            setTypes(response)
        }
        fetchTypes()
    }, [])
    return (
        <select value={value} onChange={onChange}>
            <option value=''>All</option>
            {types.map((type, i) => {
                if (i === types.length - 1 || i === types.length - 2) {
                    return
                }
                return (
                    <option key={i} value={type.name}>{type.name}</option>
                )
            }
            )}
        </select>
    )
}

export default TypesFilter
