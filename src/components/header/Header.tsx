import Link from "next/link";
import "./style.scss";

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

  return (
    <header id="header">
      <Link href="/#header">
        <h1>
          Sahil
          <br />
          Satpute
        </h1>
      </Link>
      <nav>
        {headerData.map((eachItem, i) => (
          <Link key={i} href={eachItem.link}>
            {eachItem.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
