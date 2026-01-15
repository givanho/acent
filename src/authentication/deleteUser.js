import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
  getAuth
} from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../context/firebase";

const DeleteAccount = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleDeleteAccount = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("No authenticated user found.");
      return;
    }

    if (!password) {
      alert("Please enter your password.");
      return;
    }

    const confirmDelete = window.confirm(
      "This will permanently delete your account. Continue?"
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      // 1️⃣ Re-authenticate user
      const credential = EmailAuthProvider.credential(
        user.email,
        password
      );

      await reauthenticateWithCredential(user, credential);

      // 2️⃣ Delete Firestore user document
      await deleteDoc(doc(db, "users", user.uid));

      // 3️⃣ Delete Auth user
      await deleteUser(user);

      // 4️⃣ Redirect
      navigate("/signin");

    } catch (error) {
      console.error("Delete error:", error);

      if (error.code === "auth/wrong-password") {
        alert("Incorrect password.");
      } else if (error.code === "auth/requires-recent-login") {
        alert("Please log in again and try.");
      } else {
        alert("Failed to delete account.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h3 style={{ color: "red" }}>Delete Account</h3>

      <p>
        This action is permanent and cannot be undone.
      </p>

      <input
        type="password"
        placeholder="Confirm your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button
        onClick={handleDeleteAccount}
        disabled={loading}
        style={{
          background: "red",
          color: "white",
          padding: "10px",
          width: "100%",
          cursor: "pointer"
        }}
      >
        {loading ? "Deleting..." : "Delete Account"}
      </button>
    </div>
  );
};

export default DeleteAccount;
