export default function Navbar() {
  return (
    <div className="flex justify-between p-6 border-b border-gray-800">
      <div className="font-bold">AI VRAM OPTIMIZER</div>

      <nav className="space-x-6">
        <a href="/dashboard">Dashboard</a>
        <a href="/upload">Upload</a>
        <a href="/reports">Reports</a>
        <a href="/login">Login</a>
      </nav>
    </div>
  );
}
