const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen dark:bg-white">
      <div className="rounded-full animate-bounce border border-black flex p-6 md:w-32 md:h-32">
        <img src="/icons/CC.svg" alt="CC" />
      </div>
    </div>
  );
};

export default Loading;
