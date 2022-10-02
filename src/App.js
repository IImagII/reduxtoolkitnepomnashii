import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo, toggleTodoComplete } from './store/todoSlice'

function App() {
   const [text, setText] = useState('')
   const dispatch = useDispatch()
   const addTask = () => {
      dispatch(addTodo({ text }))
      setText('')
   }

   return (
      <div className='App'>
         <InputField text={text} setText={setText} addTodo={addTask} />
         <TodoList />
      </div>
   )
}

export default App
