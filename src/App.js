import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import Line from "./components/Line";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  const twentyFirst = data.slice(0, 20);
  const result = [];

  const newReg = new RegExp(`${search}`, "gi");
  console.log(newReg);

  for (let i = 0; i < data.length; i++) {
    if (newReg.test(data[i].keywords)) {
      if (result.length === 20) {
        break;
      } else {
        result.push(data[i]);
      }
    }
  }

  console.log(result);

  return (
    <div className="content">
      <Search search={search} setSearch={setSearch} />
      {result.length
        ? result.map((elem, index) => {
            return <Line key={index} title={elem.title} symbol={elem.symbol} />;
          })
        : twentyFirst.map((elem, index) => {
            return <Line key={index} title={elem.title} symbol={elem.symbol} />;
          })}

      <Footer />
    </div>
  );
}

export default App;
