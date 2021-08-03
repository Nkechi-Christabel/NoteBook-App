import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found w-50 mx-auto mt-5 pt-5 text-center">
      <h2 className="mt-5 pt-5">Oops...</h2>
      <p>
        This page does not exist.{" "}
        <Link to="/" className="link">
          Click here to go back to saved Notes.{" "}
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
