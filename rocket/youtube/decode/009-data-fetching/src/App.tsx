import { Route, Routes } from "react-router-dom";
import { Repositories } from "./pages/Repositories";
import { Repository } from "./pages/Repository";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Repositories/>} />
      <Route path="/repos/*" element={<Repository/>} />
    </Routes>
  )
}

export default App;
