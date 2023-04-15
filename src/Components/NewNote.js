import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewNote = () => {
  const [title, settitle] = useState("");
  const [noteBody, setnoteBody] = useState("");
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

    fetch("https://doodlenote.onrender.com/notes", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notes),
    }).then(() => {
      console.log("Note saved");
      noteHistory.push("/");
    });
  };

  return (
    <div className="new-note w-50 mx-auto mb-5 pt-3">
      <form onSubmit={handleSubmit} className="mt-5 pt-5">
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
            className="form-control border-0 textarea pb-5"
            value={noteBody}
            onChange={(e) => setnoteBody(e.target.value)}
            placeholder="start writting..."
            required
          ></textarea>
        </div>
        <button className="save__note-btn btn mt-5 px-3 py-2">Save note</button>
      </form>
    </div>
  );
};

export default NewNote;
