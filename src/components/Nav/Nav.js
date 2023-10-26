import React from 'react';
import "./Nav.css";

import { Link } from 'react-scroll';
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">

      <Link to="home"
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}>
              <BiHomeAlt/>
      </Link>

      <Link to="bio"
            activeClass='active'
            smooth={true}
            spy={true}>
              <BiUser/>
      </Link>

      <Link to="exp"
            activeClass='active'
            smooth={true}
            spy={true}>
              <BsClipboardData/>
      </Link>

      <Link to="work"
            activeClass='active'
            smooth={true}
            spy={true}>
              <BsBriefcase/>
      </Link>

      <Link to="contact"
            activeClass='active'
            smooth={true}
            spy={true}>
              <BsChatSquare/>
      </Link>

      </div>
    </nav>
  )
}
