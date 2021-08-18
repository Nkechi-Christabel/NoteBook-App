import NewNote from "./Components/NewNote";
import NavBar from "./Components/NavBar";
import MyNotes from "./Components/MyNotes";
import NoteDetails from "./Components/NoteDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import NotFound from "./Components/NotFound";
// import EditNote from "./Components/EditNote";

function App() {
  const [search, setsearch] = useState("");

  const handleChange = (e) => {
    setsearch(e.target.value.toLowerCase());
  };

  return (
    <Router>
      <div className="App">
        <NavBar search={search} handleChange={handleChange} />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <MyNotes search={search} />
            </Route>
            <Route path="/NewNote">
              <NewNote />
            </Route>
            <Route path="/notes/:id">
              <NoteDetails />
            </Route>
            {/* <Route path="/EditNote">
              <EditNote />
            </Route> */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
