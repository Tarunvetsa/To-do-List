import { useEffect, useState } from "react"
import { Newtodoform } from "./newtodoform"
import { Todolist } from "./todolist"
import "./styles.css"

export default function App(){
  const [todos, settodos] = useState(() =>{
    const localValue= localStorage.getItem("ITEMS")
    if (localValue==null) return []
  
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])
  
  function addtodo(title){
    settodos(currenttodos => {
      return [
        ...currenttodos,
        {id:crypto.randomUUID(), title, completed:false},
      ]
    })
  }
  
  function toggletodo(id,completed) {
    settodos(currenttodos=>{
      return currenttodos.map(todo =>{
        if (todo.id===id){
          return { ...todo,completed}
        }
        return todo
      })
    })
  }
  
  function deletetodo(id){
    settodos(currenttodos=>{
      return currenttodos.filter(todo =>todo.id !== id)
    })
  }
  
  return (
  <>
  <Newtodoform onSubmit={addtodo}/>
  <h1 className="header">Todo list</h1>
  <Todolist todos={todos} toggletodo={toggletodo} deletetodo={deletetodo}/>
  </>
  )
}