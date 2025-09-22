import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import DetailsMovie from "./pages/DetailsMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies/:id" element={<DetailsMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
