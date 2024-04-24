import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <div className="d-flex gap-2">
              <Button variant="outline-primary">Search</Button>
            </div>
          </Form>
          <div className="logo">
            <a class="site-branding" href="/">
              <img
                src="//vimalclothing.com/cdn/shop/files/vimal_clothing_c0eafb7c-4d96-4c7d-9f4d-fe5cbc38cc92.png?v=1706553278
              &amp;width=440"
                alt=""
                srcset="//vimalclothing.com/cdn/shop/files/vimal_clothing_c0eafb7c-4d96-4c7d-9f4d-fe5cbc38cc92.png?v=1706553278
              &amp;width=110 110w, //vimalclothing.com/cdn/shop/files/vimal_clothing_c0eafb7c-4d96-4c7d-9f4d-fe5cbc38cc92.png?v=1706553278
              &amp;width=352 352w"
                width="110"
                loading="lazy"
                class="site-branding-image"
              />
            </a>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="d-flex gap-2">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Men" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="men-product">T-shirt</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Sweat shirt
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Oversizes shirt
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    Track suits
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action7">Gym Vests</NavDropdown.Item>
                  <NavDropdown.Item href="#action8">
                    Co-ord sets
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action9">
                    Night suits
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action10">
                    Oversizes co-ord sets
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Women" id="navbarScrollingDropdown">
                <NavDropdown.Item href="women-product">
                    Women T-shirt
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action2">
                    Women Tank Top
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">
                    Women Sweat shirt
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Women Capri
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Women Shorts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    Women Trackpants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action7">
                    Women Thermal Top
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action8">
                    Women Thermal Bootom
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action9">Women Set</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Kids" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">
                    Kids T-shirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action2">
                    Kids Shorts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Kids Trackpants
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Kids Sweat suits
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Kids Top & Bottom
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    Kids Track suits
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action7">
                    Kids Thermal
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="link d-flex gap-4">
                  <Nav.Link href="/track-order">Track Your Order</Nav.Link>
                  <Nav.Link href="/sell-our-product">Sell Our Product</Nav.Link>
                </div>
              </div>
              <div className="d-flex gap-2">
                <FontAwesomeIcon icon={faCartShopping} className="pt-3" size="1.5x"/>
                <Nav.Link variant="outline-primary" href="/sign-in">Sign-In</Nav.Link>
                <Nav.Link variant="outline-primary" href="/sign-up">Sign-Up</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;