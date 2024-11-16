import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: {
    color?: string;
    modalSrc?: string;
    title?: string;
    subtitle?: string;
    description?: string;
  };
}

const Modal = ({ isOpen, onClose, data }: ModalProps) => {
  console.log(data);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div
        style={{ backgroundColor: data?.color }}
        className={` text-white h-[90%] lg:h-1/2  xl:h-[55%] flex items-end rounded-3xl p-5 lg:p-12 shadow-lg w-4/5 relative`}
      >
        <IoCloseSharp
          onClick={onClose}
          size={30}
          color="white"
          className="absolute right-5 top-5 cursor-pointer"
        />
        <img
          src={data?.modalSrc}
          className="hidden lg:block h-fit lg:w-[38%] xl:w-[35%] shrink-0"
        />
        <div
          className={`${
            data?.color === "#94d5f9" && "text-black"
          } flex flex-col gap-2 justify-center lg:gap-3 xl:gap-8 h-full `}
        >
          <div>
            <div className="text-5xl xl:text-6xl font-['QUETZAL']">
              {data?.title}
            </div>
            <div className="text-[15px] xl:text-xl font-medium ">
              {data?.subtitle}
            </div>
          </div>
          <p className="text-sm xl:text-base">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
