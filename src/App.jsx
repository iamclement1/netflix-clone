import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { AuthContextProvider } from "./context/AuthContext"
import Home from "./pages/Home"

function App() {

  return (
    <>
    {/* THE NAVBAR IS ADDED COS IT NEEDS TO HAVE ACCESS TO THE CONTEXT CONDITIONAL RENDER WHETHER A USER IS LOGGED IN OR OUT */}
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
