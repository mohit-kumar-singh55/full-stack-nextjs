import React from 'react';
import Link from 'next/link';
import { MDBBtn } from "mdb-react-ui-kit";

function Navbar() {
    return (
        <nav className='navbar container'>
            <Link className="navbar-brand" href="/">Superhero Identity</Link>
            <Link className="navbar-brand" href="/add" passHref><MDBBtn>New Identity</MDBBtn></Link>
        </nav>
    );
}

export default Navbar;
