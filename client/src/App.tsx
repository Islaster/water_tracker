import Navbar from "./components/navbar.tsx";
import { Route, Routes } from "react-router";
import Calc from "./pages/calc.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="calc" element={<Calc />} />
      </Routes>
    </>
  );
}
export default App;
