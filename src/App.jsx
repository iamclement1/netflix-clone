import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import { AuthContextProvider } from "./context/AuthContext"
import Account from "./pages/Account"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {

  return (
    <>
      {/* THE NAVBAR IS ADDED COS IT NEEDS TO HAVE ACCESS TO THE CONTEXT CONDITIONAL RENDER WHETHER A USER IS LOGGED IN OR OUT */}
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* once a user tries to access his/her account without been authenticated the user is bounced back to homepage */}
          <Route path="/account" element={<ProtectedRoute> <Account /> </ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
