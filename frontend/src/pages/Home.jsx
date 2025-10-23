import StatementUpload from "../components/StatementUpload";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-accent mb-8 text-center mt-2">
        Credit Card Statement Parser
      </h1>
      <StatementUpload />
    </div>
  );
}
