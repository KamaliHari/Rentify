import React, { useState } from 'react';
import axios from 'axios';

const PostProp = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    propertyType: '',
    location: '',
    size: '',
    bedrooms: '',
    bathrooms: '',
    amenities: '',
    nearbyFacilities: '',
    description: '',
    price: '',
    contactInfo: '',
    photos: [],
    floorPlan: '',
    propertyAge: '',
    legalInfo: '',
    specialFeatures: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const photosArray = [];
    for (let i = 0; i < files.length; i++) {
      photosArray.push(files[i]);
    }
    setPropertyDetails({ ...propertyDetails, photos: photosArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/submit-property', propertyDetails)
      .then(response => {
        console.log(response.data);
        alert('Property submitted successfully!');
        // Reset form fields
        setPropertyDetails({
          propertyType: '',
          location: '',
          size: '',
          bedrooms: '',
          bathrooms: '',
          amenities: '',
          nearbyFacilities: '',
          description: '',
          price: '',
          contactInfo: '',
          photos: [],
          floorPlan: '',
          propertyAge: '',
          legalInfo: '',
          specialFeatures: ''
        });
      })
      .catch(error => {
        console.error('Error submitting property:', error);
        alert('Error submitting property. Please try again later.');
      });
  };

  return (
    <div>
      <h2>Post Your Property</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Property Type:
          <input type="text" name="propertyType" value={propertyDetails.propertyType} onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={propertyDetails.location} onChange={handleChange} />
        </label>
        <label>
          Size:
          <input type="text" name="size" value={propertyDetails.size} onChange={handleChange} />
        </label>
        <label>
          Bedrooms:
          <input type="number" name="bedrooms" value={propertyDetails.bedrooms} onChange={handleChange} />
        </label>
        <label>
          Bathrooms:
          <input type="number" name="bathrooms" value={propertyDetails.bathrooms} onChange={handleChange} />
        </label>
        <label>
          Amenities:
          <textarea name="amenities" value={propertyDetails.amenities} onChange={handleChange}></textarea>
        </label>
        <label>
          Nearby Facilities:
          <textarea name="nearbyFacilities" value={propertyDetails.nearbyFacilities} onChange={handleChange}></textarea>
        </label>
        <label>
          Description:
          <textarea name="description" value={propertyDetails.description} onChange={handleChange}></textarea>
        </label>
        <label>
          Price:
          <input type="text" name="price" value={propertyDetails.price} onChange={handleChange} />
        </label>
        <label>
          Contact Info:
          <input type="text" name="contactInfo" value={propertyDetails.contactInfo} onChange={handleChange} />
        </label>
        <label>
          Photos:
          <input type="file" multiple onChange={handleFileChange} />
        </label>
        <label>
          Floor Plan:
          <input type="file" onChange={handleFileChange} />
        </label>
        <label>
          Property Age:
          <input type="text" name="propertyAge" value={propertyDetails.propertyAge} onChange={handleChange} />
        </label>
        <label>
          Legal Info:
          <textarea name="legalInfo" value={propertyDetails.legalInfo} onChange={handleChange}></textarea>
        </label>
        <label>
          Special Features:
          <textarea name="specialFeatures" value={propertyDetails.specialFeatures} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostProp
