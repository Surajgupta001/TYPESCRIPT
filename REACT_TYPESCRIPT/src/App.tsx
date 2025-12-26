import './App.css'
import { Chaicard } from './components/Chaicard.tsx'
import ChaiList from './components/ChaiList.tsx'
import { Counter } from './components/Counter.tsx'

import type { chai } from './types.ts'

const menu : chai[] = [
  {id: 1, name: "Masala Chai", price: 3.99, isSpecial: true},
  {id: 2, name: "Ginger Chai", price: 4.49},
  {id: 3, name: "Cardamom Chai", price: 4.29, isSpecial: true},
  {id: 4, name: "Turmeric Chai", price: 4.59},
]

function App() {

  return (
    <>
      <div>
        <Chaicard name="Chai Latte" price={4.99} isSpecial={true} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
    </>
  )
}

export default App
