export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="projects">
      <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Health Dashboard</h3>
          <p className="text-gray-600">
            React + Tailwind / Built for a healthtech startup
          </p>
        </div>
      </div>
    </section>
  );
}
