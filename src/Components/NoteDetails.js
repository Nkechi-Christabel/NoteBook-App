import useFetch from "./useFetch";
import { useHistory, Link, useParams } from "react-router-dom";
import Loader from "./Loader";

const NoteDetails = () => {
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

  // const updateNote = (id) => {
  //   noteHistory.push("/EditNote/" + note.id);
  // };

  return (
    <div className="note-details">
      {error && <div className="text-center">{error}</div>}
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
                  <Link to={`/notes/${note.id}`}>
                    <button
                      // onClick={updateNote}
                      className="btn mt-5 mx-md-5 rounded-0"
                    >
                      Edit note
                    </button>
                  </Link>
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
