import React,{useState} from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import '../App.css';

const Navbars = () => {
    // const [isActive, setActive] = useState("false");

    // const myRef= React.useRef(null);
    
    // const handleScroll = () =>{
    //     // if($(.nav).scrollTop>0){
    //     //     setActive(!isActive);
    //     // }
    //     if(myRef.scrollTop>0){
    //         setActive(true)
    //     }else{
    //         setActive(false)
    //     }
    // }

    // React.useEffect(()=>{
    //     window.addEventListener('scroll', handleScroll);
    // },[])

    return (
        <Navbar  fixed="top" collapseOnSelect expand="lg" variant="light">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto ">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navbars;
