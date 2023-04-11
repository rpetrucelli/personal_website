import { useState } from "react";
import "../styles/ToDo.css"

const FormData = (props) => {
    const [form, setForm] = useState({
        goal: "",
        by: ""
    })

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.addGoal(form);
        setForm({ goal: "", by:"" })
    }

    return(
        <div className="todo-list">
            <h2>My To-Do List</h2>
            <form onSubmit={ submitHandler }>
                <input name="goal" type="text" onChange={changeHandler} value={form.goal} placeholder="I want to.." />
                <input name="by" type="text" onChange={changeHandler} value={form.by} placeholder="by.." />
                <button type="submit">Add To-Do</button>
            </form>
        </div>
    );
}

const ListGoals = (props) => { 
    // const removeGoal = (goal) => {
    //     const newList = props.allGoals.filter((i) => i.goal !== goal );
    //     props.updateAllGoals([newList])
    // }

    return(
        <ul>
            {props.allGoals.map((goal) => (
                <li key={goal.goal}>
                    <span>I want to {goal.goal} by {goal.by}</span>
                    {/* <button onClick={() =>  removeGoal(goal.goal) }>Delete</button> */}
                </li>))}
        </ul>
    );
}

function ToDo() {
    const [allGoals, updateAllGoals] = useState([]);

    const addGoal = (goal) => {
        updateAllGoals([...allGoals, goal]);
    }

    return ( 
        <div className="todo-list">
            <FormData addGoal={addGoal} />
            <ListGoals allGoals={allGoals} updateAllGoals={updateAllGoals} />
        </div>

     );
}

export default ToDo;