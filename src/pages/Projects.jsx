const projects = [
  { name: "Inventory System", author: "Me", language: "JS", desc: "Lab project" },
  { name: "Portfolio", author: "Me", language: "React", desc: "This site" }
];

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>

      {projects.map((p, i) => (
        <div key={i} className="card p-3 mb-2">
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}