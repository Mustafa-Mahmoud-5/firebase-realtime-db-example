import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";
import { Link } from "react-router-dom";

function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const groupsRef = ref(db, "groups");

    onValue(groupsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setGroups(list);
      }
    });
  }, []);

  return (
    <div>
      <h2>Saved Groups</h2>

      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <strong>{group.name}</strong> — {group.type}
          </li>
        ))}
      </ul>

      <Link to="/">Add New Group</Link>
    </div>
  );
}

export default GroupList;
