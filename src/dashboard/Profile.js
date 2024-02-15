import React, {useEffect}from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import  FormCheck  from 'react-bootstrap/FormCheck';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Field } from 'formik';
import * as formik from 'formik';
import * as yup from 'yup';
import { UserAuth } from '../context/context'
import { collection, query, where ,doc, setDoc, onSnapshot,getDocs } from "firebase/firestore";
import { db } from '../context/firebase';
import './profile.css'
const Profile = () => {
  const { Formik } = formik;
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().required(),
    number: yup.string().required().min(10, 'enter a valid number'),
    address: yup.string().required(),
    country: yup.string().required(),
    dob: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  const { user} = UserAuth();
const [data, setData] = useState(null)


//fetch data
useEffect(() => {
  if (user) {
    //When the query snapshot changes (new data is added), 
   // the onSnapshot callback function is called. If the query snapshot is not empty, 
   // we update the state with the data from the first document in the snapshot.

    const q = query(collection(db, 'users'), where('userID', '==', user.uid));

    //The unsubscribe function returned by onSnapshot is used to 
    //remove the listener when the component unmounts, preventing memory leaks.

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        
        setData(doc.data());

       
      }
    });

    return () => {
      unsubscribe();
    };
  }
}, []);
  return (
    <Tabs
    defaultActiveKey="Personal Settings"
    id="justify-tab-example"
    className="mb-3"
    justify
    
  >
    <Tab eventKey="Personal Settings" title={"Personal Settings"} >
      <div className='dash-in-singles' >
      
      <Formik
      validationSchema={schema}
      onSubmit={() => console.log("HEllo*************")}
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
                readOnly
                value={data && data.firstname + " "+ data.lastname}
                placeholder='enter your full name'
                onChange={handleChange}
             

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
                readOnly
                placeholder='enter your email'
                value={data && data.email}
                onChange={handleChange}
                

              />

<Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Phone number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control className="numberInput"
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
                readOnly
                value={data && data.country}
                onChange={handleChange}
                
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
          <Button className="prof-button" type="submit">Update Profile</Button>
        </Form>
      )}
    </Formik>

</div>
    </Tab>
    <Tab eventKey="Withdrawal Settings" 
    title={"Withdrawal Settings"}
    
    >
     
       <Formik
      validationSchema={schema}
      onSubmit={() => console.log("Hi*************")}
      initialValues={{
        bankName: '',
        accountName: '',
        accountNumber: '',
        swift: '',
        bitcoin: '',
        eth: '',
        lite:'',




        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Bank name</Form.Label>
              <Form.Control
                type="text"
                name="bankName"
                value={values.bankName}
                onChange={handleChange}
                isInvalid={!!errors.bankName}

              />
              <Form.Control.Feedback type="invalid">
                  {errors.bankName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Account Name</Form.Label>
              <Form.Control
                type="text"
                name="accountName"
                value={values.accountName}
                onChange={handleChange}
                isInvalid={!!errors.accountName}

              />

<Form.Control.Feedback type="invalid">
                  {errors.accountName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Account number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control className="numberInput"
                  type="number"
                  placeholder="enter your account number"
                  aria-describedby="inputGroupPrepend"
                  name="number"
                  value={values.accountNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.accountNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.accountNumber}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Swift Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="swift code"
                name="swift"
                value={values.swift}
                onChange={handleChange}
                isInvalid={!!errors.swift}
              />

              <Form.Control.Feedback type="invalid">
                {errors.swift}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik04">
              <Form.Label>Bitcoin</Form.Label>
              <Form.Control
                type="text"
                placeholder="bitcoin address"
                name="bitcoin"
                value={values.bitcoin}
                onChange={handleChange}
                isInvalid={!!errors.bitcoin}
              />
              <Form.Control.Feedback type="invalid">
                {errors.bitcoin}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik05">
              <Form.Label>Ethereum</Form.Label>
              <Form.Control
                type="text"
                placeholder="ethereum"
                name="eth"
                value={values.eth}
                onChange={handleChange}
                isInvalid={!!errors.eth}
              />

              <Form.Control.Feedback type="invalid">
                {errors.eth}
              </Form.Control.Feedback>
            </Form.Group>

 <Form.Group as={Col} md="6" controlId="validationFormik06" className="mt-3">
              <Form.Label>Lite Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="lite"
                name="lite"
                value={values.lite}
                onChange={handleChange}
                isInvalid={!!errors.lite}
              />

              <Form.Control.Feedback type="invalid">
                {errors.lite}
              </Form.Control.Feedback>
            </Form.Group>


          </Row>
        
          <Button className="prof-button" type="submit">Update Profile</Button>
        </Form>
      )}
    </Formik>


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
     <div className='radio-in'>
     <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values); // Handle form submission here
      }}
      initialValues={{
        pair1: '',
        pair2: '',
        pair3: '',
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <h2>Send confirmation OTP to my email when withdrawing my funds.</h2>
          <Field name="pair1">
            {({ field }) => (
              <>
                <Form.Check
                inline

                  type="radio"
                  label="Yes"
                  value="yes"
                  {...field}
                  id="pair1-yes"
                  isInvalid={errors.pair1 && touched.pair1}
                />
                <Form.Check
                inline

                  type="radio"
                  label="No"
                  value="no"
                  {...field}
                  id="pair1-no"
                  isInvalid={errors.pair1 && touched.pair1}
                />
              </>
            )}
          </Field>
          {errors.pair1 && touched.pair1 && (
            <div className="invalid-feedback">{errors.pair1}</div>
          )}

          <h2>Send me email when i get profit.</h2>
          <Field name="pair2">
            {({ field }) => (
              <>
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="yes"
                inline
                  {...field}
                  id="pair2-yes"
                  isInvalid={errors.pair2 && touched.pair2}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="no"
                  {...field}
                  id="pair2-no"
                inline
                  isInvalid={errors.pair2 && touched.pair2}
                />
              </>
            )}
          </Field>
          {errors.pair2 && touched.pair2 && (
            <div className="invalid-feedback">{errors.pair2}</div>
          )}

          <h2>Send me email when my investment plan expires.</h2>
          <Field name="pair3">
            {({ field }) => (
              <>
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="yes"
                  {...field}
                  id="pair3-yes"
                  isInvalid={errors.pair3 && touched.pair3}
                />
                <Form.Check
                

                  type="radio"
                  label="No"
                  value="no"
                  {...field}
                  id="pair3-no"
                  isInvalid={errors.pair3 && touched.pair3}
                />
              </>
            )}
          </Field>
          {errors.pair3 && touched.pair3 && (
            <div className="invalid-feedback">{errors.pair3}</div>
          )}

<Button  className="prof-button" type="submit">Save</Button>

        </Form>
      )}
    </Formik>
</div>

    </Tab>
    
  </Tabs>
  )
}

export default Profile