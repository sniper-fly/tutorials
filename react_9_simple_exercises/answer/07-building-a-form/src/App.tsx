import "./App.css";
import { useState } from "react";

// using multiple objects for the full state

/*function CustomForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <form>
      <div>
        <input
          id="firstNameInput"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          placeholder="First name"
        />
      </div>
      <div>
        <input
          id="lastNameInput"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          type="text"
          placeholder="Last name"
        />
      </div>
      <button type="button" onClick={() => handleSubmit(firstName, lastName)}>
        Greet me
      </button>
    </form>
  );
}*/

// using an single object for the full state


interface CustomFormState {
  firstName: string
  lastName: string
}

function CustomForm() {
  const [{firstName, lastName}, setFullName] = useState<CustomFormState>({
    firstName: "",
    lastName: ""
  });

  return (
    <form>
      <div>
        <input
          id="firstNameInput"
          value={firstName}
          onChange={(event) => {
            setFullName({
              firstName: event.target.value,
              lastName,
            });
          }}
          type="text"
          placeholder="First name"
        />
      </div>
      <div>
        <input
          id="lastNameInput"
          value={lastName}
          onChange={(event) => {
            setFullName({
              firstName,
              lastName: event.target.value,
            });
          }}
          type="text"
          placeholder="Last name"
        />
      </div>
      <button
        type="button"
        onClick={() => handleSubmit(firstName, lastName)}
      >
        Greet me
      </button>
    </form>
  );
}

const handleSubmit = (firstName: string, lastName: string) => {
  const msg = getGreetingMsg(firstName, lastName);

  alert(msg);
};

function getGreetingMsg(firstName: string, lastName: string) {
  return `Hello ${firstName} ${lastName}!`;
}

function App() {
  return <CustomForm />;
}

export default App;
