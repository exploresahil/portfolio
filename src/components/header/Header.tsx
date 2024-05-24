"use client";

import { CgClose } from "react-icons/cg";
import Link from "next/link";
import "./style.scss";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import headerData from "./db";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const isSSR = typeof window === "undefined";

  const [width, setWidth] = useState<number>(isSSR ? 0 : window.innerWidth);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMounted, setMounted] = useState<boolean>(false);

  //console.log("isMenuOpen->", isMenuOpen);
  //console.log("width->", width);

  useEffect(() => {
    setMounted(true);
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

  const varients = {
    initial: {
      x: "100%",
    },
    enter: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.45, 0, 0.55, 1],
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.45, 0, 0.55, 1],
      },
    },
  };

  if (isMounted)
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
            <AnimatePresence initial={false}>
              {isMenuOpen && (
                <motion.div
                  variants={varients}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="menu"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
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
  else return null;
};

export default Header;
