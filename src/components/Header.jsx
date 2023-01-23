import { Link } from "react-router-dom";

const Header = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a href={`mailto:${email}${params}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  };

  return (
    <header>
      <nav className="navigation" id="navBar">
        <Link href={"/index.html"} className="active logo">
          <img
            src="/images/logo.svg"
            width="200px"
            height="71px"
            alt="Temporary Logo"
          />
        </Link>
        <a
          href="index.html"
          className="icon"
          onClick={(e) => {
            e.preventDefault();
            var nav = document.getElementById("navBar");
            if (nav.className === "navigation") {
              nav.className += " responsive";
            } else {
              nav.className = "navigation";
            }
          }}
        >
          <i className="fa fa-bars"></i>
        </a>

        <Link href="/about" className="block">
          About
        </Link>
        <a href="http://" className="block">
          Donate
        </a>
        <a
          href="https://www.bbfc.co.uk/"
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          Visit BBFC
        </a>
        <Mailto email="xyz@gmail.com" subject="Rate my Film" body="Hi!">
          Contact the Developer
        </Mailto>
      </nav>
    </header>
  );
};

export default Header;
