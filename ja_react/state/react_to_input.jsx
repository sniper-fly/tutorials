import { useState } from "react";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("hoge");
  const [lastName, setLastName] = useState("fuga");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing((v) => !v);
      }}
    >
      <label>
        First name:
        {isEditing ? (
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:
        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>

      <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}