export default function CoreConcept({ image, name, description, email }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
}
