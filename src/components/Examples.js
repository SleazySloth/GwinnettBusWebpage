import { useState } from "react";

import { EXAMPLES, DOCUMENTS } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedValue) {
    setSelectedTopic(selectedValue);
  }

  return (
    <Section title="Documents" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "ProjectPlan"}
              onClick={() => handleSelect("ProjectPlan")}
            >
              Project Plan
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "SDD"}
              onClick={() => handleSelect("SDD")}
            >
              SDD
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "SRS"}
              onClick={() => handleSelect("SRS")}
            >
              SRS
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Gantt"}
              onClick={() => handleSelect("Gantt")}
            >
              Gantt Chart
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please select a document.</p>
        ) : (
          <div id="tab-content">
            <iframe
              src={DOCUMENTS[selectedTopic].src}
              title={DOCUMENTS[selectedTopic].title}
              padding="4rem"
              width="100%"
              height="700px"
            />
          </div>
        )}
      </Tabs>
    </Section>
  );
}
