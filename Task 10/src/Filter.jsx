function Filter() {
    return (
        <>
          <div className="flex  justify-between items-center py-3 px-8 border-t-4 border-[#15192b] ">
            <p className="text-left">Filter by month</p>
          <select className="bg-white p-2 rounded-lg text-blac" name="" id="">
                <option value="">All</option>
                <option value="">Done</option>
                <option value="">Not Done</option>
            </select>
          </div>
          <div className="tasks flex flex-col gap-5  mt-10">
            <div className="task flex justify-between items-center py-3 px-6 rounded-lg gap-3 bg-[#292a40]">
              <div className="left flex items-center gap-20">
                <div className="flex flex-col px-4 py-2 rounded-lg bg-[#2972ed] text-white">
                    <span>Aug</span>
                    <span>14</span>
                </div>
                <p className="text-xl bold">Task Title</p>
              </div>
              <div className="right">
                <span className="py-2 px-7 rounded-full bg-[#2972ed] text-white">4Days</span>
              </div>
            </div>
            <div className="task flex justify-between items-center py-3 px-6 rounded-lg gap-3 bg-[#292a40]">
              <div className="left flex items-center gap-20">
                <div className="flex flex-col px-4 py-2 rounded-lg bg-[#2972ed] text-white">
                    <span>Aug</span>
                    <span>14</span>
                </div>
                <p className="text-xl bold">Task Title</p>
              </div>
              <div className="right">
                <span className="py-2 px-7 rounded-full bg-[#2972ed] text-white">4Days</span>
              </div>
            </div>
            <div className="task flex justify-between items-center py-3 px-6 rounded-lg gap-3 bg-[#292a40]">
              <div className="left flex items-center gap-20">
                <div className="flex flex-col px-4 py-2 rounded-lg bg-[#2972ed] text-white">
                    <span>Aug</span>
                    <span>14</span>
                </div>
                <p className="text-xl bold">Task Title</p>
              </div>
              <div className="right">
                <span className="py-2 px-7 rounded-full bg-[#2972ed] text-white">4Days</span>
              </div>
            </div>
          </div>
        </>
    )
}

export default Filter