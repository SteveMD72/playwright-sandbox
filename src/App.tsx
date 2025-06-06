import { useState } from "react";

import Header from "./components/header/header";

import "./App.scss";

const App = () => {
  const [toggleIntro, setToggleIntro] = useState(true);

  return (
    <div className="App">
      <Header />

      <main>
        <button onClick={() => setToggleIntro(!toggleIntro)}>Click Me!</button>
        {toggleIntro && (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cumque, nulla error nesciunt consectetur non, ex dolorem natus
            officiis facilis, nostrum blanditiis libero fuga illum officia ab
            odio minima. Illo.
          </p>
        )}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
