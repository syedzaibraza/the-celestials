import { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const MiniPlayer = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className={`relative ${
        show ? "w-[350px]" : "w-[154px]"
      } ease-in-out bottom-6 rounded-lg left-10 h-[87px] bg-[#e6e6e6] flex justify-start items-end transition-all duration-300 gap-3`}
    >
      <img
        src="/image/c-icon.png"
        alt="Red Head icon"
        className="w-[112.357px] h-[112.357px] shrink-0 rounded-bl-lg"
      />

      <div
        className={`${
          show ? "opacity-100 flex" : "opacity-0 hidden"
        } items-center gap-8 pr-6 h-full transition-all duration-500`}
      >
        <div className="flex flex-col transition-all duration-500">
          <div className="text-sm font-semibold text-black">
            Rouge (feat. TAC)
          </div>
          <div className="text-xs text-[#505050] ">Robu, TAC</div>
        </div>
        <img src="/icons/polygon.svg" alt="Polygon icon" className="w-9 h-9" />
      </div>
      <div
        className={`${
          show ? "opacity-100 flex" : "opacity-0 hidden"
        } w-max transition-all duration-500 absolute -right-6 -bottom-5`}
      >
        <Button onClick={() => navigate("/sound-tracks")}>
          All Soundtracks
        </Button>
      </div>

      <div
        className={`${
          show ? "opacity-0" : "opacity-100"
        } bg-[#e6e6e6] rounded-full p-4 h-fit shadow-lg absolute top-3.5 -right-[25px] transition-opacity duration-300`}
      >
        <img src="/icons/play.png" alt="Play icon" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default MiniPlayer;
