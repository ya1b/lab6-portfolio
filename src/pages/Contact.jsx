import { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("draft");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("draft", JSON.stringify(form));
  }, [form]);

  const validate = () => {
    let e = {};

    if (!/^[A-Za-z ]+$/.test(form.name)) e.name = "Letters only";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!/^[A-Za-z ]+$/.test(form.subject)) e.subject = "Letters only";
    if (form.message.length < 5) e.message = "Too short";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const clean = (str) => str.replace(/</g, "&lt;");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push({
      ...form,
      message: clean(form.message)
    });

    localStorage.setItem("messages", JSON.stringify(messages));
    localStorage.removeItem("draft");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" className="form-control" onChange={e => setForm({...form, name: e.target.value})}/>
      {errors.name && <p className="text-danger">{errors.name}</p>}

      <input placeholder="Email" className="form-control" onChange={e => setForm({...form, email: e.target.value})}/>
      {errors.email && <p className="text-danger">{errors.email}</p>}

      <input placeholder="Subject" className="form-control" onChange={e => setForm({...form, subject: e.target.value})}/>
      {errors.subject && <p className="text-danger">{errors.subject}</p>}

      <textarea placeholder="Message" className="form-control" onChange={e => setForm({...form, message: e.target.value})}/>
      {errors.message && <p className="text-danger">{errors.message}</p>}

      <label>
        <input type="checkbox" onChange={e => setForm({...form, consent: e.target.checked})}/>
        I agree
      </label>

      <button disabled={!form.consent} className="btn btn-primary mt-2">Submit</button>
    </form>
  );
}