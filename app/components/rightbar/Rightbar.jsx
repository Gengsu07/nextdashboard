import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed mr-5">
      <div className="bg-linear_gradient py-5  border-3 mb-5 relative px-2 rounded-lg">
        <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
          <Image
            src="/astronaut.png"
            alt=" "
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">🔥 Available Now</span>
          <h3>How to use the new version of the admin dashboard?</h3>
          <span className="textSoft font-medium text-xs">
            Takes 4 minutes to learn
          </span>
          <p className="textSoft text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="bg-violet-500 hover:bg-violet-800 flex justify-start items-center gap-2 rounded-full   border-5 text-white cursor-pointer mr-16 py-2 px-5">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="bg-linear_gradient py-5  border-3 mb-5 relative px-2 rounded-lg">
        <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
          <Image
            src="/astronaut.png"
            alt=" "
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="textSoft font-medium text-xs">
            Boost your productivity
          </span>
          <p className="textSoft text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="bg-violet-500 hover:bg-violet-800 flex justify-start items-center gap-2 rounded-full   border-5 text-white cursor-pointer mr-16 py-2 px-5">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
