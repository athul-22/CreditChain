'use client'
import { useState } from 'react';
import { Steps, Form, Input, Button, Upload, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Navbar from '@/components/Navbar';

const { Step } = Steps;
const { Option } = Select;

export default function CreateAccount() {
  const [current, setCurrent] = useState(0);

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
    '/assets/KYC.png',
    '/assets/CITIZEN.png',
    '/assets/SOCIAL.png',
    '/assets/BANK.png',
    '/assets/PAYBACK.png',
  ];

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImages[current]})` }}
    >
      <Navbar />
      <div className="flex flex-col items-center w-full max-w-2xl p-6 bg-white bg-opacity-70 rounded-lg shadow-lg">
        <Steps current={current} className="w-full">
          {steps.map((item, index) => (
            <Step key={index} title={item.title} />
          ))}
        </Steps>

        <div className="mt-8 w-full">
          {steps[current].content}
        </div>

        <div className="mt-6 flex justify-between w-full">
          {current > 0 && (
            <Button onClick={() => setCurrent(current - 1)} className="bg-gray-500 text-white">
              Previous
            </Button>
          )}
          {current < steps.length - 1 ? (
            <Button onClick={() => setCurrent(current + 1)} className="bg-blue-500 text-white">
              Next
            </Button>
          ) : (
            <Button className="bg-green-500 text-white">
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
