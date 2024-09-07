import sam from "./assets/sambostian.jpg";
import charlie from "./assets/charliemclarty.jpg";
import michael from "./assets/michaelrizig.jpg";
import brian from "./assets/brianpruitt.jpg";
import allen from "./assets/allenroman.jpg";

import SDDpdf from "./assets/SDD-GwinnettBus.pdf";
import Planpdf from "./assets/ProjectPlan.pdf";
import SRSpdf from "./assets/Requirements.pdf";
import Ganttpdf from "./assets/GanttChart.pdf";

export const TEAM_MEMBERS = [
  {
    image: sam,
    name: "Sam Bostian",
    description: "Team Leader",
  },
  {
    image: charlie,
    name: "Charlie McLarty",
    description: "Developer",
  },
  {
    image: michael,
    name: "Michael Rizig",
    description: "Developer",
  },
  {
    image: brian,
    name: "Brian Pruitt",
    description: "Documentation",
  },
  {
    image: allen,
    name: "Allen Roman",
    description: "Developer",
  },
];

export const DOCUMENTS = {
  ProjectPlan: {
    src: Planpdf,
    title: "Project Plan",
  },
  SDD: {
    src: SDDpdf,
    title: "Software Development Document",
  },
  SRS: {
    src: SRSpdf,
    title: "Software Requirements ",
  },
  Gantt: {
    src: Ganttpdf,
    title: "Gantt Chart",
  },
};
