import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import * as formik from 'formik';
import * as yup from 'yup';

import './profile.css'
const Profile = () => {
  const { Formik } = formik;
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().required(),
    number: yup.string().required(),
    address: yup.string().required(),
    country: yup.string().required(),
    dob: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });



  return (
    <Tabs
    defaultActiveKey="Personal Settings"
    id="justify-tab-example"
    className="mb-3"
    justify
    
  >
    <Tab eventKey="Personal Settings" title={"Personal Settings"} >
      <div className='dash-in-single' >
      
      <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        fullName: '',
        email: '',
        number: '',
        address: '',
        country: '',
        dob: '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isValid={touched.fullName && !errors.fullName}
                isInvalid={!!errors.fullName}

              />
              <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}

              />

<Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Phone number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  placeholder="Phone number"
                  aria-describedby="inputGroupPrepend"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  isInvalid={!!errors.number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.number}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />

              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                name="country"
                value={values.country}
                onChange={handleChange}
                isInvalid={!!errors.country}
              />
              <Form.Control.Feedback type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of Birth"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                isInvalid={!!errors.dob}
              />

              <Form.Control.Feedback type="invalid">
                {errors.dob}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>

</div>
    </Tab>
    <Tab eventKey="Withdrawal Settings" 
    title={"Withdrawal Settings"}
    
    >
     
     <div className='dash-in-single' >
      

      <table>
            <thead >
              <tr style={{textAlign:'center'}}>
                <th style={{width:'20%'}}>Amount Requested</th>
                <th style={{width:'20%'}}>Amount + charges</th>
                <th style={{width:'20%'}}> Receiving mode</th>
                <th style={{width:'20%'}}>Status</th>
                <th style={{width:'20%'}}>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map(item => (
                <tr key={item.id}>
                  <td style={{width:'15%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.name}</td>
                  <td style={{width:'35%'}}>{item.age}</td>
                </tr>
              ))} */}
            <span className='nunito' style={{fontSize:"12px", marginTop:"20px", textAlign:'center'}}>No record yet</span>
      
            </tbody>
          </table>
      </div>


    </Tab>
    <Tab eventKey="Password/Security" 
    title={"Password/Security"}
    >
     
     <div className='dash-in-single' >
      

      <table>
            <thead >
              <tr style={{textAlign:'center'}}>
                <th style={{width:'25%'}}>Amount</th>
                <th style={{width:'25%'}}>Type</th>
                <th style={{width:'25%'}}>Plan / Naration</th>
                <th style={{width:'25%'}}>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map(item => (
                <tr key={item.id}>
                  <td style={{width:'15%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.name}</td>
                  <td style={{width:'35%'}}>{item.age}</td>
                </tr>
              ))} */}
            <span className='nunito' style={{fontSize:"12px", marginTop:"20px", textAlign:'center'}}>No record yet</span>
      
            </tbody>
          </table>
      </div>


    </Tab>

    <Tab eventKey="Other Settings" 
    title={"Other Settings"}
    >
     
     <div className='dash-in-single' >
      

      <table>
            <thead >
              <tr style={{textAlign:'center'}}>
                <th style={{width:'25%'}}>Amount</th>
                <th style={{width:'25%'}}>Type</th>
                <th style={{width:'25%'}}>Plan / Naration</th>
                <th style={{width:'25%'}}>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map(item => (
                <tr key={item.id}>
                  <td style={{width:'15%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.name}</td>
                  <td style={{width:'35%'}}>{item.age}</td>
                </tr>
              ))} */}
            <span className='nunito' style={{fontSize:"12px", marginTop:"20px", textAlign:'center'}}>No record yet</span>
      
            </tbody>
          </table>
      </div>


    </Tab>
    
  </Tabs>
  )
}

export default Profile