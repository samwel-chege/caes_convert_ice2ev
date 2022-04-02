import Image from "next/image";


const SideBar = () => {
  return (
    <>
      <div className="hover:md:w-1/6 bg-gray-200 rounded h-screen">
        <div className="p-2 w-32 h-32 rounded-full">
          <Image
            src="/caes.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
