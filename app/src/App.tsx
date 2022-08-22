import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [wasm, setWasm] = useState<typeof import('hello-wasm')>()
  const [val, setValue] = useState('')
  useEffect(() => {
    ;(async () => {
      try {
        const wasm = await import('hello-wasm')
        setWasm(wasm)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return (
    <div>
      <h1>rust monorepo wasm demo</h1>
      <label htmlFor="name">Your name?</label>
      <input
        value={val}
        onChange={event => setValue(event.target.value)}
        id="name"
      />
      <h2>Greeting from wasm: {!wasm ? 'Loading...' : wasm.greet(val)}</h2>
    </div>
  )
}

export default App
