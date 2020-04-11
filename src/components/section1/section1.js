import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import img from "../../assets/img/pic01.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2em 1.5em 0.1em 1.5em",
        [theme.breakpoints.up("sm")]: {
            padding: "3em 1.5em 1em 1.5em",
        },
        [theme.breakpoints.up("md")]: {
            padding: "5em 3em 3em 3em",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "5em 3em 3em 3em",
            maxWidth: "1140px",
            margin: "0 auto",
        },
        [theme.breakpoints.up("xl")]: {
            maxWidth: "1280px",
        },
    },
    inner: {
        display: "flex",
        flexDirection: "column-reverse",
        [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
        },
    },
    textBlock: {
        [theme.breakpoints.up("lg")]: {
            width: "50%",
            paddingRight: "2em",
        },
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
        [theme.breakpoints.up("lg")]: {
            textAlign: "left",
        },
    },
    heading: {
        fontSize: "2.25em",
        lineHeight: "1.35em",
        color: theme.palette.text.secondary,
    },
    text: {
        color: theme.palette.text.third,
        textAlign: "center",
        marginBottom: "2em",
        fontSize: "1.15em",
        lineHeight: "1.65em",
        [theme.breakpoints.up("lg")]: {
            textAlign: "left",
        },
    },
    imgBlock: {
        display: "block",
        margin: "0 0 2em 0",
        width: "100%",
        borderRadius: "4px",
        border: 0,
        position: "relative",
        [theme.breakpoints.up("lg")]: {
            padding: "0 0 0 4em",
            width: "50%",
        },
    },
    img: {
        display: "block",
        borderRadius: "4px",
        width: "100%",
    },
}));

const Section1 = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Box className={classes.root} id="section1">
            <Box className={classes.inner}>
                <Box className={classes.textBlock}>
                    <Box className={classes.textBlockInner}>
                        <Typography variant="h3" className={classes.heading}>
                            {t("section1.heading")}
                        </Typography>
                    </Box>
                    <Typography className={classes.text}>
                        {t("section1.text")}
                    </Typography>
                </Box>
                <Box className={classes.imgBlock}>
                    <img src={img} alt="img" className={classes.img} />
                </Box>
            </Box>
        </Box>
    );
};

export default Section1;
