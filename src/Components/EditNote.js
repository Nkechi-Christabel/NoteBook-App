import { useState } from "react";
import { useHistory } from "react-router-dom";

const EditNote = ({ id, notes }) => {
  const [title, settitle] = useState(notes.title);
  const [noteBody, setnoteBody] = useState(notes.noteBody);
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const noteHistory = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let currDate = new Date();
    let fullDate =
      currDate.getDate() +
      "/" +
      (currDate.getMonth() + 1) +
      "/" +
      currDate.getFullYear();
    let timed = currDate.getTime();

    console.log(date);
    console.log(time);

    settime(timed);
    setdate(fullDate);

    const notes = { title, noteBody, fullDate, timed };

    fetch("https://dummy-json-server.herokuapp.com/notes/" + id, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notes),
    }).then(() => {
      console.log("Note saved");
      noteHistory.push("/");
    });
  };

  return (
    <div className="new-note w-50 mx-auto mt-5 pt-5">
      <form className="mt-5 pt-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control title rounded-0 font-weight-bold"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control border-0 textarea mb-5"
            value={noteBody}
            onChange={(e) => setnoteBody(e.target.value)}
            placeholder="start writting..."
            required
          ></textarea>
        </div>
        <button className="btn mt-5 px-3 py-2">Save note</button>
      </form>
    </div>
  );
};

export default EditNote;
