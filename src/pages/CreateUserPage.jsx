import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/user.service";

export function CreateUserPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setError("All fields are required.");
      return;
    }
    if (firstName.length > 80 || lastName.length > 80) {
      setError("Fields must not exceed 80 characters.");
      return;
    }

    setLoading(true);

    try {
      await userService.createUser({ firstName, lastName });
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Create New User</h2>

        <div>
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            maxLength={80}
          />
        </div>

        <div>
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            maxLength={80}
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={!firstName || !lastName || loading}
          className={`w-full py-2 rounded text-white ${
            !firstName || !lastName || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
