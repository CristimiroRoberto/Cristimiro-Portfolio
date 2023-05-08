// React hooks
import { useState,useEffect } from "react";

// Third-party library
import { ReactSVG } from "react-svg";

// Images and icons
import HeartIcon from '../../assets/svg/icon-heart.svg';

export const Footer = () => {

    const [currentDate, setCurrentDate] = useState<number>();

    useEffect(() => {
      setCurrentDate(new Date().getFullYear());
    }, []);

  return (
    <>
      <footer>
        <div className="container flex-between">
          <p className="p1">
            {currentDate} © <span></span> All rights Reserved
          </p>
          <div className="flex">
            <ReactSVG src={HeartIcon} data-alt="Icon Heart" className="mr-1" />
            <p className="p1">Designed and build by Cristimiro</p>
          </div>
        </div>
      </footer>
    </>
  );
};
