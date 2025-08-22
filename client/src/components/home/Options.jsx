import React from 'react'
import { Button, Card , List } from 'antd'
import { ChromeOutlined , HomeOutlined , TeamOutlined } from '@ant-design/icons'

const data = [
    {
        title: "Buy a Property",
        content: [
            {
                icon: <HomeOutlined/>,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure aliquam fugit illum qui repellendus delectus possimus magnam aperiam vitae."
            }
        ]
    },
    {
    title: "Sell a Property",
        content: [
            {
                icon: <ChromeOutlined/>,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure aliquam fugit illum qui repellendus delectus possimus magnam aperiam vitae."
            }
        ]
    },
    {
    title: "Rent a Property",
        content: [
            {
                icon: <TeamOutlined/>,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure aliquam fugit illum qui repellendus delectus possimus magnam aperiam vitae."
            }
        ]
    },

]

export default function Options() {
  return (
    <div id="options" className='block options-block gray-bg'>
        <div className="fluid-container">
            <div className="title-section">
                <h2>Choose an option that fits your need.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nam?
                </p>
            </div>
            <List
                grid={{
                    gutter:16,
                    xs:1,
                    sm:1,
                    md:3,
                    lg:3,
                    xl:3,
                    xxl:3
                }}
                dataSource={data}
                renderItem={(item)=>(
                    <List.Item>
                        <Card title={item.title}>
                            <p className='large'>
                                {item.content[0].icon}
                            </p>
                            <p>{item.content[0].description}</p>
                            <Button type='primary' size='large'>
                                <i className="fab fa-telegram-plane"></i>
                                {" "}
                                Get Started
                            </Button>
                        </Card>
                    </List.Item>
                )}
            >

            </List>
        </div>
    </div>
  )
}
