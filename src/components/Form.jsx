import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Party Booking',
    date: '',
    time: '',
    people: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to a server, API, or show a toast
    console.log('Submitted data:', formData);
    alert('Booking submitted successfully!');
    // Optionally reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Party Booking',
      date: '',
      time: '',
      people: '',
      address: '',
      message: '',
    });
  };

  return (
    <section className="catering-service-area p-70">
      <div className="container">
        <div className="title-box text-center" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <h3><span><img src="/images/bibimbap.png" alt="" /></span> Our Catering Services <span><img src="/images/bibimbap.png" alt="" /></span></h3>
          <h5>Book your Service Form</h5>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="catering-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-lg-6 col-6">
                    <label>Your name</label>
                    <input type="text" className="form-control" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                  </div>
                  <div className="form-group col-lg-6 col-6">
                    <label>Your Email</label>
                    <input type="email" className="form-control" name="email" required value={formData.email} onChange={handleChange} placeholder="info@gmail.com" />
                  </div>
                  <div className="form-group col-lg-4 col-6">
                    <label>Contact Details</label>
                    <input type="tel" className="form-control" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone number" />
                  </div>
                  <div className="form-group col-lg-4 col-6">
                    <label>Service Type</label>
                    <select className="form-select form-control" name="service" value={formData.service} onChange={handleChange}>
                      <option>Party Booking</option>
                      <option>Birthday Booking</option>
                      <option>Reception Booking</option>
                      <option>Marriage Booking</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 col-4 col-md-6">
                    <label>Choose Date</label>
                    <input type="date" className="form-control" name="date" required value={formData.date} onChange={handleChange} />
                  </div>
                  <div className="form-group col-lg-4 col-4 col-md-6">
                    <label>Choose Time</label>
                    <input type="time" className="form-control" name="time" required value={formData.time} onChange={handleChange} />
                  </div>
                  <div className="form-group col-lg-4 col-4 col-md-12">
                    <label>How many People?</label>
                    <input type="number" className="form-control" name="people" required value={formData.people} onChange={handleChange} placeholder="0" />
                  </div>
                  <div className="form-group col-lg-4 col-12">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" required value={formData.address} onChange={handleChange} placeholder="1234 Main St" />
                  </div>
                  <div className="form-group col-12">
                    <label>Message</label>
                    <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." />
                  </div>
                  <div className="form_btn text-center mt-3">
                    <button type="submit" className="send_btn">Book Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
