import { Navbar, Container } from "react-bootstrap";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

interface NavProps extends RouteComponentProps {
  title: string;
}

const MyNav = ({ title, location }: NavProps) => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>{title}</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  </>
);

export default withRouter(MyNav);
