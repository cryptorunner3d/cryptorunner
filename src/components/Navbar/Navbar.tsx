import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Logo from "src/assets/images/logo.png";
import {
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Theme,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
    alignItems: "center",
    height: 90,
  },
  img: {
    height: 90,
  },
  linksContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: 600,
  },
  activeLink: {
    color: theme.palette.primary.main,
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [open, setMenuOpen] = useState(false);

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Link to="/">
          <img src={Logo} alt="crypto-runner" className={classes.img} />
        </Link>
        <Hidden mdDown>
          <div className={classes.linksContainer}>
            <NavLink
              exact
              to="/#teamsection"
              className={clsx(classes.link, "styleFont")}
              // activeClassName={classes.activeLink}
            >
              Team
            </NavLink>
            <NavLink
              exact
              to="/#features"
              className={clsx(classes.link, "styleFont")}
              // activeClassName={classes.activeLink}
            >
              Features
            </NavLink>
            <a
              href="https://www.pinksale.finance/#/launchpad/0x8aEa712C260C7aa098D93a6Bee028Cb526749B45?chain=BSC"
              target="_blank"
              className={clsx(classes.link, "styleFont")}
            >
              Presale
            </a>
            {/* <NavLink
            >
              Presale
            </NavLink> */}
            <NavLink
              to="/farm"
              className={clsx(classes.link, "styleFont")}
              activeClassName={classes.activeLink}
            >
              NFT Farm
            </NavLink>
            <a
              href="https://claimfrontend.web.app"
              target="_blank"
              className={clsx(classes.link, "styleFont")}
            >
              Claim
            </a>
          </div>
          <Button
            href="https://app.cryptorunner.io"
            target="_blank"
            variant="contained"
            color="secondary"
            style={{ maxWidth: 300 }}
          >
            Launch app
          </Button>
        </Hidden>
        <Hidden mdUp>
          <div />
          <IconButton onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setMenuOpen(false)}>
        <div style={{ width: 250 }}>
          <List>
            <ListItem button>
              <ListItemText primary="" />
              <Button
                variant="contained"
                color="secondary"
                style={{ maxWidth: 300 }}
              >
                Launch app
              </Button>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Container>
  );
};

export default Navbar;
