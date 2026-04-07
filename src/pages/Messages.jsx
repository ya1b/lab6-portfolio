export default function Messages() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];

  return (
    <div>
      <h1>Messages</h1>

      {messages.map((m, i) => (
        <div key={i} className="card p-2 mb-2">
          <h3>{m.name}</h3>
          <p>{m.subject}</p>
          <p>{m.message}</p>
        </div>
      ))}
    </div>
  );
}