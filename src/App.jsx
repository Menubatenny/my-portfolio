import styles from './App.module.css'
import { Navbar } from './components/navbar/Navbar'
import {Home} from './components/home/home'
import {Sidebar} from './components/sidebar/sidebar'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      <Sidebar/>
    </div>
  )
}

export default App
