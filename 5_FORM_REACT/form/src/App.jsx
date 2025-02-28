import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm user={{name:"Maxwell", email:"Max@gmail.com"}} />
        
      </div>
      
    </>
  )
}

export default App
