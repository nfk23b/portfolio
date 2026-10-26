import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import img480 from "../assets/img/about-480.webp";
import img960 from "../assets/img/about-960.webp";
import img1280 from "../assets/img/about-1280.webp";
import { colors } from "../theme";

const About = () => {
    const { t } = useTranslation();
    const paragraphs = t("about.paragraphs", { returnObjects: true });

    return (
        <Box
            component="section"
            id="about"
            sx={{
                p: {
                    xs: "2em 1.5em 0.1em",
                    sm: "3em 1.5em 1em",
                    md: "5em 3em 3em",
                },
                maxWidth: { lg: "1140px", xl: "1280px" },
                mx: { lg: "auto" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", lg: "row" },
                }}
            >
                <Box sx={{ width: { lg: "50%" }, pr: { lg: "2em" } }}>
                    <SectionHeading alignLeft>
                        {t("about.heading")}
                    </SectionHeading>
                    {paragraphs.map((p) => (
                        <Typography
                            key={p}
                            sx={{
                                color: colors.body,
                                textAlign: { xs: "center", lg: "left" },
                                mb: "1.2em",
                                fontSize: "1.15em",
                                lineHeight: "1.65em",
                            }}
                        >
                            {p}
                        </Typography>
                    ))}
                </Box>
                <Box
                    sx={{ width: { lg: "50%" }, pl: { lg: "4em" }, mb: "2em" }}
                >
                    <Box
                        component="img"
                        src={img960}
                        srcSet={`${img480} 480w, ${img960} 960w, ${img1280} 1280w`}
                        sizes="(min-width: 1024px) 480px, calc(100vw - 3em)"
                        width={1280}
                        height={855}
                        alt=""
                        sx={{
                            display: "block",
                            borderRadius: "4px",
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default About;
