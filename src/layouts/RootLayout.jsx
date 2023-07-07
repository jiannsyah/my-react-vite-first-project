import HeadingBar from "./headingbar";
import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col h-full w-full bg-gray-100 ">
        <HeadingBar />
        <div className="max-w-5xl flex-1 mx-auto py-4">{children}</div>
      </div>
    </div>
  );
}

export default RootLayout;
