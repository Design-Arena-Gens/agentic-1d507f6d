'use client';

import { useState } from "react";
import { buildResponse } from "../lib/intent";

const disclaimer =
  "Yeh maloomat sirf aam rehnumai ke liye hai. Yeh kisi bhi surat doctor ya emergency service ka badal nahi. Apni sehat ke faislay hamesha qualified doctor ke mashware se karein.";

const initialState = {
  title: "Sehat Info Assistant",
  sections: [
    {
      heading: "Kya Karen?",
      body: "Neeche symptoms, dawa ka naam ya lab test ka naam Roman Urdu/English mein likhein aur submit karein."
    },
    {
      heading: "Misaalain",
      body: "Misal: 'Bukhar aur khansi', 'Panadol 500mg', 'CBC test'."
    }
  ]
};

export default function HomePage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = buildResponse(input);
    setResponse(result);
  };

  return (
    <div className="app-shell">
      <main className="container">
        <section className="card hero">
          <h1>Sehat Info Assistant 🇵🇰</h1>
          <p>
            Sawal add karte hi AI aap ke liye aam maloomat Roman Urdu mein tayar karega. Sirf
            aman aur sehati mashwaray, bina prescription ke.
          </p>
        </section>
        <section className="card">
          <form onSubmit={handleSubmit} className="input-form">
            <label htmlFor="user-input">Apna sawal likhein</label>
            <textarea
              id="user-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Misal: Bukhar aur gala dard 2 din se"
              rows={4}
              required
            />
            <button type="submit">Maloomat hasil karein</button>
          </form>
        </section>
        <section className="card response-card">
          <h2>{response.title}</h2>
          <div className="sections">
            {response.sections.map((section) => (
              <article key={section.heading} className="section-block">
                <h3>{section.heading}</h3>
                {section.body.split("\n").map((line, idx) => (
                  <p key={`${section.heading}-${idx}`}>{line}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <strong>Disclaimer:</strong> {disclaimer}
      </footer>
      <style jsx>{`
        .container {
          max-width: 840px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 18px;
          padding: 1.75rem;
          box-shadow: 0 18px 35px rgba(17, 24, 39, 0.12);
          backdrop-filter: blur(6px);
        }

        .hero h1 {
          margin: 0 0 0.75rem;
          font-size: 2rem;
        }

        .hero p {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .input-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        label {
          font-weight: 600;
          font-size: 1.05rem;
        }

        textarea {
          resize: vertical;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          padding: 1rem;
          font-size: 1rem;
          line-height: 1.5;
          font-family: inherit;
        }

        textarea:focus {
          outline: none;
          border-color: #fb923c;
          box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.25);
        }

        button {
          align-self: flex-start;
          background: linear-gradient(135deg, #fb923c, #f97316);
          border: none;
          color: white;
          padding: 0.75rem 1.75rem;
          border-radius: 999px;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        button:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 25px rgba(249, 115, 22, 0.3);
        }

        .response-card h2 {
          margin-top: 0;
        }

        .sections {
          display: grid;
          gap: 1.25rem;
        }

        .section-block h3 {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          color: #fb923c;
        }

        .section-block p {
          margin: 0.25rem 0;
          line-height: 1.6;
        }

        .footer {
          margin-top: auto;
          text-align: center;
          font-size: 0.95rem;
          padding-top: 2rem;
          color: #4b5563;
        }

        @media (max-width: 600px) {
          .card {
            padding: 1.25rem;
          }

          .hero h1 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}
