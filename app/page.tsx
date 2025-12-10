export default function Home() {
  return (
    <main className="p-12 text-center">
      <h1>AI VRAM Optimizer</h1>
      <p className="mt-4 text-xl">
        Run 70B models on consumer GPUs.
      </p>

      <p className="mt-2 text-gray-400">
        Reduce GPU costs by up to 70% with secure enterprise pipeline.
      </p>

      <div className="mt-6">
        <a href="/login" className="btn">
          Request POC
        </a>
      </div>
    </main>
  );
}
