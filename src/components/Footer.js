import { Box } from '@mui/system';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../images/logo2.jpg'

const Footer = () => {

	return (
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'center' ,paddingTop:20 }}>
            <p>Desarrollado por Ezequiel Valverde</p>
        </Box>
	);
};

export default Footer;