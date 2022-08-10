import {useConfig} from "./hooks/useConfig";
import {Sidebar} from "./components/Sidebar";
import {useState} from "react";
import {Page} from "./components/Page";

function App() {
  const [config] = useConfig()
  const [page, setPage] = useState<string | undefined>();
  console.log('RENDER')

  if (!config){
    console.log('loading...')
    return <div className={'App'}>
      Loading...
    </div>
  }

  return (
    <div className="App">
      <Sidebar config={config} onMenuSelected={(k) => setPage(k)}/>
      {page && <Page id={page} />}
    </div>
  )
}

export default App
