import { Box, Typography } from "@mui/material";

export default function GalleryCardDescription({description}) {
    return (
        <>
            <Box sx={{ overflow: 'hidden', height: "300px",
        overflowY: "scroll" }}>
                <Typography variant="body1">
                    {description}
                    </Typography>
            </Box>
        </>
    )
}