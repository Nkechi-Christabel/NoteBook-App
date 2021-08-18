import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";
import Loader from "./Loader";
import EditNote from "./EditNote";
import { useState } from "react";

const NoteDetails = () => {
  const [clicked, setclicked] = useState(false);
  const { id } = useParams();

  const {
    data: note,
    isLoading,
    error,
  } = useFetch("https://dummy-json-server.herokuapp.com/notes/" + id);
  const noteHistory = useHistory();

  const handleDelete = () => {
    fetch("https://dummy-json-server.herokuapp.com/notes/" + note.id, {
      method: "DELETE",
    }).then(() => {
      noteHistory.push("/");
    });
  };

  const handleClick = () => {
    setclicked(true);
  };

  if (clicked) {
    return <EditNote id={id} notes={note} />;
  }

  return (
    <div className="note-details">
      {error && <div className="text-center mt-5 pt-5">{error}</div>}
      {isLoading && <Loader />}
      {note && (
        <div className="container">
          <div className="row my-5">
            <div className="col-12">
              <div className="note__details-content rounded p-5 my-5">
                <h4 className="pb-2 font-weight-bold">{note.title}</h4>
                <p>{note.noteBody}</p>
                <div className="mt-5">
                  <button
                    className="btn mt-5 border-0 rounded-0 mr-5 mr-md-0"
                    onClick={handleDelete}
                  >
                    Delete note
                  </button>
                  <button
                    onClick={handleClick}
                    className="btn mt-5 mx-md-5 rounded-0"
                  >
                    Edit note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteDetails;
