import "@/styles/Navbar.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav id="navbar">
      <Link className="text-m" href="./">Jason Zubiate</Link>

      {/* Desktop Navigation */}
      <span className="desk-nav">
        <Link className="text-m hover-link" href="/">Work</Link>,{" "}
        <Link className="text-m hover-link" href="/about">About</Link>,{" "}
        <Link className="text-m hover-link" href="/contact">Contact</Link>
      </span>

      {/* Mobile Navigation */}
      <button className="menu text-m">Menu</button>
    </nav>
  );
}

export default Navbar;
