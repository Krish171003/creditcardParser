import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary shadow flex items-center justify-between px-8 py-4">
      <Link to="/" className="text-accent font-semibold text-2xl">
        CreditCard Parser
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="text-white hover:text-accent">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-accent">
          About
        </Link>
      </div>
    </nav>
  );
}
