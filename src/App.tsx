import {useConfig} from "./hooks/useConfig";
import {Sidebar} from "./components/Sidebar";

function App() {
  const [config] = useConfig()
  console.log('RENDER')

  if (!config){
    console.log('loading...')
    return <div className={'App'}>
      Loading...
    </div>
  }

  return (
    <div className="App">
      <Sidebar config={config} />
    </div>
  )
}

export default App
