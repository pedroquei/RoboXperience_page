import {
  Instagram,
  InstagramIcon,
  Linkedin,
  LucideInstagram,
  Mail,
  MessageCircle,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const OpenInstagram = () => {
    window.open(
      "https://www.instagram.com/roboxperience?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "_blank"
    );
  };

  return (
    <footer className="bg-[#0B2D4B] text-white font-poppins">
      <div className="bg-[#FDCB39]">
        <h1 className="py-2 text-center text-2xl text-[#0A73B0] font-semibold">
          #VemSerSTEAM!
        </h1>
      </div>

      <div className="mx-[3vw] flex flex-col md:space-x-[10vw] gap-2 md:flex-row justify-center items-center">
        <div className="w-70">
          <img
            src="/public/assets/logo/logo2.png"
            alt="Logo RoboXperience"
            className="h-25"
          />
          <p>Instituto Federal do Maranhão Campus Imperatriz</p>
          <p className="mt-5">
            Av. Newton Bello, S/N - Vila Maria, Imperatriz - MA
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[#FDCB39] text-xl font-semibold">
            Acompanhe nossas redes:
          </h1>
          <div className="flex flex-row gap-2">
            <button
              className="bg-[#15B3F7] p-2 rounded-full"
              onClick={OpenInstagram}
            >
              <Instagram size={32} color="#0B2D4B" />
            </button>
            <button className="bg-[#15B3F7] p-2 rounded-full">
              <Linkedin size={32} color="#0B2D4B" />
            </button>
            <button className="bg-[#15B3F7] p-2 rounded-full">
              <Youtube size={32} color="#0B2D4B" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[#FDCB39] text-xl font-semibold">Contato:</h1>
          <div className="flex flex-row items-center gap-2">
            <Mail
              size={42}
              color="#0B2D4B"
              className="bg-[#15B3F7] p-2 rounded-full"
            />
            <p>roboxperience0@gmail.com</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <MessageCircle
              size={42}
              color="#0B2D4B"
              className="bg-[#15B3F7] p-2 rounded-full"
            />
            <p>(99) 9 8503-9425</p>
          </div>
        </div>
      </div>
      <div className="bg-[#0A73B0] mt-5">
        <h1 className="p-1 text-center text-sm text-white font-semibold">
          2025 ROBOXPERIENCE | Desenvolvido por RoboXperience
        </h1>
      </div>
    </footer>
  );
}
