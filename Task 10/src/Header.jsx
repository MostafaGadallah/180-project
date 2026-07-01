import Headerimg from './assets/next_station.png'
function Header() {

    return (
        <>
            <div className="header  flex flex-col items-center justify-between gap-5 px-20 ">
                <p className='text-3xl font-semibold '>To Do List</p>
                <a href='add-task' className='bg-[#2972ee] text-white py-3 rounded-lg cursor-pointer px-5 mb-10'>Add New Task</a>
            </div>
        </>
    )
}

export default Header