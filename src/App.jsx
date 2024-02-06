import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Profile from "./routes/Profile";
import About from "./routes/About";
import Home from "./routes/Home";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* this is done so that header component appears in all the pages*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
