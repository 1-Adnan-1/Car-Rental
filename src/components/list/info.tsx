import { FC } from "react";
import { Car } from "../../types";
import { motion } from "motion/react";
import { FaTachometerAlt, FaCar, FaCalendarAlt } from "react-icons/fa";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  const arr = [
    {
      icon: <FaTachometerAlt size={25} />,
      text: car.trany === "automatic" ? "Otomatik" : "Manuel",
    },
    {
      icon: <FaCar size={25} />,
      text: car.drive === "AWD" ? "AWD" : car.drive === "FWD" ? "FWD" : "RWD",
    },
    {
      icon: <FaCalendarAlt size={25} />,
      text: `${car.year}`,
    },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full flex justify-between">
      {arr.map(({ icon, text }, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={navVariants}
          initial="hidden"
          whileInView="visible"
          className="flex-center flex-col"
        >
          {icon}
          <p
            className="text-center text-sm overflow-hidden text-ellipsis whitespace-nowrap"
            title={text}
          >
            {text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
