export function UserTable({ users }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">First Name</th>
            <th className="px-4 py-2 border">Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td className="px-4 py-2 border">{user.firstName}</td>
              <td className="px-4 py-2 border">{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
