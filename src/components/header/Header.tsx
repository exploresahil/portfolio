"use client";

import { CgClose } from "react-icons/cg";
import Link from "next/link";
import "./style.scss";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";

const headerData = [
  {
    title: "Story",
    link: "/#myStory",
  },
  {
    title: "Workflow",
    link: "/#workflow",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Experience",
    link: "/#experience",
  },
  {
    title: "Contacts",
    link: "/#contacts",
  },
];

const Header = () => {
  //console.log("headerData->", headerData);
  //console.log("screen.width->", window.innerWidth);
  const isSSR = typeof window === "undefined";

  const [width, setWidth] = useState<number>(isSSR ? 0 : window.innerWidth);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  console.log("isMenuOpen->", isMenuOpen);

  //console.log("width->", width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxMoblie = 800;

  const handleOpen = () => {
    setMenuOpen(true);
  };
  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header">
      <Link href="/#header">
        <h1>
          Sahil
          <br />
          Satpute
        </h1>
      </Link>
      {width < maxMoblie ? (
        <>
          <button id="openMenu" onClick={handleOpen}>
            <IoIosMenu />
          </button>

          {isMenuOpen && (
            <div className="menu">
              <button id="closeMenu" onClick={handleClose}>
                <CgClose />
              </button>
              <nav>
                {headerData.map((eachItem, i) => (
                  <Link key={i} href={eachItem.link}>
                    {eachItem.title}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </>
      ) : (
        <nav>
          {headerData.map((eachItem, i) => (
            <Link key={i} href={eachItem.link}>
              {eachItem.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
