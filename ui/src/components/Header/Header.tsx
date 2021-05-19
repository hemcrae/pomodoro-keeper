import { ReactComponent as LogoImg } from "../../assets/Logo/LogoImg.svg";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.scss";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  const handleDrawerOpen = () => {
    toggleDrawer();
  };

  return (
    <>
      <AppBar className="header" position="sticky" color="transparent">
        <Toolbar className="header__toolbar">
          <Link to="/timer">
            <LogoImg />
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
