import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const createNewNote = () => {
    console.log("he");
  };

  return (
    <main>
      {notes.length > 0 ? (
        <div></div>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
