import { CgProfile } from "react-icons/cg";

const HeadingBar = () => {
  return (
    <div className="flex items-center justify-end p-8 h-16 bg-white shadow-md">
      <CgProfile size={25} className="cursor-pointer" />
    </div>
  );
};

export default HeadingBar;
