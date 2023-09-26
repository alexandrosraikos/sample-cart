import './app.css'
import Cart from './components/Cart/Cart'
import Showcase from './components/Showcase/Showcase'

export function App() {
  return (
    <main>
      <h1 className='title'>Sample Cart</h1>
      <p className='paragraph'>Putting the "art" in "cart".</p>
      <div className='flex flex-col md:flex-row gap-6'>
        <Showcase className="flex-1 md:flex-[70%]" />
        <Cart className="flex-1 md:flex-[30%]" />
      </div>
    </main>
  )
}
