import React from 'react';

import { TextField, Button, Container, Typography, Divider } from '@mui/material';

function Contact() {
    
  return (
    <div style={{ marginTop: '50px' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 2,
                        marginRight:'15px'
            }}>
            {/* Form */}
            <form>
              <TextField label="Name" fullWidth margin="normal" />
              <TextField label="Email" fullWidth margin="normal" />
              <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <Divider orientation="vertical" flexItem />
          <div style={{ flex: 1, marginLeft: '20px' }}>
            {/* Bản đồ */}
            <Typography variant="h6" gutterBottom>
              Bản Đồ
            </Typography>
            <div>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.605252164151!2d106.67075587489379!3d10.764875359406986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee10bef3c07%3A0xfd59127e8c2a3e0!2sHo%20Chi%20Minh%20City%20College%20of%20Economics!5e0!3m2!1sen!2s!4v1703648360952!5m2!1sen!2s"
                width="100%"
                height="400px"
                style={{ border: 0 }}
               
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
