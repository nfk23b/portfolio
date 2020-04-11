import React from "react";
import overlay2 from "../../assets/img/overlay2.png";
import overlay4 from "../../assets/img/overlay4.svg";
import { Box, Typography, Grid, makeStyles, SvgIcon } from "@material-ui/core";
import { GithubIcon, EmailIcon } from "../../utils/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundAttachment: "scroll",
        padding: "2em 1.5em 2em",
        backgroundColor: "#4686a0",
        color: "rgba(255, 255, 255, 0.75)",
        backgroundPosition: "top left, center center, center center",
        backgroundSize: "auto, cover, cover",
        textAlign: "center",
        backgroundImage: `url(${overlay2}), url(${overlay4}), linear-gradient(45deg, #4361c2, #4fa49a 50%, #9dc66b 95%)`,
        [theme.breakpoints.up("sm")]: {
            padding: "3em 1.5em 3em",
        },
        [theme.breakpoints.up("md")]: {
            padding: "4em 0 4em 0",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "6em 0 6em",
            backgroundAttachment: "fixed, fixed, fixed",
        },
    },
    iconsItem: {
        margin: "0 auto 1em",
        maxWidth: "160px",
        "& a": {
            justifyContent: "center",
            display: "flex",
            color: "rgba(255, 255, 255, 0.75)",
            textDecoration: "none",
        },
    },
    icon: {
        marginRight: "0.5em",
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root} color="secondary">
            <Grid className={classes.icons}>
                <Grid item className={classes.iconsItem}>
                    <a
                        href="https://github.com/nfk23b"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SvgIcon
                            component={GithubIcon}
                            className={classes.icon}
                        />
                        <Typography>github.com/nfk23b</Typography>
                    </a>
                </Grid>
                <Grid item className={classes.iconsItem}>
                    <a
                        href="mailto:nfk23b@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SvgIcon
                            component={EmailIcon}
                            className={classes.icon}
                        />
                        <Typography>nfk23b@gmail.com</Typography>
                    </a>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
