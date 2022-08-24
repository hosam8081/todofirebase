import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import PrivateRoute from "./components/PrivateRoute";
import { useGlobalContext } from "./context/AuthContext";
function App() {
  const {darkMode} = useGlobalContext()
  return (
    <>
    <div className={`h-screen ${darkMode && "bg-black-1"}`}>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />}/>
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
