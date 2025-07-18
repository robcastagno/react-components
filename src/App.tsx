import { type ReactElement } from 'react'
import Button from './components/Button'

function App(): ReactElement {
  return (
    <>
      <h1 className="bg-indigo-600 text-9xl">Hello, World!</h1>
      <Button text="click me" />
    </>
  )
}

export default App
