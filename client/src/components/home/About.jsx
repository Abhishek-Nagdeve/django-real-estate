import React from 'react'
import { Col, Row } from 'antd'

const items = [
    {
        key:"1",
        icon: <i className="fas fa-search-location"></i>,
        title: "Simplified Search",
        content: "It is a known fact that a reader will be distracted by the readable content."
    },
    {
        key:"2",
        icon: <i className="fas fa-search-location"></i>,
        title: "Simplified Search",
        content: "It is a known fact that a reader will be distracted by the readable content."
    },
    {
        key:"3",
        icon: <i className="fas fa-search-location"></i>,
        title: "Simplified Search",
        content: "It is a known fact that a reader will be distracted by the readable content."
    },

]

export default function About() {
    return (
        <div id="about" className='block about-section'>
            <div className="fluid-container">
                <div className="title-section">
                    <h2>About Us</h2>
                    <p>You will find us interesting.</p>
                </div>
                <div className="content-section">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quibusdam temporibus, praesentium eaque eligendi commodi ipsam. Incidunt officia autem magni sequi corrupti quis, dolore perferendis deserunt, fugiat error doloremque laboriosam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam esse aliquam sit odio porro pariatur enim quod hic dolorum?
                    </p>
                </div>
                <Row gutter={[16,16]}>
                    {
                        items.map((item)=>{
                            return (
                                <Col md={{span:8}} key={item.key}>
                                    <div className="content">
                                        <div className="icon">
                                            {item.icon}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}
