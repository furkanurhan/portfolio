import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';
import logo from '../assets/images/profile.jpg'

const Navi = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="header">
      <Navbar {...args}> 
        <NavbarBrand href="/" className='d-flex align-items-center'>
          <img
            alt="logo"
            src={logo}
            style={{
              height: 80,
              width: 80,
              marginRight: 8,
            }}
            className="rounded-circle me-3"
          />
          <div>
            <p className='title mb-1 fw-bold'>Furkan Urhan</p>
            <p className='subtitle mb-1'>Developer</p>
            <div>
              <a className='pe-1' style={{color: 'inherit'}} target='_blank' rel='noreferrer' aria-label='linkedin profile link' href="https://www.linkedin.com/in/furkan-urhan-0aa454b1/">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"></path></svg>
              </a>
              <a className='ps-1 pe-1' style={{color: 'inherit'}} target='_blank' rel='noreferrer' aria-label='github profile link' href="https://github.com/furkanurhan">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
              </a>
              <a className='ps-1' style={{color: 'inherit'}} target='_blank' rel='noreferrer' aria-label='hackerrank profile link' href="https://www.hackerrank.com/urhanfurkan35?hr_r=1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256s192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69c.87-.87 6.26-1.48 17.55-1.83c0-26.23.59-68.59.94-86.32c0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88c.23 4.54-1.58 6-5.74 5.94c-10.13 0-20.27-.11-30.41-.08c-4.1 0-5.87-1.53-5.74-6.11c.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84c-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64c-.1-3.39.95-5.17 4.21-5.2c11.07-.08 22.15-.13 33.23-.06c3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84c2.88 2.91-33.62 38.69-37.58 38.69z"></path></svg>
              </a>
            </div>
          </div>
        </NavbarBrand>

        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/">
               <p className='fs-5 mb-1 me-4'>Home</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cv">
                <p className='fs-5 mb-1 me-4'>CV</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                <p className='fs-5 mb-1'>Contact</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navi
