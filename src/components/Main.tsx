import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./font.css";
import { Card, Col, FormProps, Image, Row } from "antd";
import { FaRegCreditCard } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { Button, Form, Input } from 'antd';

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

function AddCardForm() {
    return (
        <div className={"px-20 py-10 mt-[-350px]"}>
            <div className={"text-left mt-5"}>
                <h1 className={"font-bold text-3xl"}>Add New Card</h1>
                <span className={"text-1xl"}>Do more with unlimited blocks, files, automations & integrations.</span>
            </div>
            <Form
                className={"mt-5"}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <span className={"text-left"}>Who is</span>
                    <Input />
                </Form.Item>

                <Form.Item
                    name="text"
                    rules={[{ required: true, message: 'Please input your payment details!' }]}
                >
                    <span>Payment Details</span>
                    <Input className={"mb-2"} />
                    <Input className={"mb-2"} />
                    <Input className={"mb-2"} />
                </Form.Item>

                <div className={"flex gap-[50px]"}>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className={"bg-amber-50 w-[150px]"} htmlType="submit">
                            Cancel
                        </Button>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className={"bg-amber-50 w-[150px]"} htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </div>
                <span>By providing your card information, you allow us to charge your card for future payment in accordance with their terms.</span>
            </Form>
        </div>
    );
}

 function MyCards() {
    return (
        <div className={"px-20 py-10 flex "}>
            <h1 className={"font-bold text-3xl  text-center mt-[-350px]"}>My Cards</h1>
            <div className={"flex flex-col mt-5 gap-[30px]"}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <img src="/Group.png" alt="sdasd" width={"250px"}/>

                    </Col>
                    <Col className="gutter-row" span={6}>
                        <img src="/Group.png" alt="sdasd" width={"250px"}/>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <img src="/Group%20(2).png" alt="sdasd" width={"250px"}/>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <img src="/Group%20(3).png" alt="sdasd" width={"250px"}/>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <img src="/Group.png" alt="sdasd" width={"250px"}/>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <img src="/Group%20(3).png" alt="sdasd" width={"250px"}/>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <img src="/Group%203.png" alt="sdasd" width={"250px"}/>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <img src="/Group%204.png" alt="sdasd" width={"250px"}/>
                    </Col>
                </Row>



            </div>



        </div>
    );
 }

function Main() {
    return (
        <Router>
            <div className="App mt-10 flex w-full">
                <Col span={12}>
                    <div className={"px-20 py-10"}>
                        <Image />
                        <div className={"cards mt-5"}>
                            <Row gutter={16} className={"text-left"}>
                                <Col span={8}>
                                    <Link to="/add-card">
                                        <Card title="" className={"bg-purple-300 cursor-pointer"} bordered={false}>
                                            <FaRegCreditCard />
                                            New credit card
                                        </Card>
                                    </Link>
                                </Col>
                                <Col span={8}>
                                    <Link to="/my-cards">
                                        <Card title="" className={`cursor-pointer mb-[-100px]`} bordered={false}>
                                            <BsCreditCard2FrontFill />
                                            My cards
                                        </Card>
                                    </Link>
                                </Col>
                                </Row>
                        </div>
                    </div>
                </Col>
                <div>
                    <Image
                        src={"https://s3-alpha-sig.figma.com/img/5d4e/9572/d52f550b3b5989cf96d343f41333a3ab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elcq~KpzQ7q3~e4vLrIn50O5qXrCA92ovNeJp0V0hDXp2TcdI~WIF-gBgROBktmQd31ShVWxFX92WdXb2FUvrOl~HNfcHuBX~9OZQ61lcMa0dL-lUrlyXR0WgiYt8civEp69XuRWLKECl~oz1i5FOXI1~C6FIpTpGURyA6~9pIyHZWSm4WbquBRlaCPAyGtBMEmQOg-CXT6heJVqaH4kV6rrmfw~F8mQBEQIXZ017yY40ihXqnAPpOywGrb9s~6W8i5TVe7HCoPBntkMR3r7TEErt7b36SLKfgYL2so1oJE587xpH-cO24huDb4G9lTcKNtjyuKLjTK9pvdBSvC8Lg__"}
                        width={500} height={500} />
                </div>
            </div>

            <Routes>
                <Route path="/add-card" element={<AddCardForm />} />
                <Route path="/my-cards" element={<MyCards />} />
            </Routes>
        </Router>
    );
}

export default Main;
