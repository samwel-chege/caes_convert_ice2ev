import Image from "next/image";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  return (
    <>
      <div className="hover:md:w-1/6 bg-blue-200 rounded h-screen">
        <div className="p-2 w-32 h-32 rounded-full">
          <Image
            src="/caes.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <button
          onClick={() => router.push("/maps")}
          className="mt-4 pl-8 rounded-full"
        >
          <span className="material-icons">location_on</span>
        </button>
      </div>
    </>
  );
};

export default SideBar;
