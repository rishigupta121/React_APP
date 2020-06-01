import React, { Component } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { CustomForm } from '../components/CustomForm';
import CustomButton from '../components/CustomButton';
type loginProps = {};
export default class Login extends Component<{}, loginProps> {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Form>
                <CustomForm
                  controlId={'formBasicEmail'}
                  formLabel={'Email'}
                  formControlType={'email'}
                  formControlPlaceholder={'Enter Email'}
                />
                <CustomButton />
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
