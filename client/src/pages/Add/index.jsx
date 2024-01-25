import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import "./index.scss"
import UseFetchData from '../../hooks/UseFetchData';

const Add = () => {
  const {data, setData, refetchData} = UseFetchData()
  const url = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

  const handleDeleteItem = async (productId) => {
    await axios.delete(`http://localhost:3000/${productId}`)
    refetchData()
  }
  return (
    <>
    <Helmet>
      <title>Add</title>
    </Helmet>
    <Formik
      initialValues={{ name: '', price: '', discountPrice: '', image: '' }}
      validationSchema={Yup.object({
        name: Yup.string().max(25, 'Must be 15 characters or less').required('Required'),
        price: Yup.number().min(1).required('Required'),
        discountPrice: Yup.number().min(1).required('Required'),
        image: Yup.string().matches(url).required('Required'),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setTimeout(async () => {
          await axios.post("http://localhost:3000/", values)
          resetForm()
        }, 400);
      }}
    >
      <Form>
        <Field name="name" type="text" placeholder="Name" />
        <ErrorMessage name="name" />

        <Field name="price" type="text" placeholder="Price" />
        <ErrorMessage name="price" />

        <Field name="discountPrice" type="text" placeholder="DiscountPrice" />
        <ErrorMessage name="discountPrice" />

        <Field name="image" type="text" placeholder="Image" />
        <ErrorMessage name="image" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>

    <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
          <td>DiscountPrice</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
            data && data.map((item) => {
              return (
                <tr key={item._id}>
                  <td className='image'><img src={item.image} alt="" /></td>
                  <td><h3>{item.name}</h3></td>
                  <td><span>${item.price}.00</span></td>
                  <td><span>${item.discountPrice}.00</span></td>
                  <td className='btn'><button onClick={() =>handleDeleteItem(item._id)}>Delete</button></td>
                </tr>
              )
            })
        }
      </tbody>
    </table>
    </>
  );
};

export default Add