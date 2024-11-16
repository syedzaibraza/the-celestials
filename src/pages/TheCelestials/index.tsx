import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { CelestialsTypes, CelestialsData } from "../../components/data";

const Celestials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<CelestialsTypes | null>(
    null
  );
  const openModal = (data: CelestialsTypes) => {
    setModalContent(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col-reverse lg:grid h-full lg:grid-cols-7 overflow-auto lg:overflow-hidden">
        <div className="col-span-4 py-8 px-6 lg:p-0 bg-[#cfcfcf] lg:bg-transparent rounded-t-[20px] lg:rounded-none h-full grid items-end grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-12">
          {CelestialsData.map((image, index) => (
            <div
              style={{ backgroundColor: image?.color }}
              className={` flex justify-end items-end h-[100px] md:h-[120px] rounded-2xl`}
            >
              <img
                key={index}
                src={image.mobileSrc}
                alt={image.alt}
                className="w-full h-[160px] md:h-[230px] lg:hidden lg:grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                onClick={() => openModal(image)}
              />
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full hidden lg:block h-[150px] md:h-fit lg:grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>

        <div className="col-span-3 p-6 flex flex-col xl:gap-14 lg:gap-3">
          <div className="flex flex-col gap-3">
            <div className="text-black text-3xl font-normal font-['QUETZAL'] leading-none xl:leading-[41.28px]">
              THE <br />
              CELESTIALS
            </div>
            <div>
              <p className="text-justify text-sm indent-8 lg:text-base leading-none xl:leading-relaxed">
                The Tournament is simply that: a tournament. Gons from all
                regions of the System are taken to an always changing venue to
                determine who is the strongest amongst them all. The Tournament
                is set up in 1 versus 1 deathmatches that only end with death,
                unconsciousness or surrender. From hundreds of contestants only
                two will ght in the nal combat. The Tournament is the most
                important social event of each solar system. Hundreds of
                thousands get to watch it, be it live or through live streaming.
              </p>
              <br />
              <p className="text-justify text-sm  indent-8 lg:text-base leading-none xl:leading-relaxed">
                Like the internal tournaments each temple holds on their own,
                the Tournament is a rite of ascension. Only within the
                Tournament do Gons obtain their second blessing and become
                complete warriors. In the whole history of the Age of the
                Elders, only four Jinns have obtained their second blessings
                outside a Tournament. All four of them in time became Grand
                Masters of their Temples and saints in their history. The nal
                match of the Tournament usually takes place between two wounded
                and exhausted Meta Jinns.
              </p>
            </div>
          </div>

          <div className="hidden w-full lg:flex justify-end mr-6 relative">
            <Button>Gallery</Button>
            <div className="absolute -top-3 -right-3 h-6 px-2.5 pt-[7px] pb-[5px] bg-white rounded-[10px] border border-black justify-center items-center gap-2.5 inline-flex">
              <div className="text-[10px] font-bold">SOON</div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalContent} />
    </>
  );
};

export default Celestials;
