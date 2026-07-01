import { useState , useEffect } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Submitting...");
    const response = await fetch("https://one80daraga-training.onrender.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        duration,
        date,
      }),
    });

    const data = await response.json();
    console.log(data);
  };
    return (
        <>
                <form onSubmit={handleSubmit} className="form flex flex-col gap-3 mx-auto" action="">
                  <div className="flex  gap-3 m-auto">
                    <div className="flex flex-col">
                    <label htmlFor="title" className="text-left">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} name="title" type="text" placeholder="title" className="bg-[#515a66] text-[#a0a4ae] border rounded-lg w-fit border-gray-600 outline-none  p-3" />
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="duration" className="text-left">Duration(day)</label>
                    <input value={duration} onChange={(e) => setDuration(e.target.value)} name="duration"  type="text" placeholder="duration" className="bg-[#515a66] text-[#a0a4ae] border rounded-lg w-fit border-gray-600 outline-none  p-3" />
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="date" className="text-left">Date</label>
                    <input value={date} onChange={(e) => setDate(e.target.value)} name="date" type="date" placeholder="date" className="bg-[#515a66] text-[#a0a4ae] border rounded-lg w-fit border-gray-600 outline-none  p-3" />
                    </div>
                  </div>
                  <div className="buttons flex justify-center gap-2 mb-5">
                    <button value="Add" type="submit" className="bg-[#462c38] text-white py-3  w-20 rounded-lg cursor-pointer">add task</button>
                    <button value="Cancel" type="submit" className="bg-[#462c38] text-white py-3 w-20 rounded-lg cursor-pointer">cancel</button>
                  </div>
                </form>
        </>
    )
}

export default Form