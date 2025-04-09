import Home from "./pages/Home"
import { FiltersProvider } from "./contexts/FiltersContext"
import { JobDataProvider } from "./contexts/JobDataContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <FiltersProvider>
        <JobDataProvider>
          <Home />
        </JobDataProvider>
      </FiltersProvider>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
