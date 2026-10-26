import { Box, Chip, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import { colors } from "../theme";
import type { Job as JobData } from "../types";

const Job = ({ job }: { job: JobData }) => (
    <Box
        component="article"
        sx={{
            borderLeft: `3px solid ${colors.line}`,
            pl: { xs: "1em", md: "1.5em" },
            mb: "3em",
        }}
    >
        <Typography
            variant="h4"
            sx={{ fontSize: "1.5em", lineHeight: "1.4em", color: colors.muted }}
        >
            {job.company}
        </Typography>
        <Typography sx={{ fontSize: "1.1em", color: colors.body }}>
            {job.role}
        </Typography>
        <Typography sx={{ fontSize: "0.9em", color: "#888", mb: "1em" }}>
            {[job.period, job.location].filter(Boolean).join(" · ")}
        </Typography>
        {job.intro && (
            <Typography
                sx={{ color: colors.body, lineHeight: "1.65em", mb: "1em" }}
            >
                {job.intro}
            </Typography>
        )}
        {job.projects?.map((p) => (
            <Box key={p.name} sx={{ mb: "1em" }}>
                <Typography sx={{ fontWeight: 700, color: colors.muted }}>
                    {p.url ? (
                        <Link
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {p.name}
                        </Link>
                    ) : (
                        p.name
                    )}
                    {p.note && (
                        <Box component="span" sx={{ fontWeight: 300 }}>
                            {" — "}
                            {p.note}
                        </Box>
                    )}
                </Typography>
                <Box
                    component="ul"
                    sx={{ m: "0.4em 0 0", pl: "1.2em", color: colors.body }}
                >
                    {p.bullets.map((b) => (
                        <Box
                            component="li"
                            key={b}
                            sx={{ lineHeight: "1.55em", mb: "0.3em" }}
                        >
                            {b}
                        </Box>
                    ))}
                </Box>
            </Box>
        ))}
        {job.bullets && (
            <Box
                component="ul"
                sx={{ m: "0 0 1em", pl: "1.2em", color: colors.body }}
            >
                {job.bullets.map((b) => (
                    <Box
                        component="li"
                        key={b}
                        sx={{ lineHeight: "1.55em", mb: "0.3em" }}
                    >
                        {b}
                    </Box>
                ))}
            </Box>
        )}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.4em" }}>
            {job.stack.map((s) => (
                <Chip key={s} label={s} size="small" variant="outlined" />
            ))}
        </Box>
    </Box>
);

const Experience = () => {
    const { t } = useTranslation();
    const jobs: JobData[] = t("experience.jobs", { returnObjects: true });
    const certs = t("experience.certifications", { returnObjects: true });

    return (
        <Box
            component="section"
            id="experience"
            sx={{
                p: {
                    xs: "2em 1.5em 0.1em",
                    sm: "3em 2.5em 2em",
                    lg: "4em 2em 2em",
                    xl: "6em 0 4em",
                },
            }}
        >
            <Box sx={{ maxWidth: "900px", mx: "auto" }}>
                <SectionHeading>{t("experience.heading")}</SectionHeading>
                <Box sx={{ mt: "3em" }}>
                    {jobs.map((job) => (
                        <Job key={job.company} job={job} />
                    ))}
                </Box>
                <SectionHeading>
                    {t("experience.certificationsHeading")}
                </SectionHeading>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5em",
                        justifyContent: "center",
                        mb: "3em",
                    }}
                >
                    {certs.map((c) => (
                        <Chip
                            key={c}
                            label={c}
                            color="primary"
                            variant="outlined"
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Experience;
