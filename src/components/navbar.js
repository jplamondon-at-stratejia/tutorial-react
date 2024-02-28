import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router , NavLink
} from "react-router-dom";
import { Redirect } from 'react-router-dom';




export const NavBar = () => {
    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, setScrolled ] = useState(false);

    const emailAddress = 'sumanthnagabhairu@gmail.com';
    const handleButtonClick = () => {
        window.location.href = `mailto:${emailAddress}`; 
    };
    

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://github.com/sumanth2727"target='_blank' className="navbar-link">Resume</Nav.Link>
                    </Nav>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            <Nav.Link href="https://stevens0-my.sharepoint.com/:b:/g/personal/vnagabha_stevens_edu/EWvT48FuUx9KuhGRvPkTP3IBF5sTkSkjljdEmC07SOGXfg?e=n4oQ8G" target='_blank' className="navbar-link">Resume</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='https://www.linkedin.com/in/sumanthnagabhairu//'><img src={navIcon1} alt='LinkedIn' /></a>
                                <a href='https://leetcode.com/SumanthN27/'><img src={navIcon2} alt='Leetcode' /></a>
                                <a href=''><img src={navIcon3} alt='Instagram' /></a>
                            </div>
                            <button className="button" onClick={handleButtonClick}>Send Email</button>

                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}
