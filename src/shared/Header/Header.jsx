import React, { useContext } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import logo from '../../assets/logoS.jpeg'
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useInstructors from '../../hooks/useInstructors';

const Header = () => {
     const { user, logOut } = useContext(AuthContext)
     const [isAdmin] = useAdmin();
     const [isInstructors] = useInstructors();
     const navigate = useNavigate();

     // logOut part start
     const handelLogOut = () => {
          logOut()
               .then(() => {
                    // Sign-out successful.
               })
               .catch((error) => {
                    // An error happened.
               });
     }
     // logOut part end

     return (
          <div className='fixed-top'>
               <Navbar bg="light" expand="lg" className=' mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4 d-flex align-items-center'>
                              <img className='logoStyle' src="https://img.freepik.com/free-vector/music-festival-text-with-musical-instruments_1308-122863.jpg?w=740&t=st=1686073180~exp=1686073780~hmac=0a444c1607f36c8ae5b92991aae02531dea22daa8d8342e0680d1751fd1bf2cd" alt="" />
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="mx-auto my-2 my-lg-0 fw-semibold"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <ActiveLink to="/">Home</ActiveLink>
                                   <ActiveLink to="/instructors">Instructors</ActiveLink>
                                   <ActiveLink to="/classes">Classes</ActiveLink>
                                   {
                                        (user?.email) && <>
                                             {
                                                  isAdmin && <ActiveLink to="/dashboard/manageClasses">Dashboard</ActiveLink>
                                             }
                                             {
                                                  isInstructors && <ActiveLink to="/dashboard/AddClass">Dashboard</ActiveLink>
                                             }
                                             {
                                                  !(isAdmin ||isInstructors) && <ActiveLink to="/dashboard/selected">Dashboard</ActiveLink>
                                             }
                                        </>

                                   }

                              </Nav>
                              <Form className=' d-flex fw-semibold'>
                                   {
                                        user ? <div>
                                             <img title={user.displayName} className='imgStyle me-3' src={user.photoURL} alt="" />
                                             <Button onClick={handelLogOut} variant="info" className='py-2'>Log Out</Button>
                                        </div> : <ActiveLink to="/login">Login</ActiveLink>
                                   }
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;