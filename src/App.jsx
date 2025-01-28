
import './index.css'
import { Header, Footer } from './Components'
import { Outlet } from 'react-router'
function App() {

  return (
    <>
      <Header></Header>
      <main className='h-full font-OpenSans p-10 bg-[#dfdfdf]'>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
