import React, { Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
const Landing = () => {
    return (
        <Fragment>
            <Row className="try">
                <Col lg={8} md={6} sm={4} xs={2} className="red">1</Col>
                <Col className="red">2</Col>
                <Col className="red">3</Col>
            </Row>
        </Fragment>
    )
}

export default Landing
