import { Header } from "../components/Header";
import { Link } from "react-router";
import "./Page404.css";

export function Page404() {
  return (
    <>
      <link rel="icon" href="page404-favicon.png" />

      <title>Page Not Found</title>

      <Header />

      <div className="page-404-wrapper">
        <div className="error-container">
          <h1 className="error-code">404</h1>

          <h2 className="error-title">PAGE NOT FOUND</h2>

          <p className="error-message">
            The page you are looking for might have been removed, had its name{" "}
            <br />
            changed or is temporarily unavailable.
          </p>

          <Link to="/" className="home-btn">
            HOMEPAGE
          </Link>
        </div>
      </div>
    </>
  );
}
