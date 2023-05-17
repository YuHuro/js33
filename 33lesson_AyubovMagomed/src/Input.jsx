import { useState } from "react";

function Input() {
    const [todos, setTodos] = useState([
        {
            text: 'JS'
        },
        {
            text: 'REACT'
        },
        {
            text: 'HTML'
        },
    ])

    const [text, setText] = useState('')

    const handlerChange = (e) => {
        setText(e.target.value)
    }

    const addTodo = () =>{
        setTodos([
            {
                text: text
            },
            ...todos
        ])
        setText('')
    }


    return (
        <div className="App">
            <div className="container">
                <div>
                    <input type="text" value={text} onChange={handlerChange}/>
                    <button onClick={addTodo}>ADD</button>
                </div>
                <div>
                    {
                        todos.map(todo=>{
                            return(
                                <li className="li">
                                    {todo.text}
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Input