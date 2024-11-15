const Home = () => {
  return (
    <div className="h-full flex items-center justify-center bg-celestials bg-center bg-cover lg:bg-contain bg-no-repeat">
      <div className="bg-text w-full h-full bg-cover bg-no-repeat bg-center">
        <div className="bg-character-1 sm:bg-characters w-screen h-full bg-cover md:bg-contain md:bg-bottom bg-no-repeat bg-center relative">
          <img
            src="/image/hello.png"
            className="absolute right-3 bottom-4 w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
