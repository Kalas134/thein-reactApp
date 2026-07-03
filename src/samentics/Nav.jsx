import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/techUsed">Tech Used</Link>
                <div className="dropdown">
                    <span
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ cursor: "pointer" }}
                    >
                        Projects ▼
                    </span>
                    {isOpen && (
                        <div className="dropdown-menu" >
                            <Link to="/proj/CurriculumProj">Curriculum Projects</Link>
                            <hr/>
                            <Link to="/proj/PersonalProj">Personal Projects</Link>
                            <hr/>
                            <Link to="/proj/ExtraProj">Extra Projects</Link>
                        </div>
                    )}
                </div>
                <Link to="/contact">Contact</Link>
            </nav>
        </>
    );
}

export default Nav;