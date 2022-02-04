import { Navbar,  Container} from "react-bootstrap";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

interface NavProps extends RouteComponentProps {
  title: string;
}

const MyNav = ({ title, location }: NavProps) => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Row className="d-flex justify-content-center  ">
          <Col sm={12} md={8} lg={4}> */}
        <Link to="/">
          <Navbar.Brand>{title}</Navbar.Brand>
        </Link>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/">
                  <div className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</div>
                </Link>

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> 
              </Nav>
            </Navbar.Collapse> */}
        {/* </Col>
        </Row> */}
      </Container>
    </Navbar>
  </>
);

export default withRouter(MyNav);
