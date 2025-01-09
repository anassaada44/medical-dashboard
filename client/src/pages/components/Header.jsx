import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../src/assets/logo.jpg";
import { FiAlignCenter } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

function Header() {
  const currentUser = true;
  const pathname = useLocation().pathname;
  return (
    <Navbar fluid rounded className="border-b-2  ">
      <Navbar.Brand href="/">
        <Link to="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Medical
          </span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Button pill className="h-10 w-10">
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToPink">Login </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active={pathname === "/"}
          className={pathname === "/" && "underline"}
        >
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          active={pathname === "/about"}
          className={pathname === "/about" && "underline"}
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link
          active={pathname === "/services"}
          className={pathname === "/services" && "underline"}
        >
          <Link to="/services">Services</Link>
        </Navbar.Link>
        <Navbar.Link
          active={pathname === "/contact"}
          className={pathname === "/contact" && "underline"}
        >
          <Link to="/contact">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
