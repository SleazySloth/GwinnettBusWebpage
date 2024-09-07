import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS, TEAM_MEMBERS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Team Members</h2>
      <ul>
        {TEAM_MEMBERS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
