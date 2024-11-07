import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavigationBar from './NavigationBar'
import Weather from './Search.tsx'
import './App.css'

function App() {

  return (
    <>
      <NavigationBar />
      <div>
        <Weather />
      </div>
    </>
  )
}

export default App
