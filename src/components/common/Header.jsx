import React from "react";
import {Layout, Row, Col, Image, Typography} from "antd";

import blank from "../../assets/blank.png";

const {Header} = Layout;
const {Title} = Typography;

const SharedHeader = () => {
    return (
            <Header style={{background: "white", marginTop: 25}}>
                <Row gutter={16} justify="center">
                    <Col>
                        <Image preview={false} width={60} src={blank}/>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Title level={3} style={{fontWeight: "bold"}}>Welcome</Title>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
    );
}

export default SharedHeader;