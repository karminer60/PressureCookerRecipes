import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import logoNav from './assets/logoTomate.png';

//functional component
//export default to reuse component
export default function NavBarFooter() {
    //value = state, setValue = function, and useState = empty string
    const [value, setValue] = useState('');
    const [submitted, setSubmitted] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);
        console.log(
            value,
        )
    }

    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "2rem" }}>
            <div class="container-fluid">
                <div className="navLogo">
                    <Link to="/" className="navbar-brand text-white">
                        <img src={logoNav} alt="nav-logo" style={{ padding: "1rem" }} />
                    </Link>
                </div>

                <form className="d-flex bg-light">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ font: "comfortaa" }} value={value} onChange={e => setValue(e.target.value)} />
                    <button className="btn btn-danger btn-outline-white" type="submit" onClick={handleSubmit} style={{ font: "comfortaa" }}>Search</button>
                    {submitted}
                </form>
            </div>
        </nav>
    )
}

