// eslint-disable-next-line react/prop-types
export function Todoitem({completed,id,title,toggletodo,deletetodo}){
    return (
        <li key={id}>
          <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e=>toggletodo(id,e.target.checked)}
            />
          {title}
          </label>
          <button 
          onClick={() => deletetodo(id)}
          className="btn btn-danger"
          >
          Delete
          </button>
        </li>
    )
}