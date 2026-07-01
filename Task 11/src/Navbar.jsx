import logo from './assets/logo.png'
function Navbar() {

    return (
        <>
            <nav className='flex justify-between h-[80px] bg-black w-full'>
                <div className="logo ms-10">
                    <img src={logo} style={{ maxWidth: "80px", maxHeight: "80px", borderRadius: "50%" }} alt="logo" />
                </div>
                <ul className='flex gap-5 items-center me-10'>
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