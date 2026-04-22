"use client";

import { useState } from "react";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(data);
  };

  const save = async () => {
    await fetch("/api/save", {
      method: "POST",
      body: JSON.stringify(result),
    });

    alert("Saved!");
  };

  return (
    <div className="mx-auto max-w-3xl gap-6 px-6 py-12">
      <h1 className="mb-4 text-2xl text-primary">AI Tool Hub Generator</h1>

      <input
        className="input w-full"
        placeholder="Best credit builder apps"
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button type="button" onClick={generate} className="btn-primary mt-4">
        Generate
      </button>

      {result && (
        <div className="card mt-8">
          <h2 className="text-xl text-primary">{result.title}</h2>
          <p className="mt-2 text-secondary">{result.content}</p>

          <button type="button" onClick={save} className="btn-secondary mt-6">
            Save post
          </button>
        </div>
      )}
    </div>
  );
}
