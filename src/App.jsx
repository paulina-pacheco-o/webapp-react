import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import DetailsMovie from "./pages/DetailsMovie";
import CreateMovie from "./pages/CreateMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./contexts/globalContext";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies/:id" element={<DetailsMovie />} />
            <Route path="/movies/create" element={<CreateMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
