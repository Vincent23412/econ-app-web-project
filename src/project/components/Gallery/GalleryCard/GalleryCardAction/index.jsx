import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Fade, Link, Rating, Stack } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function GalleryCardAction({github_link, group}) {

    const [ratingOpen, setRatingOpen] = useState(false)

    const toggleRatingOpen = () => {
        setRatingOpen(ratingOpen => !ratingOpen)
    }

    return (
        <>
            <Stack direction="row" spacing={2}
                sx={{ justifyContent: "space-between" }}>
                <Link href={github_link} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </Link>
                <ProjectRating ratingOpen={ratingOpen} group={group} />
                <ActionControl ratingOpen={ratingOpen} onClick={toggleRatingOpen} />
            </Stack>
        </>
    )
}

// transition: fade, https://mui.com/material-ui/transitions/#fade
function ProjectRating({ ratingOpen = false, group }) {

    const [rate, setRate] = useState(null)

    window.ratings[group] = rate

    return (
        <>
            <Box>
                <Fade in={ratingOpen} timeout={300}>
                    <Rating name="project-rating" value={rate} max={5}
                    onChange = {(e, v)=>{
                        setRate(v)
                    }}
                    />
                </Fade>
            </Box>
        </>
    )
}

function ActionControl({ ratingOpen = false, onClick }) {

    const actionControl = ratingOpen ? <CloseIcon onClick={onClick}/> : <GradeIcon onClick={onClick}/>

    return (
        <>
            {actionControl}
        </>
    )
}