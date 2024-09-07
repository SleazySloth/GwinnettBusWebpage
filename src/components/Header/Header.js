import reactImg from "../../assets/GCPSLogo.avif";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Team 3: Gwinnett Bus</h1>
      <p>Industry Project 12:</p>
      <p>Gwinnett County Public Schools Live Bus Monitoring System</p>
      <p>CS4850 - Section 01 - Fall 2024</p>
    </header>
  );
}
