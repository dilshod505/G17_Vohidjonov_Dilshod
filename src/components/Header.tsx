import React from 'react';
import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import {FaRegCreditCard} from "react-icons/fa";
import {BsCreditCard2FrontFill} from "react-icons/bs";

function Header({open, setOpen}: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <div className="p-3">
                        <Link to="/">
                            <div
                                onClick={() => setOpen(true)}
                                className={`${open ? "border-violet-400 bg-violet-100" : "border-gray-500 bg-gray-100"} border-2 cursor-pointer min-h-[100px] rounded-lg flex flex-col justify-around items-start px-5 py-3`}>
                                <FaRegCreditCard className={"text-xl"}/>
                                <p className={"text-[16px]"}>New credit card</p>
                            </div>
                        </Link>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <div className="p-3">
                        <Link to="/my-cards">
                            <div onClick={() => setOpen(false)}
                                 className={`${!open ? "border-violet-400 bg-violet-100" : "border-gray-500 bg-gray-100"} border-2 cursor-pointer min-h-[100px] rounded-lg flex flex-col justify-around items-start px-5 py-3`}>
                                <BsCreditCard2FrontFill className={"text-xl"}/>
                                <p className={"text-[16px]"}>My cards</p>
                            </div>
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Header;