import React from 'react';
import {Link} from 'react-router-dom';
import "./font.css";
import {Col, FormProps, Row} from "antd";
import {FaRegCreditCard} from "react-icons/fa";
import {BsCreditCard2FrontFill} from "react-icons/bs";
import {Button, Form, Input} from 'antd';
import Header from "./Header";

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
        <div className={"px-20 py-8"}>
            <div className={"text-left mt-5"}>
                <h1 className={"font-bold text-3xl"}>Add New Card</h1>
                <span className={"text-1xl"}>Do more with unlimited blocks, files, automations & integrations.</span>
            </div>
            <Form
                className={""}
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <span className={"text-left"}>Who is</span>
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="text"
                    rules={[{required: true, message: 'Please input your payment details!'}]}
                >
                    <span>Payment Details</span>
                    <Input className={"mb-2"}/>
                    <Input className={"mb-2"}/>
                    <Input className={"mb-2"}/>
                </Form.Item>

                <div className={"flex gap-[50px]"}>
                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button className={"bg-amber-50 w-[150px]"} htmlType="submit">
                            Cancel
                        </Button>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button className={"bg-amber-50 w-[150px]"} htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}

export function MyCards({open, setOpen}: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const images: string[] = [
        "/Group.png",
        "/Group.png",
        "/Group%20(2).png",
        "/Group%20(3).png",
        "/Group.png",
        "/Group%20(3).png",
        "/Group%203.png",
        "/Group%204.png"
    ]

    return (
        <div className={"px-20 py-10 flex flex-col"}>
            <Header open={open} setOpen={setOpen}/>
            <h1 className={"font-bold text-3xl  text-center "}>My Cards</h1>
            <div className={"flex flex-col mt-5 gap-[30px]"}>
                <Row gutter={16}>
                    {images.map((i, index) => (
                        <Col key={index} xs={24} sm={24} md={12} lg={8}>
                            <div className="p-3">
                                <img src={i} alt="sdasd"/>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
        ;
}

function Main({open, setOpen}: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const bgImg = 'https://s3-alpha-sig.figma.com/img/5d4e/9572/d52f550b3b5989cf96d343f41333a3ab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elcq~KpzQ7q3~e4vLrIn50O5qXrCA92ovNeJp0V0hDXp2TcdI~WIF-gBgROBktmQd31ShVWxFX92WdXb2FUvrOl~HNfcHuBX~9OZQ61lcMa0dL-lUrlyXR0WgiYt8civEp69XuRWLKECl~oz1i5FOXI1~C6FIpTpGURyA6~9pIyHZWSm4WbquBRlaCPAyGtBMEmQOg-CXT6heJVqaH4kV6rrmfw~F8mQBEQIXZ017yY40ihXqnAPpOywGrb9s~6W8i5TVe7HCoPBntkMR3r7TEErt7b36SLKfgYL2so1oJE587xpH-cO24huDb4G9lTcKNtjyuKLjTK9pvdBSvC8Lg__'

    return (
        <>
            <div className="App w-[100%] min-h-[100vh]">
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div className={"px-10 py-10"}>
                            <div className={"cards mt-5"}>
                                <Header open={open} setOpen={setOpen}/>
                            </div>
                            <AddCardForm/>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div className={"w-[100%] min-h-[100vh] bg-cover bg-center"} style={{backgroundImage: `url(${bgImg})`}}></div>
                    </Col>
                </Row>
            </div>
        </>
    )
        ;
}

export default Main;
