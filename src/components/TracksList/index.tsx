import { CiClock2 } from "react-icons/ci";
import { Tracks } from "../data";

export default function TracksList() {
  return (
    <ol role="list" className="w-full md:w-2/3 lg:w-1/2 space-y-5">
      <li className="lg:flex hidden text-[#4f4f4f] gap-[30px] items-center rounded-[10px] px-6 py-4 gap-x-6">
        <div>#</div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm/6 font-semibold">TITLE</p>
          <div className="hidden text-right shrink-0 sm:flex sm:flex-col sm:items-end">
            <CiClock2 size={25} />
          </div>
        </div>
      </li>

      {Tracks.map((track, index) => (
        <li
          key={index}
          className="flex bg-black/10 items-center rounded-[10px] px-6 py-4 gap-x-6"
        >
          <div>{String(index + 1).padStart(2, "0")}</div>

          <div className="flex items-center justify-between w-full">
            <div className="flex min-w-0 gap-x-4">
              <img alt={track.name} src={track.imageUrl} className="size-12" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {track.name}
                </p>
                <p className="truncate text-xs/5 text-gray-500">
                  {track.author}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">{track.duration}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
