import TracksList from "../../components/TracksList";

const SoundTracks = () => {
  return (
    <div className="relative w-full overflow-hidden bg-sound-bg h-full bg-cover bg-center md:bg-contain md:bg-bottom bg-no-repeat">
      <div className="p-6 md:p-8 md:px-[120px] h-full overflow-auto">
        <img
          src="image/SOUNDTRACKS.png"
          alt="SOUNDTRACKS"
          className="md:hidden block w-2/3"
        />
        <TracksList />
      </div>
      <img
        src="/image/Mizu.png"
        alt="blue-girl"
        className="w-4/5 md:w-2/5 absolute right-0 bottom-0 z-20"
      />
      <img
        src="/image/text-sound.png"
        alt="blue-girl"
        className="w-full md:w-1/2 absolute right-0 bottom-0 z-10 "
      />
    </div>
  );
};

export default SoundTracks;
