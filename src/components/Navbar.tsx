import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

const Navbar = () => {
  const pages: MenuItem[] = [
    {
      label: "Pokemon List",
      url: "/",
    },
    {
      label: "Berries",
      url: "/berries",
    },
    {
      label: "Dog",
      url: "/test/dog",
    },
  ];
  return <Menubar model={pages} />;
};

export default Navbar;
