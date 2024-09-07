import { React } from "react";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

import SDD from "./assets/SDD-GwinnettBus.pdf";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        {/* <iframe
          src={SDD}
          padding="4rem"
          width="100%"
          height="700px"
          title="SDD"
        /> */}
      </main>
    </>
  );
}

export default App;
