import Transition from "../common/Transition";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Transition>
        <Navbar />
        <div className="container">{children}</div>
      </Transition>
    </>
  );
}
