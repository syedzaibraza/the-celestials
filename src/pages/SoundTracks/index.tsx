const SoundTracks = () => {
  return (
    <div className="bg-sound-bg-1 h-full bg-cover bg-center md:bg-contain md:bg-bottom bg-no-repeat">
      <div className="relative h-full w-full overflow-hidden">
        <div className="p-8 md:px-[120px] h-full">
          <p>Hello</p>
        </div>
        <img
          src="/image/bg-sound.png"
          alt="blue-girl"
          className="w-4/5 md:w-2/5 absolute right-0 bottom-0 z-20"
        />
        <img
          src="/image/text-sound.png"
          alt="blue-girl"
          className="w-full md:w-1/2 absolute right-0 bottom-0 z-10 "
        />
      </div>
    </div>
  );
};

export default SoundTracks;
