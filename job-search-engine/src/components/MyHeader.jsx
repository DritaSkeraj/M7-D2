import { Navbar } from "react-bootstrap";
import octocat from "./Octocat (1).png";

export default function MyHeader() {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img src={octocat} style={{ width: "60px", height: "60px" }} />
          Github Jobs
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end mr-3">
          <Navbar.Text>
            Favorites 
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
