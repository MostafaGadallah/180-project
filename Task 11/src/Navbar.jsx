import logo from './assets/logo.png'
function Navbar() {

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} width="80" height="80" border-radius="50%" alt="logo" />
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Team Hierarchy</a></li>
                    <li><a href="#">Blogs</a></li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar