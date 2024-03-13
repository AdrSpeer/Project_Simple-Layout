const Message = () => {
  return (
    <section className="p-10 bg-gray-200 flex justify-between">
      <div className="flex flex-col justify-center gap-2 w-4/6">
        <form className="flex flex-col gap-2">
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Input your name"
            className="bg-gray-100 p-4"
          />
          <label className="text-white" htmlFor="number">
            Mobile no.
          </label>
          <input
            type="number"
            id="number"
            placeholder="Input your mobile Number"
            className="bg-gray-100 p-4"
          />
        </form>
        <label className="text-white" htmlFor="message">
          Message
        </label>
        <textarea
          className="resize-none bg-gray-100 p-2"
          id="message"
          cols="30"
          rows="10"
          placeholder="Input your mobile message"
        ></textarea>
        <button className="rounded-full bg-black text-white p-2 w-[10vw] ">
          Send
        </button>
      </div>
      <img className="h-[40vw]" src="phone.png" alt="Phone" />
    </section>
  );
};

export default Message;
