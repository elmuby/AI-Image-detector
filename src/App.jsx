import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Login } from "./components/Login";
import Register from "./components/SignUp";
import { AuthProvider } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Verify } from "./components/Verify";
import { Ai } from "./pages/Ai";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  });
  return (
    <>
      <NavBar />
      <AuthProvider value={{ currentUser }}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about">About</Route>
            <Route path="/verify" element={<Verify />} />
            <Route path="/Ai" element={<ProtectedRoute component={<Ai />}/>} />
            <Route path="/reg" element ={<Register/>} />
            <Route path="login" element ={<Login/>} />
          </Route>
        </Routes>
      </AuthProvider>
      <Footer />
    </>
  );
}

export default App;
