import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  query,
  where
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../context/firebase";

/**
 * ADMIN SOFT DELETE COMPONENT
 * - Lists users
 * - Allows admin to disable users
 * - Blocks disabled users from accessing app
 */
const AdminSoftDelete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const currentUser = auth.currentUser;

  // 🔐 Check admin role
  useEffect(() => {
    const checkAdmin = async () => {
      if (!currentUser) return;

      const snap = await getDoc(doc(db, "users", currentUser.uid));
      if (snap.exists() && snap.data().role === "admin") {
        setIsAdmin(true);
      }
      setLoading(false);
    };

    checkAdmin();
  }, [currentUser]);

  // 📥 Fetch active users
  useEffect(() => {
    if (!isAdmin) return;

    const fetchUsers = async () => {
      const q = query(
        collection(db, "users"),
        where("disabled", "!=", true)
      );
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data()
      }));
      setUsers(list);
    };

    fetchUsers();
  }, [isAdmin]);

  // ❌ Soft delete user
  const softDeleteUser = async (uid) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    await updateDoc(doc(db, "users", uid), {
      disabled: true,
      deletedAt: serverTimestamp(),
      deletedBy: currentUser.uid
    });

    setUsers(prev => prev.filter(u => u.id !== uid));
  };

  // 🚪 Block disabled users on login
  useEffect(() => {
    const blockDisabledUser = async () => {
      if (!currentUser) return;

      const snap = await getDoc(doc(db, "users", currentUser.uid));
      if (snap.exists() && snap.data().disabled === true) {
        await signOut(auth);
        alert("Your account has been disabled.");
      }
    };

    blockDisabledUser();
  }, [currentUser]);

  if (loading) return <p>Loading...</p>;

  if (!isAdmin) return <p>Access denied</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin — User Management</h2>

      {users.length === 0 && <p>No active users</p>}

      {users.map(user => (
        <div
          key={user.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
            marginBottom: 8,
            border: "1px solid #ccc"
          }}
        >
          <div>
            <strong>{user.firstname} {user.lastname}</strong>
            <div>{user.email}</div>
            <small>{user.country}</small>
          </div>

          {user.id !== currentUser.uid && (
            <button
              onClick={() => softDeleteUser(user.id)}
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminSoftDelete;
