import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Form = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    job: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData); 
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", job: "" }); 
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6">{initialData ? "Edit Contact" : "Add New Contact"}</Typography>
      <TextField name="firstName" label="First Name" fullWidth margin="normal" value={form.firstName} onChange={handleChange}/>
      <TextField name="lastName" label="Last Name" fullWidth margin="normal" value={form.lastName} onChange={handleChange}/>
      <TextField name="email" label="Email" type="email" fullWidth margin="normal" value={form.email} onChange={handleChange}/>
      <TextField name="phone" label="Phone Number" fullWidth margin="normal" value={form.phone} onChange={handleChange}/>
      <TextField name="company" label="Company" fullWidth margin="normal" value={form.company} onChange={handleChange} />
      <TextField name="job" label="Job Title" fullWidth margin="normal" value={form.job} onChange={handleChange}/>
      <Button type="submit" variant="contained" xs={{ mt: 2 }}>{initialData ? "Update" : "Save"}</Button>
    </Box>
  );
};

export default Form;
