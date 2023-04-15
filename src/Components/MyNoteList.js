import { Link } from "react-router-dom";

const MyNoteList = ({ notes, search }) => {
  const sorted = notes.sort((a, b) => b.timed - a.timed);

  return (
    <div className="note-list px-lg-4">
      <div className="container-fluid">
        <div className="row my-5 mx-2">
          {notes.length === 0 ? (
            <h5 className="error d-flex justify-content-center align-items-center w-50 mx-auto mt-5">
              You do not have any saved note.
              <Link className="link" to="/NewNote">
                Create one
              </Link>
            </h5>
          ) : (
            sorted
              .filter((filtered) =>
                filtered.title.toLowerCase().includes(search)
              )
              .map((note) => (
                <div key={note.id} className="col-lg-3 col-md-4">
                  <div className="my-4">
                    {" "}
                    <Link className="link" to={`/notes/${note.id}`}>
                      <div className="card my-3">
                        <div className="card-body">
                          <h5 className="card-title">{note.title}</h5>
                          <p className="card-text">{note.noteBody}</p>
                          <p className="pt-5 card-text-date">{note.fullDate}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyNoteList;
