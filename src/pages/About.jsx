import { useState } from "react";

export default function About() {
  const skills = ["JavaScript", "React", "HTML", "CSS", "Node"];

  const [search, setSearch] = useState("");

  const filtered = skills.filter(skill =>
    skill.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>About Me</h1>

      <input
        className="form-control"
        placeholder="Search skills..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}