export default function ModelTable() {
  return (
    <div className="card mt-6">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Model</th>
            <th>Status</th>
            <th>VRAM Saved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>llama-70b</td>
            <td>✅ Completed</td>
            <td>-67%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
