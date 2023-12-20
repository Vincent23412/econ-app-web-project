import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Card, Fade, Link, Rating, Stack, Typography } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function Button({ word, color, link }) {
    return (
        <div style={{
            width: '200px', 
            height: '50px', 
            backgroundColor: color, // Use the color prop
            color: 'white', 
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Add shadow effect
        }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
                <a href={link}>
                    {word}
                </a>
            </Typography>
        </div>
    );
}
