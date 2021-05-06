import { useEffect, useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleGenderChange(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        changeGender={handleGenderChange}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
