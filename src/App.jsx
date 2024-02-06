import styles from './App.module.css'
import { Navbar } from './components/navbar/Navbar'
import {Home} from './components/home/home'
import {Sidebar} from './components/sidebar/sidebar'
import {About} from './components/about/about'
import {Skill} from './components/skills/skills'
import {Experience} from './components/experience/experience'
import {Education} from './components/education/education'
import {Project} from './components/project/project'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      <Sidebar/>
      <About />
      <Skill/>
      <Experience/>
      <Education />
      <Project />
    </div>
  )
}

export default App
