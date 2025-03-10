import { FC } from "react";
import Button from "../button";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <div className="hero flex flex-col lg:flex-row items-center justify-between px-15 py-16">
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-6xl font-bold">
          Özgürlüğü Hisset, Yolculuğa Başla
        </h1>

        <p className="text-2xl mt-6">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>

        <Button text="Arabaları Keşfet" designs="mt-8 text-xl" />
      </div>

      <div className="flex justify-center lg:w-1/2 mt-12 lg:mt-0">
        <motion.img
          initial={{ translateX: 350, scale: 1 }}
          animate={{ translateX: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
          src="/audi.png"
          alt="mercedes araba"
          className="object-contain max-w-[600px]"
        />
      </div>
    </div>
  );
};

export default Hero;
