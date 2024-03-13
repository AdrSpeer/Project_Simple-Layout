const Hero = () => {
  return (
    <section className="bg-stone-100">
      <div className="grid grid-cols-4 p-10 gap-5">
        <div className="w-3/4 flex flex-col text-left gap-3  ">
          <h4 className="font-bold text-2xl">Who we are</h4>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            accumsan turpis quis quis at. Nec, nisi dis duis urna, elit justo,
            euismod. Ultricies fermentum nibh in ut quis lacus sollicitudin
            proin. Eu sit enim ullamcorper nisl id est. A pulvinar ut fringilla
            vulputate feugiat lobortis phasellus mattis dignissim. Dapibus sed
            quam venenatis platea. Et pharetra, convallis nec volutpat. Sed id
            et sed diam. Diam leo ipsum, urna in lorem amet euismod.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-slate-300 hover:text-white">
          <img className="h-4/5" src="lightbrown.png" alt="Chair" />
          <p className="font-bold">Light brown chair with wooden legs</p>
          <p className="font-bold">$100</p>
        </div>
        <div className="flex flex-col items-center  justify-center  hover:bg-purple-600 hover:text-white">
          <img className="h-4/5" src="black.png" alt="Chair" />
          <p className="font-bold">Black chair with long legs</p>
          <p className="font-bold">$500</p>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-amber-300 hover:text-white  ">
          <img className="h-4/5" src="white.png" alt="Chair" />
          <p className="font-bold">White chair with spiral design legs</p>
          <p className="font-bold">$1000</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
