import React, { useState } from "react";
import axios from "axios";
import StatementResult from "./StatementResult";
const apiBaseURL = import.meta.env.VITE_API_BASE_URL || "";

function StatementUpload() {
  const [pdf, setPdf] = useState(null);
  const [filename, setFilename] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPdf(e.target.files[0]);
      setFilename(e.target.files[0].name);
      setResult(null);
      setError("");
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!pdf) return setError("Please select a PDF.");
    setLoading(true);

    const formData = new FormData();
    formData.append("pdf", pdf);

    try {
      setError("");
      const res = await axios.post(
        `${apiBaseURL}/api/statements/upload`,
        formData
      );

      setResult(res.data);
    } catch (err) {
      setError("Failed to parse statement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-xl w-full max-w-xl mx-auto transition">
      <form
        onSubmit={handleUpload}
        className="flex flex-col gap-6 items-center"
      >
        {/* CUSTOM "Choose File" Button */}
        <label className="relative cursor-pointer w-full flex flex-col items-center group">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleChange}
            className="absolute w-full h-full opacity-0 z-10 cursor-pointer"
          />
          <div
            className="
            w-full
            flex items-center justify-center
            px-6 py-3
            bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400
            text-white text-lg font-bold rounded-xl
            shadow-lg
            border-2 border-accent
            transition
            group-hover:scale-105 group-hover:shadow-2xl
            focus:outline-none focus:ring-4 focus:ring-accent/70
            active:brightness-90
          "
          >
            <span className="mr-2">📂</span>
            Choose PDF File
          </div>
        </label>
        {/* Selected filename display, with fade-in animation */}
        {filename && (
          <div className="text-sm text-primary bg-accent/20 mb-2 px-3 py-1 rounded shadow animate-fade-in">
            <b>{filename}</b>
          </div>
        )}
        <button
          className="
            w-full
            px-6 py-3
            rounded-xl
            bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400
            shadow-lg
            text-white
            font-extrabold
            tracking-wide
            border-2 border-accent
            transition
            hover:-translate-y-1 hover:scale-105 hover:shadow-2xl
            focus:outline-none focus:ring-4 focus:ring-accent/70
            active:brightness-90
            disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-200
          "
          disabled={loading}
        >
          {loading ? (
            <span className="animate-pulse">Uploading...</span>
          ) : (
            <>
              <span className="mr-2">🚀</span>
              Upload
            </>
          )}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4 font-bold">{error}</p>}
      {result && <StatementResult result={result} />}
    </div>
  );
}

export default StatementUpload;
