import useFetch from "./useFetch";
import MyNoteList from "./MyNoteList";
import Loader from "./Loader";

const MyNotes = ({ search }) => {
  const {
    data: notes,
    isLoading,
    error,
  } = useFetch("https://doodlenote.onrender.com/notes");

  return (
    <div className="my-notes">
      {error && (
        <div className="error d-flex justify-content-center align-items-center">
          {error}
        </div>
      )}
      {isLoading && <Loader />}
      {notes && <MyNoteList notes={notes} search={search} />}
    </div>
  );
};

export default MyNotes;
