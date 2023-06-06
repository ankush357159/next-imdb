export default function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <p>
        This is demo movies app. 
      </p>
      <div>
        <p>Please reach out to{' '} 
        <a href="mailto:ankush357159@gmail.com" className="text-blue-500 hover:underline">ankush357159@gmail.com</a>{' '} 
        for any query.</p>
      </div>

    </div>
  );
}
