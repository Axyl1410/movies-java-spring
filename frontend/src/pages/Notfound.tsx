import { Link } from "react-router-dom";
import { AuroraBackground } from "../components/ui/aurora-background";
import BackButton from "../components/ui/Backbutton";
import styles from "./Notfound.module.css";

export default function Notfound() {
  return (
    <AuroraBackground>
      <section className="flex h-screen w-full items-center justify-center">
        <div
          className="bg-secondary text-primary flex h-full w-full items-center justify-center rounded px-8 py-4 transition-colors duration-300 md:px-12 md:py-8"
          id="error-page"
        >
          <div
            className={`${styles.content} content max-w-[600px] text-center`}
          >
            <h2
              className={`${styles.header} relative mb-4 max-w-[600px] text-[100px] font-bold leading-[1em] after:absolute after:left-0 after:right-0 after:top-0 sm:text-[160px]`}
              data-text="404"
            >
              404
            </h2>
            <h4
              className="mb-5 max-w-[600px] text-[20px] uppercase sm:text-[24px]"
              data-text="There's nothing here..."
            >
              There's nothing here...
            </h4>
            <p className="text-balance text-[1.2em]">
              Sorry, the page you're looking for doesn't exist. If you think
              something is broken, report a problem.
            </p>
            <div className="mt-5 flex justify-center gap-2">
              <Link to="/">
                <button className="rounded-md bg-sky-500 px-3 py-2 text-white transition-colors hover:bg-sky-600 active:bg-sky-500">
                  Trang chủ
                </button>
              </Link>
              <BackButton className="bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-500" />
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
