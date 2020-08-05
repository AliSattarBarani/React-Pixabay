import React from "react";
import { useHistory } from "react-router";
import logo from "../logo.svg";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { myContext } from "../ContextAPI";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(3),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [input, setInput] = React.useState("");

  const { getSearchInput } = React.useContext(myContext);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => history.push({ pathname: "/" })}>
        <IconButton color="inherit">
          <HomeIcon />
        </IconButton>
        <p className="menuItem">Home</p>
      </MenuItem>
      <MenuItem onClick={() => history.push({ pathname: "/about" })}>
        <IconButton color="inherit">
          <InfoIcon />
        </IconButton>
        <p className="menuItem">About</p>
      </MenuItem>
      <MenuItem>
        <a
          href="https://github.com/AliSattarBarani/React-Pixabay"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
          }}
        >
          <IconButton color="inherit">
            <GitHubIcon style={{ fontSize: "20px" }} />
          </IconButton>
          <p className="menuItem">GitHub</p>
        </a>
      </MenuItem>
    </Menu>
  );

  const handleSearchInput = (event) => {
    setInput(event.target.value);
  };

  const DoSearch = () => {
    if (input !== "") {
      getSearchInput(input);
      setInput("");
    } else {
      window.alert("Write something to search about it!");
    }
  };

  const history = useHistory();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{ backgroundColor: "#444" }}>
        <Toolbar>
          <img
            src={logo}
            alt="Site_Logo"
            style={{ width: "30px", height: "30px", paddingRight: "10px" }}
          />
          <div className={classes.search} style={{ display: "flex" }}>
            <div className={classes.searchIcon}>
              <SearchIcon className="searchIcon" onClick={DoSearch} />
            </div>
            <InputBase
              value={input}
              onChange={handleSearchInput}
              placeholder="Search …"
              style={{ fontFamily: '"Poppins", sans-serif', color: "white" }}
              className="searchInput"
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem onClick={() => history.push({ pathname: "/" })}>
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
              <p className="menuItem">Home</p>
            </MenuItem>
            <MenuItem onClick={() => history.push({ pathname: "/about" })}>
              <IconButton color="inherit">
                <InfoIcon />
              </IconButton>
              <p className="menuItem">About</p>
            </MenuItem>
            <MenuItem>
              <a
                href="https://github.com/AliSattarBarani/React-Pixabay"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                }}
              >
                <IconButton color="inherit">
                  <GitHubIcon style={{ fontSize: "20px" }} />
                </IconButton>
                <p className="menuItem">GitHub</p>
              </a>
            </MenuItem>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuRoundedIcon className="menuIcon" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
