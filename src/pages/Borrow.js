import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../css/Borrow.css';

import Navbar from '../components/Navbar';

const columns = [
  {
    title: 'Collection',
    dataIndex: 'collection',
    key: 'collection',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Available Pool',
    dataIndex: 'availablePool',
    key: 'availablePool',
  },
  {
    title: 'Best Offer',
    dataIndex: 'bestOffer',
    key: 'bestOffer',
  },
  {
    title: 'Interest',
    dataIndex: 'interest',
    key: 'interest',
    render: (text) => <span style={{ color: 'green',fontWeight:'bold' }}>{text}</span>,
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <Link to={`/borrow/${record.id}`}>
        <Button type="primary">Borrow</Button>
      </Link>
    ),
  },
];

// Dummy data with id for each row
const data = Array.from({ length: 10 }, (_, index) => ({
  key: index,
  id: index,
  collection: `sharx - ${index % 2 === 0 ? '3d' : '16d'}`,
  availablePool: index % 2 === 0 ? '16.88' : '37.84',
  bestOffer: index % 2 === 0 ? '0.85' : '0.74',
  interest: index % 2 === 0 ? '0.0097 (1.14%)' : '0.037 (5.09%)',
  duration: index % 2 === 0 ? '3d' : '16d',
}));

function Borrow() {
  return (
    <div className='borrow-main' style={{ backgroundColor: 'white', minHeight: '100vh', padding: '20px' }}>
      
      <Navbar/>
      <div className="borrow-table" style={{ paddingTop: '140px', width: '90%',margin:'0 auto', justifyContent: 'center' }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
}

export default Borrow;
