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
        <div class="error-container">
          <h1 class="error-code">404</h1>

          <h2 class="error-title">PAGE NOT FOUND</h2>

          <p class="error-message">
            The page you are looking for might have been removed, had its name{" "}
            <br />
            changed or is temporarily unavailable.
          </p>

          <Link to="/" class="home-btn">
            HOMEPAGE
          </Link>
        </div>
      </div>
    </>
  );
}
