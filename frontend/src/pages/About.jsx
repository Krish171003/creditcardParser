export default function About() {
  return (
    <div className="bg-white text-primary p-6 rounded-xl max-w-xl mx-auto shadow my-8">
      <h2 className="text-2xl font-bold mb-2 text-accent">About</h2>
      <p>
        This tool parses credit card statement PDFs and extracts key fields like
        issuer, card number, billing cycle, payment due and transactions. Built
        with Vite, React and Tailwind CSS (frontend), and Node.js/Express
        (backend).
      </p>
    </div>
  );
}
