import { Typography, Link } from "@mui/material";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./styles.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <Typography>
        <span className="title">The</span>
        <span className="titleOne">Siren</span>
      </Typography>
      <nav className="navbar">
        <ul className={open ? "nav-links active" : "nav-links"}>
          <li className="nav-item">
            <Link
              href="/bwd"
              className="nav-link"
              underline="none"
              color="#000000"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/bwd"
              className="nav-link"
              underline="none"
              color="#000000"
              onClick={() => setOpen(false)}
            >
              Bollywood
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/bwd"
              className="nav-link"
              underline="none"
              color="#000000"
              onClick={() => setOpen(false)}
            >
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/bwd"
              className="nav-link"
              underline="none"
              color="#000000"
              onClick={() => setOpen(false)}
            >
              Hollywood
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/bwd"
              className="nav-link"
              underline="none"
              color="#000000"
              onClick={() => setOpen(false)}
            >
              Fitness
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/bwd"
              className="nav-link"
              underline="none"
              color="#000000"
              onClick={() => setOpen(false)}
            >
              Food
            </Link>
          </li>
        </ul>
        <div onClick={() => setOpen(!open)} className="nav-icon">
          {!open ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      <hr className="break" />
    </div>
  );
}
export default Navbar;
