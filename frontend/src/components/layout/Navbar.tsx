import { Link } from "react-router-dom";

export default function Navbar() {
  const nav = [
    {
      name: "Home",
      path: "/",
    },
    { name: "Movie", path: "/movies" },
  ];
  return (
    <div className="container sticky top-0 z-40 flex h-[60px] w-full items-center justify-between border-b bg-white px-4">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-neutral-600">
          <Link to="/">Axyl</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {nav.map((item) => (
          <div
            key={item.name}
            className="text-base font-medium text-neutral-600"
          >
            <a href={item.path}>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
