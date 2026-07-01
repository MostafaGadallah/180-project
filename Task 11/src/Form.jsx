import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [university, setUniversity] = useState("");
  const [level, setLevel] = useState("");
  const [faculty, setFaculty] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Submitting...");
    const response = await fetch("http://localhost:3000/next", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        university,
        level,
        faculty,
      }),
    });

    const data = await response.json();
    console.log(data);
  };
    return (
        <>
            <div className="">
                <div className="cautions max-w-[750px] text-center my-5 mx-auto">
                    <h3 className="text-lg font-bold">Cautions</h3>
                    <p className="text-gray-500 my-2">Be sure to check your E-mail after submitting the form</p>
                </div>
                <form onSubmit={handleSubmit} className="form flex flex-col gap-3 max-w-[600px] mx-auto" action="">
                    <label htmlFor="name" className="text-left">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="name" className="border border-gray-600 outline-none  p-3" />
                    <label htmlFor="email" className="text-left">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name="email"  type="email" placeholder="E-mail" className="border border-gray-600 outline-none  p-3" />
                    <label htmlFor="number" className="text-left">Phone Number</label>
                    <input value={number} onChange={(e) => setNumber(e.target.value)} name="number" type="text" placeholder="Phone Number" className="border border-gray-600 outline-none  p-3" />
                    <label htmlFor="universty" className="text-left">Universty</label>
                    <select value={university} onChange={(e) => setUniversity(e.target.value)} name="universty" id="" className="text-left border border-gray-600 outline-none  p-3">
                        <option value="Helwan">Select an option:</option>
                        <option value="Helwan">Helwan</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="level" className="text-left">Level</label>
                    <select value={level} onChange={(e) => setLevel(e.target.value)} name="level" id="" className="text-left border border-gray-600 outline-none  p-3">
                        <option value="Helwan">Select an option:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label htmlFor="faculty" className="text-left">College / Faculty</label>
                    <input value={faculty} onChange={(e) => setFaculty(e.target.value)}name="faculty" type="text" placeholder="College / Faculty" className="border border-gray-600 outline-none  p-3" />
                    <button type="submit" className="bg-[#462c38] text-white py-3 ">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form