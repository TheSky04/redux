import './App.css'
import CreateCustomer from './components/CreateCustomer'
import Title from './components/Title'
import Operations from './components/Operations'
import DisplayBalance from './components/DisplayBalance'

function App() {
  return (
    <div className='App'>
      <Title />
      <CreateCustomer />
      <Operations />
      <DisplayBalance />
    </div>
  )
}

export default App
