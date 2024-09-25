import Header from "./components/Header.jsx"
import "./assets/CSS/style.css";
import AllNewsPG from "./Pages/AllNewsPG.jsx";
import FrancesscoPG from "./Pages/FrancesscoPG.jsx";
import MainPG from "./Pages/MainPG.jsx";
import MonzaPG from "./Pages/MonzaPG.jsx";
import NewsCardPG from "./Pages/NewsCardPG.jsx";
import PlayersPG from "./Pages/PlayersPG.jsx";
import SecretPG from "./Pages/SecretPG.jsx";
import TeamsPG from "./Pages/TeamsPG.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPG />} />
          <Route path="/TeamCard/:id" element={<MonzaPG />} />
          <Route path="/NewsCard/:id" element={<NewsCardPG />} />
          <Route path="/Players" element={<PlayersPG />} />
          <Route path="/Secret" element={<SecretPG />} />
          <Route path="/Teams" element={<TeamsPG/>} />
          <Route path="/PlayerCard" element={<FrancesscoPG />} />
          <Route path="/AllNews/" element={<AllNewsPG />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
