import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";

export default function FormikForm(){
  const formik=useFormik({
      initialValues:{
          name:"",
          email:""
      },
      validationSchema:Yup.object({
        name:Yup.string()
          .max(15,"must be 15 characters or less.")
          .required("name must not be empty."),
        email:Yup.string()
          .email("please enter a valid email.")
          .required("email must not be empty.")
      }),
      onSubmit:(values,{resetForm})=>{
          console.log(values);
          resetForm();
      }
  });

  return(
      <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">your name</label>
          <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
          {formik.touched.name && formik.errors.name ? (
            <div id="nameError"> {formik.errors.name} </div>
          ) : null}
          <label htmlFor="email">your email</label>
          <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
          {formik.touched.email && formik.errors.email ? (
            <div id="emailError"> {formik.errors.email} </div>
          ) : null}
          <button type="submit">submit</button>
      </form>
  )    
}