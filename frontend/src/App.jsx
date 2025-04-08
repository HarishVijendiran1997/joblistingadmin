import Home from "./pages/Home"
import { FiltersProvider } from "./contexts/FiltersContext"
import { JobDataProvider } from "./contexts/JobDataContext"

function App() {

  return (
    <>
      <FiltersProvider>
        <JobDataProvider>
          <Home />
        </JobDataProvider>
      </FiltersProvider>
    </>
  )
}

export default App
