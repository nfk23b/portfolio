import { Box, Chip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import overlay1 from "../assets/img/overlay1.png";
import bg from "../assets/img/ferenc-almasi-L8KQIPCODV8-unsplash.jpg";
import {
    JsIcon,
    ReactIcon,
    ReduxIcon,
    NextJsIcon,
    GraphqlIcon,
    MaterialuiIcon,
} from "../utils/icons";

const icons = [
    { name: "JavaScript", Icon: JsIcon, bg: "#F7DF1E", fill: "#000" },
    { name: "React", Icon: ReactIcon, bg: "#61DAFB", fill: "#000" },
    { name: "Redux", Icon: ReduxIcon, bg: "#764ABC", fill: "#fff" },
    { name: "Next.js", Icon: NextJsIcon, bg: "#000", fill: "#fff" },
    { name: "GraphQL", Icon: GraphqlIcon, bg: "#E10098", fill: "#fff" },
    { name: "Material UI", Icon: MaterialuiIcon, bg: "#0081CB", fill: "#fff" },
];

const groups = [
    {
        key: "frontend",
        items: [
            "React",
            "TypeScript",
            "JavaScript",
            "Next.js",
            "Redux",
            "Web Components",
            "SCSS",
            "Bootstrap",
            "jQuery",
        ],
    },
    {
        key: "data",
        items: ["Highcharts", "GraphQL", "Apollo Client", "Storybook"],
    },
    {
        key: "cms",
        items: [
            "Optimizely / Episerver",
            "ASP.NET Core MVC",
            "Razor",
            "Magento 1 & 2",
            "Knockout.js",
        ],
    },
    {
        key: "practices",
        items: ["Lighthouse", "Core Web Vitals", "SSR", "Bundle splitting"],
    },
];

const Technologies = () => {
    const { t } = useTranslation();

    return (
        <Box
            component="section"
            sx={{
                backgroundColor: "#333",
                color: "rgba(255, 255, 255, 0.85)",
                backgroundImage: `url(${overlay1}), url(${bg})`,
                backgroundSize: "auto, cover",
                backgroundAttachment: { xs: "scroll", lg: "fixed, fixed" },
                textAlign: "center",
                p: {
                    xs: "2em 1.5em 0.1em",
                    sm: "3em 1.5em 1em",
                    md: "4em 0 2em",
                    lg: "6em 0 4em",
                },
            }}
        >
            <Box
                sx={{
                    display: { lg: "flex" },
                    maxWidth: { lg: "1280px" },
                    mx: { lg: "auto" },
                    alignItems: { lg: "center" },
                }}
            >
                <Box
                    component="ul"
                    aria-label={t("technologies.heading")}
                    sx={{
                        p: 0,
                        m: { xs: "0 -0.5rem 2em", lg: 0 },
                        listStyle: "none",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        width: { lg: "50%" },
                    }}
                >
                    {icons.map(({ name, Icon, bg: bgColor, fill }) => (
                        <Box
                            component="li"
                            key={name}
                            sx={{
                                p: { xs: "0.9rem", md: "2em", lg: "2.5em" },
                                m: { xs: "0 0.5rem 1rem", xl: "0 1em 1.5em" },
                            }}
                        >
                            <Box
                                sx={{
                                    transform: "rotate(45deg)",
                                    borderRadius: "4px",
                                    border: "solid 1px #fff",
                                    backgroundColor: bgColor,
                                    p: "1.5em",
                                    height: {
                                        xs: "2.5em",
                                        md: "4em",
                                        lg: "5em",
                                        xl: "6em",
                                    },
                                    width: {
                                        xs: "2.5em",
                                        md: "4em",
                                        lg: "5em",
                                        xl: "6em",
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxSizing: "content-box",
                                }}
                            >
                                <Icon
                                    titleAccess={name}
                                    sx={{
                                        fill,
                                        transform: "rotate(-45deg)",
                                        fontSize: {
                                            xs: "40px",
                                            md: "66px",
                                            lg: "76px",
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box
                    sx={{
                        width: { lg: "50%" },
                        px: { xs: "1rem", md: "2rem", lg: "3em" },
                    }}
                >
                    <SectionHeading light alignLeft>
                        {t("technologies.heading")}
                    </SectionHeading>
                    <Typography
                        sx={{
                            textAlign: { xs: "center", lg: "left" },
                            mb: "1.5em",
                            lineHeight: "1.65em",
                            fontSize: "1.15em",
                        }}
                    >
                        {t("technologies.text")}
                    </Typography>
                    {groups.map(({ key, items }) => (
                        <Box key={key} sx={{ mb: "1.5em" }}>
                            <Typography
                                sx={{
                                    mb: "0.5em",
                                    fontWeight: 700,
                                    fontSize: "0.9em",
                                    letterSpacing: "0.125em",
                                    textTransform: "uppercase",
                                    textAlign: { xs: "center", lg: "left" },
                                }}
                            >
                                {t(`technologies.groups.${key}`)}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5em",
                                    justifyContent: {
                                        xs: "center",
                                        lg: "flex-start",
                                    },
                                }}
                            >
                                {items.map((item) => (
                                    <Chip
                                        key={item}
                                        label={item}
                                        variant="outlined"
                                        sx={{
                                            color: "#fff",
                                            borderColor:
                                                "rgba(255, 255, 255, 0.6)",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Technologies;
