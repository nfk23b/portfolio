import { useEffect, useState, type MouseEvent } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Typography,
    type SxProps,
    type Theme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import overlay2 from "../assets/img/overlay2.png";
import overlay3 from "../assets/img/overlay3.svg";

const white = "#fff";

const langButtonSx = (active: boolean): SxProps<Theme> => ({
    color: active ? "#555" : white,
    backgroundColor: active ? white : "transparent",
    borderColor: white,
    transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
    "&:hover": {
        borderColor: white,
        backgroundColor: active ? white : "rgba(255, 255, 255, 0.125)",
    },
});

const scrollToAbout = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("about");
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
};

const Header = () => {
    const { t, i18n } = useTranslation();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(id);
    }, []);

    const lang = i18n.resolvedLanguage;

    return (
        <Box
            component="header"
            sx={{
                backgroundColor: "#4686a0",
                backgroundAttachment: "fixed, fixed, fixed",
                backgroundImage: `url(${overlay2}), url(${overlay3}), linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2)`,
                backgroundPosition: "top left, center center, center center",
                backgroundSize: "auto, cover, cover",
                overflow: "hidden",
                position: "relative",
                textAlign: "center",
                p: {
                    xs: "8em 2em 4em",
                    md: "8em 3em 4em",
                    lg: "10em 3em 8em",
                    xl: "12em 0 8em",
                },
            }}
        >
            <ButtonGroup
                size="small"
                aria-label="Language"
                sx={{ position: "absolute", top: "1em", right: "1em" }}
            >
                {[
                    ["sk", "Sk"],
                    ["ru", "Ru"],
                    ["en", "En"],
                ].map(([code, label]) => (
                    <Button
                        key={code}
                        sx={langButtonSx(lang === code)}
                        aria-pressed={lang === code}
                        onClick={() => i18n.changeLanguage(code)}
                    >
                        {label}
                    </Button>
                ))}
            </ButtonGroup>
            <Box
                sx={{
                    transition: "transform 1.5s ease, opacity 2s ease",
                    transitionDelay: "0.25s",
                    transform: loaded ? "scale(1)" : "scale(1.05)",
                    opacity: loaded ? 1 : 0,
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontSize: "2.6em",
                        lineHeight: "1.33em",
                        color: white,
                    }}
                >
                    {t("header.heading")}
                </Typography>
                <Typography
                    sx={{
                        mt: "1em",
                        fontSize: "1.15em",
                        lineHeight: "1.65em",
                        color: "rgba(255, 255, 255, 0.85)",
                    }}
                >
                    {t("header.text")}
                </Typography>
                <Box
                    sx={{
                        transition: "transform 1.5s ease, opacity 1.5s ease",
                        transitionDelay: "1s",
                        transform: loaded
                            ? "translateY(0)"
                            : "translateY(30em)",
                        opacity: loaded ? 1 : 0,
                        my: "2em",
                        "&::after": {
                            background: white,
                            content: '""',
                            display: "block",
                            height: "100vh",
                            left: "50%",
                            position: "absolute",
                            top: "100%",
                            width: "1px",
                        },
                    }}
                >
                    <Button
                        href="#about"
                        onClick={scrollToAbout}
                        variant="outlined"
                        sx={{
                            color: white,
                            borderColor: white,
                            boxShadow: `inset 0 0 0 1px ${white}`,
                            borderRadius: "4px",
                            fontSize: "1em",
                            fontWeight: 400,
                            height: "2.75em",
                            letterSpacing: "0.125em",
                            px: "2em",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            width: { xs: "100%", sm: "auto" },
                            "&:hover": {
                                borderColor: white,
                                backgroundColor: "rgba(255, 255, 255, 0.125)",
                            },
                        }}
                    >
                        {t("header.button")}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
