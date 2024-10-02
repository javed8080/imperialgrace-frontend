import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaCartPlus, FaHeart, FaSearch, FaUser } from 'react-icons/fa';
import './AppHeader.scss'


const AppHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [navItems, setNavItems] = useState([
        { name: 'Home', slug: '/', active: true },
        { name: 'Products', slug: '/products', active: false },
        { name: 'Browse for Shops', slug: '/shop', active: false },
        { name: 'Browse for Categories', slug: '/collections', active: false },
        { name: 'Setup My Business', slug: '/pricing', active: false },
        { name: 'Contact US', slug: '/contact-us', active: false },
    ]);

    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const updatedNavItems = navItems.map(item => ({
            ...item,
            active: item.slug === location.pathname,
        }));
        setNavItems(updatedNavItems);
    }, [location.pathname]);

  return (
    <>
      <div className='p-3 bg-primary text-white'>
        <h6 className='mb-0 text-center'>Exciting Offer</h6>
      </div>
      
      <Navbar bg="white" expand="lg" className='sticky-top'>
        <Container>
          <Navbar.Brand>
            <img
              src="https://th.bing.com/th/id/OIP.rDZhVvto_je6rLox0qGLcgHaHa?rs=1&pid=ImgDetMain"
              className='logo-top img-fluid bg-black d-block d-lg-none'
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navmenu" className="bg-white" />

          <Navbar.Collapse id="navmenu" className="justify-content-between top-menu mt-3 mt-lg-0 py-3">
            <img
              src="https://th.bing.com/th/id/OIP.rDZhVvto_je6rLox0qGLcgHaHa?rs=1&pid=ImgDetMain"
              className='logo-top img-fluid bg-black d-none d-lg-block'
              alt="Logo"
            />

            <Nav className="align-items-center gap-lg-4 gap-2 mb-4 mb-lg-0">
              {navItems.map(item => (
                <Nav.Item key={item.slug}>
                  <h6 className='mb-0'>
                    <Link
                      to={item.slug}
                      className={`nav-link p-0 ${item.active ? "active" : ""} ${navbar ? "text-white" : "text-black"}`}
                    >
                      {item.name}
                    </Link>
                  </h6>
                </Nav.Item>
              ))}
            </Nav>

            <div className='d-flex gap-3'>
              <Button variant="link" className="position-relative p-0" onClick={() => navigate('/login')}>
                <FaHeart size={25} className='text-primary' />
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  0
                </Badge>
              </Button>

              <FaSearch size={25} />

              <FaUser size={25} onClick={() => navigate('/login')} />

              <Button variant="link" className="position-relative p-0" onClick={() => navigate('/cart-page')}>
                <FaCartPlus size={25} className='text-primary' />
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  0
                </Badge>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppHeader