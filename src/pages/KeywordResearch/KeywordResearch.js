import React, { useState } from "react";
import SideBar from "../../components/SideBar/Sidebar";
import Chart from "../../components/Chart.jsx";
import "./styles.css";
import { Card, CardHeader, CardBody, CardTitle, Button, CardFooter, CardText, Col, Row } from "reactstrap"

const KeywordResearch = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);




  return (<div className="d-flex flex-row">
    <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
    <div className="d-flex flex-col">
      <Row sm="12" className="m-5 h2">Keyword Research</Row>
      <Row className="d-flex m-5">
        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">
              Perofrmance:
            </CardTitle>
            <div className="d-flex flex-row">
              <CardText className="m-2">
                26% income.
              </CardText>
              <div className = "m-1" style={{ borderLeft: '1px solid grey', height: '50px' }}></div>
              <CardText className="m-2">
                26% income.
              </CardText>
            </div>
            <Button>
             Check reasons
            </Button>
          </Card>
        </Col>
        <Col sm="8">
          <Card body>
            <CardTitle tag="h5">
              Some stats in graph
            </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Chart/>

          </Card>
        </Col>
      </Row>
    </div>
  </div>
  );
};

export default KeywordResearch;