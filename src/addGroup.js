import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "./firebase";
import { Link } from "react-router-dom";

function AddGroup() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    push(ref(db, "groups"), {
      name,
      type,
    });

    setName("");
    setType("");
  };

  return (
    <div>
      <h2>Add Social Media Group</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Group Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Group Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <Link to="/groups">View Saved Groups</Link>
    </div>
  );
}

export default AddGroup;
