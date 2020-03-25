import Link from 'next/link'

const Navbar = () => (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">OMDB Movies</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <span className="nav-link">Manda Kadam </span>
                </li>
            </ul>
        </nav>
    </div>
)

export default Navbar;