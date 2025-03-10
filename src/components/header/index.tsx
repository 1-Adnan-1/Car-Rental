import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const Header: FC = () => {
  return (
    <header className="w-full z-10">
      <div className="max-width flex justify-between items-center padding-x py-4">
        <Link to="/">
          <img src="/logo.png" alt="logo" width={170} height={150} />
        </Link>

        <Button text="Kaydol" designs="min-w-[130px]" />
      </div>
    </header>
  );
};

export default Header;
