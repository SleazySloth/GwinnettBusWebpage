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

export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
