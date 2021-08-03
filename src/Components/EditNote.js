// import { useState } from "react";
// import { useParams } from "react-router-dom";
// // import useFetch from "./useFetch";

// const EditNote = ({ note }) => {
//   // const [editDate, seteditDate] = useState(date);
//   const { id } = useParams();
//   // const { data: note } = useFetch("http://localhost:7000/notes/" + id);

//   console.log(note);
//   const [editTitle, seteditTitle] = useState(note.title);
//   const [editNoteBody, seteditNoteBody] = useState(note.noteBody);

//   const updateNote = (id, e) => {
//     if (note.id === id) {
//       seteditTitle((prev) => (prev += e.target.value));
//       seteditNoteBody((prev) => (prev += e.target.value));
//     } else {
//       return note.id;
//     }
//   };

//   return (
//     <div className="new-note w-50 mx-auto mt-5 pt-5">
//       <form className="mt-5 pt-5">
//         <div className="form-group">
//           <input
//             className="form-control title rounded-0 font-weight-bold"
//             type="text"
//             placeholder="Title"
//             value={editTitle}
//             onChange={updateNote}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             className="form-control border-0 textarea mb-5"
//             value={editNoteBody}
//             onChange={updateNote}
//             placeholder="start writting..."
//             required
//           ></textarea>
//         </div>
//         <button className="btn mt-5 px-3 py-2">Save note</button>
//       </form>
//     </div>
//   );
// };

// export default EditNote;
