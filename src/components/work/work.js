import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { Box, Typography, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import pic from "../../assets/img/pic02.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2em 1.5em 0.1em 1.5em",
        [theme.breakpoints.up("sm")]: {
            padding: "3em 2.5em 2em",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "4em 2em 2em",
        },
        [theme.breakpoints.up("xl")]: {
            padding: "6em 0 4em",
        },
    },
    inner: {
        [theme.breakpoints.up("lg")]: {
            maxWidth: "1280px",
            margin: "0 auto",
        },
    },
    textBlock: {
        padding: "0 1rem",
    },
    textBlockInner: {
        textAlign: "center",
        marginBottom: "1em",

        "&::after": {
            background: "rgba(144, 144, 144, 0.5)",
            content: `''`,
            display: "inline-block",
            height: "1px",
            marginTop: "1.5em",
            width: "6em",
        },
    },
    heading: {
        fontSize: "2em",
        lineHeight: "1.35em",
        color: theme.palette.text.secondary,
    },
    text: {
        color: theme.palette.text.secondary,
        textAlign: "center",
        marginBottom: "2em",
        fontSize: "1em",
        lineHeight: "1.65em",
    },
    grid: {
        [theme.breakpoints.up("lg")]: {
            display: "flex",
        },
    },
    gridItem: {
        [theme.breakpoints.up("lg")]: {
            margin: "0 1.5em",
        },
    },
    gridItemImg: {
        width: "100%",
        display: "block",
        borderRadius: "4px",
        marginBottom: "2em",
        "& img": {
            width: "100%",
            display: "block",
            borderRadius: "4px",
        },
    },
    workHeading: {
        fontSize: "1.35em",
        lineHeight: "1.5em",
        textAlign: "center",
        color: theme.palette.text.secondary,
        marginBottom: "1em",
    },
    workDescription: {
        fontSize: "1em",
        lineHeight: "1.65",
        textAlign: "center",
        color: theme.palette.text.third,
        marginBottom: "2em",
    },
    buttonsWrapper: {
        marginBottom: "2em",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            justifyContent: "center",
        },
    },
    button: {
        backgroundColor: "transparent",
        transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        boxShadow: "inset 0 0 0 1px rgba(144, 144, 144, 0.5)",
        letterSpacing: "0.125em",
        width: "100%",
        fontSize: "0.9em",
        fontWeight: 400,
        border: 0,
        padding: 0,
        marginBottom: "0.5em",
        color: theme.palette.text.secondary,
        height: "3em",
        lineHeight: "3em",
        "&:hover": {
            backgroundColor: "rgba(144, 144, 144, 0.075)",
        },
        "&:first-child": {
            [theme.breakpoints.up("sm")]: {
                marginRight: "0.5em",
            },
            [theme.breakpoints.up("md")]: {
                marginRight: "1em",
            },
        },
        [theme.breakpoints.up("sm")]: {
            width: "calc(50% - 0.5em)",
            maxWidth: "300px",
        },
        [theme.breakpoints.up("md")]: {
            height: "2.75em",
            lineHeight: "2.75em",
        },
    },
}));

const Work = (props) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Box className={classes.root}>
            <Box className={classes.inner}>
                <Box className={classes.textBlock}>
                    <Box className={classes.textBlockInner}>
                        <Typography variant="h3" className={classes.heading}>
                            {t("work.heading")}
                        </Typography>
                    </Box>
                    <Typography className={classes.text}>
                        {t("work.text")}
                    </Typography>
                </Box>
                <Grid className={classes.grid}>
                    <Grid item className={classes.gridItem}>
                        <Box className={classes.gridItemImg}>
                            <img src={pic} alt="pic" />
                        </Box>
                        <Typography
                            className={classes.workHeading}
                            variant="h3"
                        >
                            Magna feugiat lorem
                        </Typography>
                        <Typography className={classes.workDescription}>
                            Adipiscing a commodo ante nunc magna lorem et
                            interdum mi ante nunc lobortis non amet vis sed
                            volutpat et nascetur.
                        </Typography>
                        <Box className={classes.buttonsWrapper}>
                            <Button
                                variant="outlined"
                                className={classes.button}
                            >
                                {t("work.code")}
                            </Button>
                            <Button
                                variant="outlined"
                                className={classes.button}
                            >
                                {t("work.live")}
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Box className={classes.gridItemImg}>
                            <img src={pic} alt="pic" />
                        </Box>
                        <Typography
                            className={classes.workHeading}
                            variant="h3"
                        >
                            Magna feugiat lorem
                        </Typography>
                        <Typography className={classes.workDescription}>
                            Adipiscing a commodo ante nunc magna lorem et
                            interdum mi ante nunc lobortis non amet vis sed
                            volutpat et nascetur.
                        </Typography>
                        <Box className={classes.buttonsWrapper}>
                            <Button
                                variant="outlined"
                                className={classes.button}
                            >
                                {t("work.code")}
                            </Button>
                            <Button
                                variant="outlined"
                                className={classes.button}
                            >
                                {t("work.live")}
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Box className={classes.gridItemImg}>
                            <img src={pic} alt="pic" />
                        </Box>
                        <Typography
                            className={classes.workHeading}
                            variant="h3"
                        >
                            Magna feugiat lorem
                        </Typography>
                        <Typography className={classes.workDescription}>
                            Adipiscing a commodo ante nunc magna lorem et
                            interdum mi ante nunc lobortis non amet vis sed
                            volutpat et nascetur.
                        </Typography>
                        <Box className={classes.buttonsWrapper}>
                            <Button
                                variant="outlined"
                                className={classes.button}
                            >
                                {t("work.code")}
                            </Button>
                            <Button
                                variant="outlined"
                                className={classes.button}
                            >
                                {t("work.live")}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Work;
