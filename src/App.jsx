import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import ApplyJob from "./pages/ApplyJob";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/applications" element={<Applications />}></Route>
        <Route path="/apply-job/:id" element={<ApplyJob />}></Route>
      </Routes>
    </div>
  );
}

export default App;
