import React from 'react';
import "./font.css";
import {Col, FormProps, Image, Row, Space} from "antd";
import {Input} from 'antd';
import Header from "./Header";


function AddCardForm() {


    
    return (
        <div className={"px-5 py-2"}>
                <h1 className='text-[40px]'>Add New Card</h1>
                <span className={"text-gray-400"}>Do more with unlimited blocks, files, automations & integrations.</span>
        <div>
        <Space direction="vertical" style={{ width: '100%', marginTop: 36 }}>
                    <Input 
                        placeholder="Ism kiritish" 
                        // value={name} 
                        // onChange={(e) => setName(e.target.value)} 
                    />
                    <Input 
                        placeholder="Karta turi" 
                        // value={cardType} 
                        // onChange={(e) => setCardType(e.target.value)} 
                    />
                    <Input 
                        placeholder="Karta rasm URL" 
                        // value={imgUrl} 
                        // onChange={(e) => setImgUrl(e.target.value)} 
                    />
                </Space>
                <Col xs={24} sm={24} md={12} lg={12} className={"mt-5"}>
         <div className='flex items-center justify-center gap-5'>
            <div>
            <button type={"submit"} className='bg-neutral-100 w-[150px] text-white px-10 py-4 rounded-[16px] mt-5'>
        <span className={"text-black"}>Cencel</span>
        </button>
            </div>
            <div>
            <button type={"submit"} className='border-violet-400 w-[150px] bg-violet-500 text-white px-10 py-4 rounded-[16px] mt-5'>
        <span className={"text-white"}>Add Card</span>
        </button>
            </div>
         </div>
                </Col>
        </div>

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
            <h1 className={"font-bold text-3xl text-center mb-5 mt-5"}>My Cards</h1>
            <div className={"flex flex-col mt-5 gap-[30px]"}>
                <Row gutter={16}>
                    {images.map((i, index) => (
                        <Col key={index} xs={24} sm={24} md={12} lg={8}>
                            <div className="p-3">
                                <Image src={i} alt="sdasd"/>
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
