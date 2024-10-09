import React, { useState } from 'react';
import { Steps, Form, Input, Button, Upload, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';

// Import your background images
import bgStep1 from '../assets/KYC.png';
import bgStep2 from '../assets/CITIZEN.png';
import bgStep3 from '../assets/SOCIAL.png';
import bgStep4 from '../assets/BANK.png';
import bgStep5 from '../assets/PAYBACK.png';

const { Step } = Steps;
const { Option } = Select;

function CreateAccount() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'Human Verification',
      content: (
        <Form layout="vertical">
          <Form.Item label="Full Name">
            <Input placeholder="Enter your full name" />
          </Form.Item>
          <Form.Item label="Nationality">
            <Select placeholder="Select your nationality">
              <Option value="indian">Indian</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Upload ID Proof">
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'KYC Verification',
      content: (
        <Form layout="vertical">
          <Form.Item label="Aadhaar Card Number">
            <Input placeholder="Enter your Aadhaar number" />
          </Form.Item>
          <Form.Item label="PAN Card Number">
            <Input placeholder="Enter your PAN number" />
          </Form.Item>
          <Form.Item label="Address Proof">
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Social Verification',
      content: (
        <Form layout="vertical">
          <Form.Item label="LinkedIn Profile URL">
            <Input placeholder="Enter your LinkedIn URL" />
          </Form.Item>
          <Form.Item label="Twitter Profile URL">
            <Input placeholder="Enter your Twitter URL" />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Bank Verification',
      content: (
        <Form layout="vertical">
          <Form.Item label="Bank Account Number">
            <Input placeholder="Enter your bank account number" />
          </Form.Item>
          <Form.Item label="IFSC Code">
            <Input placeholder="Enter your bank IFSC code" />
          </Form.Item>
          <Form.Item label="Upload Bank Statement">
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Proof of Payback',
      content: (
        <Form layout="vertical">
          <Form.Item label="Upload Previous Loan Clearance Proof">
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Loan Amount">
            <Input placeholder="Enter the previous loan amount" />
          </Form.Item>
        </Form>
      ),
    },
  ];

  const backgroundImages = [
    bgStep1,
    bgStep2,
    bgStep3,
    bgStep4,
    bgStep5,
  ];

  return (
    <div 
      className='create-account-main' 
      style={{ 
        display: 'flex', 
        backgroundColor: 'white', 
        minHeight: '100vh', 
        padding: '20px', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImages[current]})`, // Set background image based on current step
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
      }}
    >
      <Navbar/>
      
      {/* Left Side Image */}
      <div style={{ flex: 1 }}>
        {/* Replace with your actual image path */}
        {/* <img src="/path/to/your/image.png" alt="Verification" style={{ width: '100%', height: 'auto' }} /> */}
      </div>

      {/* Right Side Steps */}
      <div style={{ flex: 1, marginLeft: '100px', marginRight:'100px', width:'50%' }}>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        {/* Step Content */}
        <div className="steps-content" style={{ marginTop: '50px' }}>
          {steps[current].content}
        </div>

        {/* Navigation Buttons */}
        <div className="steps-action" style={{ marginTop: '20px' }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => alert('Account Created!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;