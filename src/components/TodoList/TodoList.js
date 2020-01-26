import React, {useState} from 'react'
import { values } from 'mobx'
import { useLocation } from 'react-router-dom'
import store from '../../stores/RootStore'
import { observer } from "mobx-react";

 const TodoList = () => {
     const [tod, setTod] = useState("")

     const { search } = useLocation()
     const id = new URLSearchParams(search).get('id')
     const storeGroups = values(store.groups.list)

     const group = storeGroups.find(element => element.id === id)

     const onSubmit = () => {
         store.todos.add(tod)
         const group = store.groups.list[0]
         const todo = store.todos.list[0]
         group.addTodo(todo)

         document.getElementById("inputTodo").value = "";
     }

    return (
        <div className="todoBlock">
            <input id='inputTodo' onChange={event => setTod(event.target.value)} />
            <button onClick={onSubmit}>Add</button>
                <ul>
                    {values(group.todos).map(data => (

                        <li className={data.isCompleted ? "complited" : null}>
                            <input onClick={data.toggleCompleted} type="checkbox" checked={data.isCompleted ? true : false}/>
                            {data.title}
                            <i onClick={data.toggleFavorite} className={data.isFavorite ? "fa fa-star" : "fa fa-star-o"}></i>
                        </li>

                    ))

                    }

                </ul>
        </div>

    )
 }

export default observer(TodoList)
