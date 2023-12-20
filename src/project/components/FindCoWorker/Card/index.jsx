import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Card, Fade, Link, Rating, Stack, Typography } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';







export default function FindCoWorkerCard({need_people, total_people, poster, email, event}){
    return(
        <>
            <Card sx={{ width: "250px", height: "300px", backgroundColor: 'red'}}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} align="center">
                        {event}
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,  opacity: 0.5}} align="center"> 
                        need people
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,  opacity: 0.5 }} align="center">
                        目前{total_people}人，總共{need_people}人
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
                        <strong>
                            Contact {poster}
                        </strong>
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
                        <Link href="mailto:fdaa@gmail.com" color="inherit" underline="hover">
                            {email}
                        </Link>
                    </Typography>

                </Stack>
            </Card>
        </>
    )
}
