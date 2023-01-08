import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './nav.css'
import nav from '../image/joker.png'
import Profile from '../profile/profile';
import Badge from 'react-bootstrap/Badge';
import { useEffect } from 'react';
import {selectCount} from '../cart/counter'
import { useDispatch, useSelector } from 'react-redux'
import { item } from '../cart/cartRedux'
import {useHistory} from 'react-router-dom'
import {gettingValue} from "../home/homeSearchLogics"
function NavScrollExample({name}) {
const count = useSelector(item)
// const dispatch = useDispatch(gettingValue)
const history = useHistory();

function routing(typed)
{
    if(typed == "mens")
{
  history.push("/items?q=mens")
  typed = ""
}
else if(typed == "womens")
{
  history.push("/items?q=womens")
  typed = ""
}
else if(typed == "kids")
{
  history.push("/items?q=kids")
  typed = ""
}
else if(typed == "electronics")
{
  history.push("/items?q=electronics")
  typed = ""
}
}


    return (
        <Navbar bg="dark" expand="lg" >
            <Container fluid  >
                <Navbar.Brand >
                    <img src={nav} height="50" width="50" />
                </Navbar.Brand>

                <Form className="d-flex change" >
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => {
                            routing(e.target.value)
                            // dispatch(gettingValue(e.target.value))
                            name(e.target.value)  
                        }}
                    />
                    {/* <Button variant="outline-primary text-white">Search</Button> */}
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 nav-bg icon"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='pe-5'>
                            <span class="material-symbols-outlined">
                            <Link to="/home">home</Link>  
                            </span>
                        </Nav.Link>
                        <Nav.Link  className='pe-5'>
                            <span 
                            class="material-symbols-outlined">
                                <Link to="/cart">shopping_cart</Link>
                                </span>
                                <Badge bg="secondary">{count.length==0?'':count.length}</Badge>
                        </Nav.Link>
                        <Nav.Link className='pe-5'>
                            <Profile />
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;