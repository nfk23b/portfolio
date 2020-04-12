import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-scroll";
import classNames from "classnames";
import { Trans, useTranslation } from "react-i18next";
import overlay2 from "../../assets/img/overlay2.png";
import overlay3 from "../../assets/img/overlay3.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#4686a0",
        backgroundAttachment: "fixed, fixed, fixed",
        backgroundImage: `url(${overlay2}), url(${overlay3}), linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2)`,
        backgroundPosition: `top left, center center, center center`,
        backgroundSize: `auto, cover, cover`,
        maxWidth: "100%",
        overflow: "hidden",
        padding: "8em 2em 4em 2em",
        position: "relative",
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
            padding: "8em 3em 4em 3em",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "10em 3em 8em 3em",
        },
        [theme.breakpoints.up("xl")]: {
            padding: "12em 0 8em",
        },
    },
    inner: {
        transition: `transform 1.5s ease, opacity 2s ease`,
        transitionDelay: "0.25s",
        transform: "scale(1.05)",
        opacity: 0,
        position: "relative",
        zIndex: 1,
    },
    headerLoaded: {
        transform: "scale(1)",
        opacity: 1,
    },
    langSwitch: {
        position: "absolute",
        top: "1em",
        right: "1em",
        "& .active": {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.secondary,
            "&:hover": {
                backgroundColor: theme.palette.common.white,
            },
        },
    },
    langRu: {
        border: `1px solid ${theme.palette.common.white}`,
        borderRight: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.125)",
        },
    },
    langEn: {
        border: `1px solid ${theme.palette.common.white}`,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.125)",
        },
    },
    heading: {
        fontSize: "2.6em",
        lineHeight: "1.33em",
        color: theme.palette.common.white,
        // "& br": {
        //     display: "none",
        //     [theme.breakpoints.up("md")]: {
        //         display: "inline",
        //     },
        // },
    },
    subHeading: {
        margin: "1em 0 0 0",
        fontSize: "1.15em",
        lineHeight: "1.65em",
        color: "rgba(255, 255, 255, 0.75)",
    },
    buttonWrapper: {
        transition: "transform 1.5s ease",
        transitionDelay: "1s",
        transform: "translateY(30em)",
        opacity: 0,
        marginTop: "2em",
        marginBottom: "2em",
        "&::after": {
            background: theme.palette.common.white,
            content: `''`,
            display: "block",
            height: "100vh",
            left: "50%",
            position: "absolute",
            top: "100%",
            width: "1px",
        },
    },
    buttonLoaded: {
        transform: "translateY(0)",
        opacity: 1,
    },
    button: {
        color: theme.palette.common.white,
        borderColor: theme.palette.common.white,
        boxShadow: `inset 0 0 0 1px ${theme.palette.common.white}`,
        transition:
            " background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        backgroundColor: "transparent",
        borderRadius: "4px",
        border: 0,
        display: "inline-block",
        fontSize: "1em",
        fontWeight: 400,
        height: "2.75em",
        letterSpacing: "0.125em",
        lineHeight: "2.75em",
        padding: "0 2em",
        textIndent: "0.125em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "auto",
        },
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.125)",
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const { t, i18n } = useTranslation();
    const [lang, setLang] = React.useState(i18n.language);

    console.log(lang);
    const changeLanguage = (lng) => {
        setLang(lng);
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 100);
    }, []);

    return (
        <Box className={classes.root}>
            <Box className={classes.langSwitch}>
                <Button
                    className={classNames(
                        classes.langRu,
                        lang === "ru-RU" ? "active" : null
                    )}
                    size="small"
                    value="ru-RU"
                    onClick={() => changeLanguage("ru-RU")}
                >
                    Ru
                </Button>
                <Button
                    className={classNames(
                        classes.langEn,
                        lang === "en-US" ? "active" : null
                    )}
                    size="small"
                    value="en-US"
                    onClick={() => changeLanguage("en-US")}
                >
                    En
                </Button>
            </Box>
            <Box
                className={classNames(
                    classes.inner,
                    loaded ? classes.headerLoaded : null
                )}
            >
                <Typography variant="h2" className={classes.heading}>
                    <Trans i18nKey="header.heading"></Trans>
                </Typography>
                <Typography className={classes.subHeading}>
                    <Trans i18nKey="header.text"></Trans>
                </Typography>
                <Box
                    className={classNames(
                        classes.buttonWrapper,
                        loaded ? classes.buttonLoaded : null
                    )}
                >
                    <Link to="section1" smooth={true} duration={1000}>
                        <Button variant="outlined" className={classes.button}>
                            {t("header.button")}
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
