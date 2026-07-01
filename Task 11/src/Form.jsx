function Form() {

    return (
        <>
            <div className="">
                <div className="cautions max-w-[750px] text-center my-5 mx-auto">
                    <h3 className="text-lg font-bold">Cautions</h3>
                    <p className="text-gray-500 my-2">Be sure to check your E-mail after submitting the form</p>
                </div>
                <form className="form flex flex-col gap-3 max-w-[600px] mx-auto" action="">
                    <label htmlFor="name" className="text-left">Name</label>
                    <input type="text" placeholder="name" className="border border-gray-600 outline-none  p-3" />
                    <label htmlFor="email" className="text-left">E-mail</label>
                    <input type="email" placeholder="E-mail" className="border border-gray-600 outline-none  p-3" />
                    <label htmlFor="number" className="text-left">Phone Number</label>
                    <input type="text" placeholder="Phone Number" className="border border-gray-600 outline-none  p-3" />
                    <label htmlFor="universty" className="text-left">Universty</label>
                    <select name="universty" id="" className="text-left border border-gray-600 outline-none  p-3">
                        <option value="Helwan">Select an option:</option>
                        <option value="Helwan">Helwan</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="level" className="text-left">Level</label>
                    <select name="level" id="" className="text-left border border-gray-600 outline-none  p-3">
                        <option value="Helwan">Select an option:</option>
                        <option value="Helwan">1</option>
                        <option value="other">2</option>
                        <option value="other">3</option>
                        <option value="other">4</option>
                    </select>
                    <label htmlFor="faculty" className="text-left">College / Faculty</label>
                    <input type="text" placeholder="College / Faculty" className="border border-gray-600 outline-none  p-3" />
                    <button type="submit" className="bg-[#462c38] text-white py-3 " >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form