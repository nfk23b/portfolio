import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { useTranslation } from "react-i18next";
import overlay2 from "../assets/img/overlay2.png";
import overlay4 from "../assets/img/overlay4.svg";

type Contact = {
    href: string;
    Icon: typeof GitHubIcon;
    external?: boolean;
    download?: boolean;
} & (
    | { label: string; labelKey?: never }
    | { labelKey: "footer.cv"; label?: never }
);

const contacts: Contact[] = [
    {
        href: "https://github.com/nfk23b",
        label: "github.com/nfk23b",
        Icon: GitHubIcon,
        external: true,
    },
    {
        href: "https://www.linkedin.com/in/kirill-ivanov-9418a2196",
        label: "LinkedIn",
        Icon: LinkedInIcon,
        external: true,
    },
    {
        href: "mailto:nfk23b@gmail.com",
        label: "nfk23b@gmail.com",
        Icon: EmailIcon,
    },
    {
        href: `${import.meta.env.BASE_URL}Kirill_Ivanov_CV.pdf`,
        labelKey: "footer.cv",
        Icon: DownloadIcon,
        download: true,
    },
];

const Footer = () => {
    const { t } = useTranslation();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#4686a0",
                color: "rgba(255, 255, 255, 0.85)",
                backgroundImage: `url(${overlay2}), url(${overlay4}), linear-gradient(45deg, #4361c2, #4fa49a 50%, #9dc66b 95%)`,
                backgroundPosition: "top left, center center, center center",
                backgroundSize: "auto, cover, cover",
                backgroundAttachment: {
                    xs: "scroll",
                    lg: "fixed, fixed, fixed",
                },
                textAlign: "center",
                p: {
                    xs: "2em 1.5em",
                    sm: "3em 1.5em",
                    md: "4em 0",
                    lg: "6em 0",
                },
            }}
        >
            {contacts.map(
                ({ href, label, labelKey, Icon, external, download }) => (
                    <Box key={href} sx={{ mb: "1em" }}>
                        <Link
                            href={href}
                            {...(external && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            })}
                            {...(download && { download: true })}
                            underline="hover"
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5em",
                                color: "inherit",
                            }}
                        >
                            <Icon />
                            <Typography component="span">
                                {labelKey ? t(labelKey) : label}
                            </Typography>
                        </Link>
                    </Box>
                ),
            )}
        </Box>
    );
};

export default Footer;
