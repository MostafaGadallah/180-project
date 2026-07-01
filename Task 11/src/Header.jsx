import Headerimg from './assets/next_station.png'
function Header() {

    return (
        <>
            <div className="header">
                <img src={Headerimg} className='w-full m-auto' alt="next_station" />
            </div>
        </>
    )
}

export default Header