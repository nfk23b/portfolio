import { Box, Typography } from "@mui/material";
import { colors } from "../theme";

const SectionHeading = ({ children, light = false, alignLeft = false }) => (
    <Box
        sx={{
            textAlign: { xs: "center", lg: alignLeft ? "left" : "center" },
            mb: "1em",
            "&::after": {
                background: light ? "#fff" : colors.line,
                content: '""',
                display: "inline-block",
                height: "1px",
                mt: "1.5em",
                width: "6em",
            },
        }}
    >
        <Typography
            variant="h3"
            sx={{
                fontSize: "2.25em",
                lineHeight: "1.35em",
                color: light ? "#fff" : colors.muted,
            }}
        >
            {children}
        </Typography>
    </Box>
);

export default SectionHeading;
