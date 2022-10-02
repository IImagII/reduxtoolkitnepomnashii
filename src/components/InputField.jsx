import React from 'react'

const InputField = ({ text, setText, addTodo }) => {
   return (
      <div>
         <label>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={addTodo}>ADD TODO</button>
         </label>
      </div>
   )
}

export default InputField
