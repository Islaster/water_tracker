import Navbar from "./components/navbar.tsx";
import { Route, Routes } from "react-router";
import Calc from "./pages/calc.tsx";
import Landing from "./pages/landing.tsx";
import Auth from "./pages/auth.tsx";
import Dashboard from "./pages/dashboard.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="calc" element={<Calc />} />
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default App;
