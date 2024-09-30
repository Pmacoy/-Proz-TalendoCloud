import React, { useState } from 'react';
import axios from 'axios';

const EntityForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, coverImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('type', formData.type);
    formDataObj.append('description', formData.description);
    formDataObj.append('coverImage', formData.coverImage);

    await axios.post('/api/entities', formDataObj);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleInputChange} placeholder="Nome" required />
      <input type="text" name="type" onChange={handleInputChange} placeholder="Tipo" required />
      <textarea name="description" onChange={handleInputChange} placeholder="Descrição"></textarea>
      <input type="file" name="coverImage" onChange={handleFileChange} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default EntityForm;
