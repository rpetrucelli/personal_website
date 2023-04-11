import { useState } from "react";
import { employees } from "../assets/employees"

function ListFormat(props) {
    const formatted = props.items.map(item => <li className="list-item" key={item.name}>{item.name}: {item.role}</li>);
    return(
        <ul className="employee-list">
            {formatted}
        </ul>
    );
}

function Search() {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState(employees);

    const changeHandler = (e) => {
        setQuery(e.target.value);

        const res = employees.filter( i => {
            if (e.target.value === ""){
                return i
            } else {
                return (i.name.toLowerCase().includes(query.toLowerCase()) ||
                        i.role.toLowerCase().includes(query.toLowerCase()) )
            }
        })
        setItems(res)
    }


    return ( 
        <div classname="container">
            <h3>Search the Below List in Real Time</h3>
            <input 
                className="search" 
                type="search" 
                placeholder="Search"
                onChange = {changeHandler} 
                value={query} 
            />
         
           <ListFormat items={items} />
        </div>
     );
}
export default Search;