import * as React from 'react';
import Box from '@mui/material/Box';
import discord from './Images/discord.svg'
import email from './Images/email.svg'
import instagram from './Images/instagram.svg'
import linkedin from './Images/linkedin.svg'


export default function Footer() {
  return (
    <Box id="footer" sx={{backgroundColor: '#041129', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', boxShadow: '0px -5px 5px -5px rgba(0, 0, 0, 0.75)'}}>
    <Box sx={{paddingTop: 2, paddingBottom: 2}}><a href="mailto:bursa@ucsd.edu"><img src={email} alt='email' height='40px'/></a></Box>
    <Box><a href="https://www.instagram.com/bursaucsd/" target='_blank'><img src={instagram} alt='instagram' height='40px'/></a></Box>
    <Box><a href="https://www.linkedin.com/company/bursa-ucsd" target='_blank'><img src={linkedin} alt='email' height='40px'/></a></Box>
    <Box><a href="https://discord.gg/S9A4DQCw" target='blank'><img src={discord} alt='discord' height='40px'/></a></Box>
    </Box>
  );
}


