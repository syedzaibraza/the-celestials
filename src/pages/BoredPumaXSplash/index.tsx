import { Link } from "react-router-dom";
import Button from "../../components/Button";

const PumaXSplash = () => {
  return (
    <div className="relative h-full w-full  overflow-hidden">
      <div className="p-8 md:py-0 md:px-11 lg:px-[120px] w-full h-full overflow-auto md:text-lg">
        <div className="lg:w-2/3 w-auto flex flex-col gap-6 ">
          <img src="/image/pumaXsplash.png" alt="" className="w-3/4 md:w-1/3" />
          <p className="text-justify md:text-left ">
            Boredpuma joins forces with Splash Fashions in creating the
            groundbreaking Celestial Collection, stepping out as the first
            company to release an NFT in the region. Created in 2019 with the
            aim to bring together artists, visionary ideas, evolving technology,
            and the virtual world, Boredpuma reveals the upcoming launch of the
            Celestial Collection, the highly anticipated collaboration with
            Splash Fashions.
          </p>
          <p>
            The groundbreaking virtual collection features concepts of
            sustainability and fashion with concept art created by Jong Sacil.
            Featuring the mask of a ‘puma’ – the artwork will signify the
            collaborative efforts to then develop future characters for the
            Metaverse. The Celestial Collection is comprised of characters whose
            designs represent the celestial bodies in our universe, and are
            inspired by the elements; the sun, moon, planets, stars,
            constellations, and more. Symbolizing the graphic elements and
            featuring a Y2K aesthetic, character designs pull inspiration from
            mangas and anime. The samurai sword expresses each characters’
            personal identity with compelling artwork and unique designs.
            <div className="w-full flex justify-end">
              <Link
                target="_blank"
                to={
                  "https://boredpuma.medium.com/boredpuma-splash-fashions-partner-up-to-create-the-celestial-nft-collection-d45a23359f6d"
                }
              >
                <Button>Learn More</Button>
              </Link>
            </div>
          </p>
        </div>
      </div>
      <img
        src="/image/celestials.png"
        alt="blue-girl"
        className="hidden md:block w-1/4 md:w-full absolute -right-[67%] -bottom-[82%] z-10"
      />
      <img
        src="/image/text-puma.png"
        alt="blue-girl"
        className="hidden md:block w-full md:w-1/2 absolute right-0 bottom-0 z-20 "
      />
    </div>
  );
};

export default PumaXSplash;
