import React, { useState, useEffect } from 'react';
import '../css/Landing.css';
import { Link } from 'react-router-dom';

// RIGHT SIDE
import { Tabs, Input, Button, Progress, Slider, Flex } from 'antd';
import { DollarOutlined, CalendarOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';

import Navbar from '../components/Navbar'

//IMAGES
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
import seven from '../assets/7.png';
import eight from '../assets/8.png';
import nine from '../assets/9.png'
import ten from '../assets/10.png'
import eleven from '../assets/11.png'

const { TabPane } = Tabs;

function Landing() {

    // STATES FOR BORROWTAB
    const [borrowAmount, setBorrowAmount] = useState('');
    const [borrowMonths, setBorrowMonths] = useState(1);
    const [borrowOutput, setBorrowOutput] = useState(null);

    // STATES FOR RENDING TAB
    const [lendingAmount, setLendingAmount] = useState('');
    const [lendingMonths, setLendingMonths] = useState(1);
    const [lendingOutput, setLendingOutput] = useState(null);


    // FUNCTION TO FORMAT MONTHS TO YEAR
    const formatDuration = (months) => {
        if (months < 12) {
            return `${months} month${months > 1 ? 's' : ''}`;
        } else {
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            return `${years} year${years > 1 ? 's' : ''} ${remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''
                }`.trim();
        }
    };

    // BORROWING OUTPUT
    useEffect(() => {
        if (borrowAmount && borrowMonths) {
            const amount = parseFloat(borrowAmount);
            const interestRate = 0.09 / 12; // 9% ANUAL INTEREST RATE
            const interest = amount * interestRate * borrowMonths;
            setBorrowOutput((amount + interest).toFixed(2));
        } else {
            setBorrowOutput(null);
        }
    }, [borrowAmount, borrowMonths]);

    // LENDING OUTPUT
    useEffect(() => {
        if (lendingAmount && lendingMonths) {
            const amount = parseFloat(lendingAmount);
            const returnRate = 0.05 / 12; // 5% ANNUAL RETURN RATE
            const returnAmount = amount * returnRate * lendingMonths;
            setLendingOutput((amount + returnAmount).toFixed(2));
        } else {
            setLendingOutput(null);
        }
    }, [lendingAmount, lendingMonths]);


    // FUNCTION TO RENDER CUSTOM BAR
    const renderBar = (amount, extra) => {
        const total = amount + extra;
        const percentAmount = ((amount / total) * 100).toFixed(2);
        const percentExtra = ((extra / total) * 100).toFixed(2);

        return (
            <div style={{ width: '97%', height: '16px', backgroundColor: '', borderRadius: '5px', overflow: 'hidden', marginTop: '10px' }}>
                <div
                    style={{
                        width: `${percentAmount}%`,
                        height: '100%',
                        backgroundColor: '#3081ec',
                        display: 'inline-block',
                    }}
                ></div>
                <div
                    style={{
                        width: `${percentExtra}%`,
                        height: '100%',
                        backgroundColor: '#efc33b',
                        display: 'inline-block',
                    }}
                ></div>
            </div>
        );
    };

    return (
        <div className='top-main'>
            <Navbar/>
            <div className='top-left'>
                <p className='top-left-title'>CREDIT CHAIN</p>
                <p className='top-left-tagline'>Collateral free Borrowing and Lending Platform</p>
            </div>

            <div className='top-right'>
                <div
                    style={{
                        padding: '20px',
                        backgroundColor: 'white',
                        border: '1px solid #e8e8e8',
                        width: '400px',
                        borderRadius: '20px',
                        fontFamily: 'Arial, sans-serif',
                        margin: '20px auto',
                        height: 'fit-content',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        marginTop: '-250px',
                        marginLeft: '1000px'
                    }}
                >
                    <Tabs defaultActiveKey="1" style={{ marginBottom: '20px' }}>
                        {/* BORROW TAB */}
                        <TabPane tab="Borrow" key="1">
                            <div style={{ marginBottom: '20px' }}>
                                <Input
                                    placeholder="Enter Amount"
                                    prefix={<DollarOutlined />}
                                    value={borrowAmount}
                                    onChange={(e) => setBorrowAmount(e.target.value)}
                                    style={{ marginBottom: '20px' }}
                                />
                                <div style={{ marginBottom: '10px' }}>
                                    <CalendarOutlined style={{ marginRight: '8px' }} />
                                    Select Number of Months:
                                </div>
                                <Slider
                                    min={1}
                                    max={36}
                                    value={borrowMonths}
                                    onChange={(value) => setBorrowMonths(value)}
                                    //   tooltipVisible
                                    style={{ marginBottom: '10px' }}
                                />
                                <div style={{ marginBottom: '20px' }}>{formatDuration(borrowMonths)}</div>
                                {borrowOutput && (
                                    <>
                                        <div style={{ fontSize: '16px', marginBottom: '10px' }}>Final Amount: <span style={{ fontSize: '25px', color: "#2a81ff", fontWeight: 'bolder' }}>₹{borrowOutput}</span></div>
                                        {renderBar(parseFloat(borrowAmount), parseFloat(borrowOutput) - parseFloat(borrowAmount))}
                                    </>
                                )}

                                <div>
                                    <div style={{ height: '15px', width: '15px', backgroundColor: '#3081ec', borderRadius: '50px', marginTop: '30px' }}> </div>
                                    <p style={{ marginLeft: '25px', marginTop: '-20px', fontWeight: 'bold' }}>Total Amount Borrowing</p>

                                    <div style={{ height: '15px', width: '15px', backgroundColor: '#f19b19', borderRadius: '50px', marginTop: '20px' }}> </div>
                                    <p style={{ marginLeft: '25px', marginTop: '-20px', fontWeight: 'bold' }}>Total Interest - 9%</p>

                                </div>
                            </div>
                        </TabPane>

                        {/* Lending Tab */}
                        <TabPane tab="Lending" key="2">
                            <div style={{ marginBottom: '20px' }}>
                                <Input
                                    placeholder="Enter Amount for Lending"
                                    prefix={<DollarOutlined />}
                                    value={lendingAmount}
                                    onChange={(e) => setLendingAmount(e.target.value)}
                                    style={{ marginBottom: '20px' }}
                                />
                                <div style={{ marginBottom: '10px' }}>
                                    <CalendarOutlined style={{ marginRight: '8px' }} />
                                    Select Number of Months:
                                </div>
                                <Slider
                                    min={1}
                                    max={36}
                                    value={lendingMonths}
                                    onChange={(value) => setLendingMonths(value)}
                                    //   tooltipVisible
                                    style={{ marginBottom: '10px' }}
                                />
                                <div style={{ marginBottom: '20px' }}>{formatDuration(lendingMonths)}</div>
                                {lendingOutput && (
                                    <>
                                        <div style={{ fontSize: '16px', marginBottom: '10px' }}>Final Amount: <span style={{ fontSize: '25px', color: "#2a81ff", fontWeight: 'bolder' }}>₹{lendingOutput}</span></div>
                                        {renderBar(parseFloat(lendingAmount), parseFloat(lendingOutput) - parseFloat(lendingAmount))}
                                    </>
                                )}

                                <div>
                                    <div style={{ height: '15px', width: '15px', backgroundColor: '#3081ec', borderRadius: '50px', marginTop: '30px' }}> </div>
                                    <p style={{ marginLeft: '25px', marginTop: '-20px', fontWeight: 'bold' }}>Total Amount Lending</p>

                                    <div style={{ height: '15px', width: '15px', backgroundColor: '#f19b19', borderRadius: '50px', marginTop: '20px' }}> </div>
                                    <p style={{ marginLeft: '25px', marginTop: '-20px', fontWeight: 'bold' }}>Total Return - 5%</p>

                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                    <div style={{ height: '15px', width: '111.5%', backgroundColor: '#3081ec', marginBottom: '-20px', marginLeft: '-20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                    </div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',marginTop:'100PX'}}>
                <div className='features-section' style={{display:'flex',justifyContent:'space-around',width:'80%'}}>

                    <div className='feature' style={{
                        height:'200px',
                        width:'260px',
                        backgroundColor:'white', 
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        textAlign:'center',
                        padding:'20px',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:'20px'
                        }}>
                            <img src={nine} alt='' height="100px" width="100px"/>
                            <br/> 
                        <p style={{fontSize:'23px',fontWeight:'bolder',marginTop:'20px'}}>Collateral free Borrowing</p>
                    </div>

                    <div className='feature' style={{
                        height:'200px',
                        width:'260px',
                        backgroundColor:'white', 
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        textAlign:'center',
                        padding:'20px',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:'20px'
                        }}>
                            <img src={five} alt='' height="100px" width="100px"/>
                            <br/> 
                        <p style={{fontSize:'26px',fontWeight:'bolder',marginTop:'20px'}}>Trusted Lending</p>
                    </div>


                    <div className='feature' style={{
                        height:'200px',
                        width:'260px',
                        backgroundColor:'white', 
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        textAlign:'center',
                        padding:'20px',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:'20px'
                        }}>
                            <img src={eleven} alt='' height="100px" width="100px"/>
                            <br/> 
                        <p style={{fontSize:'23px',fontWeight:'bolder',marginTop:'20px'}}>p2p Based Transaction</p>
                    </div>

                    <div className='feature' style={{
                        height:'200px',
                        width:'260px',
                        backgroundColor:'white', 
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        textAlign:'center',
                        padding:'20px',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:'20px'
                        }}>
                            <img src={six} alt='' height="100px" width="100px"/>
                            <br/> 
                        <p style={{fontSize:'26px',fontWeight:'bolder',marginTop:'20px'}}>Onchain</p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Landing;