import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <aside className="bg-gray-700 rounded-2xl flex flex-col w-fit">
        <a href="/">
          <picture>
            <img src="" alt="" />
          </picture>
        </a>
        <nav>
          <a href="/"></a>
          <a href="/Cities"></a>
          <a href="/Settings"></a>
        </nav>
      </aside>
    </main>
  );
}
