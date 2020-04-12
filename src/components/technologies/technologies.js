import React from "react";
import { makeStyles } from "@material-ui/core";
import {
    Box,
    Typography,
    SvgIcon,
    Grid,
    GridListTile,
} from "@material-ui/core";
import classNames from "classnames";
import { Trans, useTranslation } from "react-i18next";
import overlay1 from "../../assets/img/overlay1.png";
import bg from "../../assets/img/karthik-swarnkar-AoNvwL-Dmtw-unsplash.jpg";
import {
    JsIcon,
    ReactIcon,
    ReduxIcon,
    NextJsIcon,
    GraphqlIcon,
    MaterialuiIcon,
} from "../../utils/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#333",
        color: "rgba(255, 255, 255, 0.75)",
        backgroundImage: `url(${overlay1}), url(${bg})`,
        backgroundSize: "auto, cover",
        backgroundAttachment: "scroll",
        textAlign: "center",
        padding: "2em 1.5em 0.1em 1.5em",
        [theme.breakpoints.up("sm")]: {
            padding: "3em 1.5em 1em 1.5em",
        },
        [theme.breakpoints.up("md")]: {
            padding: "4em 0 2em 0",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "6em 0 4em 0",
            backgroundAttachment: "fixed, fixed",
        },
    },
    inner: {
        [theme.breakpoints.up("lg")]: {
            display: "flex",
            maxWidth: "1280px",
            margin: "0 auto",
        },
    },
    textWrapper: {
        [theme.breakpoints.up("lg")]: {
            width: "50%",
        },
    },
    grid: {
        padding: 0,
        margin: "0 -0.5rem 2em",
        justifyContent: "center",
        listStyle: "none",
        [theme.breakpoints.up("lg")]: {
            width: "50%",
            display: "block",
            margin: 0,
        },
        [theme.breakpoints.up("xl")]: {
            left: "-30px",
            position: "relative",
        },
    },
    gridItem: {
        padding: "0.9rem",
        margin: "0 0.5rem 1rem",
        [theme.breakpoints.up("md")]: {
            padding: "2em",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "2.5em",
            display: "inline-block",
        },
        [theme.breakpoints.up("xl")]: {
            margin: "0 1em 1.5em",
        },
        "& > div": {
            overflow: "visible",
            padding: "1.5em",
            transform: "rotate(45deg)",
            borderRadius: "4px",
            border: "solid 1px rgba(144, 144, 144, 0.5)",
            margin: 0,
            height: "2.5em",
            lineHeight: "2.5em",
            width: "2.5em",
            borderColor: theme.palette.common.white,
            [theme.breakpoints.up("md")]: {
                height: "4em",
                lineHeight: "4em",
                width: "4em",
            },
            [theme.breakpoints.up("lg")]: {
                height: "5em",
                lineHeight: "5em",
                width: "5em",
            },
            [theme.breakpoints.up("xl")]: {
                height: "6em",
                lineHeight: "6em",
                width: "6em",
            },
        },
        "& svg": {
            fontSize: "40px",
            transform: "rotate(-45deg)",
            display: "inline-block",
            lineHeight: "inherit",
            [theme.breakpoints.up("md")]: {
                fontSize: "66px",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "76px",
                position: "relative",
                top: "9px",
            },
            [theme.breakpoints.up("xl")]: {
                top: "18px",
            },
        },
    },
    jsIcon: {
        "& > div": {
            backgroundColor: "#F7DF1E",
        },
        "& svg": {
            fill: theme.palette.common.black,
        },
    },
    reactIcon: {
        "& > div": {
            backgroundColor: "#61DAFB",
        },
        "& svg": {
            fill: theme.palette.common.black,
        },
    },
    reduxIcon: {
        "& > div": {
            backgroundColor: "#764ABC",
        },
        "& svg": {
            fill: theme.palette.common.white,
        },
    },
    nextjsIcon: {
        "& > div": {
            backgroundColor: "#000",
        },
        "& svg": {
            fill: theme.palette.common.white,
        },
    },
    graphqlIcon: {
        "& > div": {
            backgroundColor: "#E10098",
        },
        "& svg": {
            fill: theme.palette.common.white,
        },
    },
    materialuiIcon: {
        "& > div": {
            backgroundColor: "#0081CB",
        },
        "& svg": {
            fill: theme.palette.common.white,
        },
    },
    textBlock: {
        padding: "0 1rem",
        [theme.breakpoints.up("md")]: {
            padding: "0 2rem",
        },
        [theme.breakpoints.up("lg")]: {
            width: "auto",
            padding: "0 3em",
        },
    },
    textBlockInner: {
        textAlign: "center",
        marginBottom: "1em",

        "&::after": {
            background: theme.palette.common.white,
            content: `''`,
            display: "inline-block",
            height: "1px",
            marginTop: "1.5em",
            width: "6em",
        },
        [theme.breakpoints.up("lg")]: {
            textAlign: "left",
        },
    },
    heading: {
        fontSize: "2.25em",
        lineHeight: "1.35em",
        color: theme.palette.common.white,
    },
    text: {
        color: theme.palette.common.white,
        textAlign: "center",
        marginBottom: "2em",
        lineHeight: "1.65em",
        fontSize: "1.15em",
        [theme.breakpoints.up("lg")]: {
            textAlign: "left",
        },
    },
}));

const Technologies = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Box className={classes.root}>
            <Box className={classes.inner}>
                <Grid
                    container
                    spacing={0}
                    className={classes.grid}
                    component="ul"
                >
                    <GridListTile
                        className={classNames(classes.gridItem, classes.jsIcon)}
                    >
                        <SvgIcon component={JsIcon} className={classes.icon} />
                    </GridListTile>
                    <GridListTile
                        className={classNames(
                            classes.gridItem,
                            classes.reactIcon
                        )}
                    >
                        <SvgIcon
                            component={ReactIcon}
                            className={classes.icon}
                        />
                    </GridListTile>
                    <GridListTile
                        className={classNames(
                            classes.gridItem,
                            classes.reduxIcon
                        )}
                    >
                        <SvgIcon
                            component={ReduxIcon}
                            className={classes.icon}
                        />
                    </GridListTile>
                    <GridListTile
                        className={classNames(
                            classes.gridItem,
                            classes.nextjsIcon
                        )}
                    >
                        <SvgIcon
                            component={NextJsIcon}
                            className={classes.icon}
                        />
                    </GridListTile>
                    <GridListTile
                        className={classNames(
                            classes.gridItem,
                            classes.graphqlIcon
                        )}
                    >
                        <SvgIcon
                            component={GraphqlIcon}
                            className={classes.icon}
                        />
                    </GridListTile>
                    <GridListTile
                        className={classNames(
                            classes.gridItem,
                            classes.materialuiIcon
                        )}
                    >
                        <SvgIcon
                            component={MaterialuiIcon}
                            className={classes.icon}
                        />
                    </GridListTile>
                </Grid>
                <Box className={classes.textWrapper}>
                    <Box className={classes.textBlock}>
                        <Box className={classes.textBlockInner}>
                            <Typography
                                variant="h3"
                                className={classes.heading}
                            >
                                {t("technologies.heading")}
                            </Typography>
                        </Box>
                        <Typography className={classes.text}>
                            <Trans i18nKey="technologies.text1"></Trans>
                        </Typography>
                        <Typography className={classes.text}>
                            <Trans i18nKey="technologies.text2"></Trans>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Technologies;
