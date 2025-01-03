import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen">
      {/* Seção Principal Central */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#FFFDF7]">
        <div className="flex flex-1"></div>
        <a href="https://instagram.com/sky.crickets" target="_blank">
          <Image
            src="/logo.png"
            alt="Sky Crickets Logo"
            width={300}
            height={300}
            className="mx-auto mb-auto"
          />
        </a>
        <div className="flex flex-1"></div>
        <div className="absolute bottom-10 text-center">
          <p className="text-xl font-bold">SINCE 2023</p>
          <a href="https://instagram.com/sky.crickets" target="_blank">
            <p className="text-xl">@sky.crickets</p>
          </a>
        </div>
      </div>

      {/* Barra Lateral Direita */}
      {/* <div className="w-1/4 flex flex-col">
        <div className="h-1/2 bg-[#69B550] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
          <span className="text-white text-2xl font-bold">LOJA</span>
        </div>
        <div className="h-1/2 bg-[#FF8BB4] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
          <span className="text-white text-2xl font-bold">LENHA</span>
        </div>
      </div> */}
      <div className="flex flex-col">
        <div className="h-1/2 bg-[#69B550] w-20">
        </div>
        <div className="h-1/2 bg-[#FF8BB4] w-20">
        </div>
      </div>
    </main>
  );
}