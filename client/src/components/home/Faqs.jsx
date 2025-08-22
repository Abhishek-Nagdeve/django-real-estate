import React from 'react'
import { Button,Col,Collapse } from 'antd'

const {Panel} = Collapse

export default function Faqs() {
  return (
    <div id="faq" className='block faq-block'>
        <div className="fluid-container">
            <div className="title-section">
                <h2>Frequently Asked Questions</h2>
                <p>
                    What are the most Frequently asked Questions
                    regarding 
                    Properties?
                </p>
            </div>
            <Collapse defaultActiveKey={["1"]}>
                <Panel header="How do i find the right property?">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum omnis illo accusantium quidem veritatis iure, officia exercitationem ea aperiam culpa fugiat, obcaecati tempore? Maiores veritatis corporis animi molestiae repudiandae voluptatibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolores illum recusandae non ex. Maiores natus inventore dolor velit quas!
                    </p>
                </Panel>
                <Panel header="How do i know i can trust the agents?">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum omnis illo accusantium quidem veritatis iure, officia exercitationem ea aperiam culpa fugiat, obcaecati tempore? Maiores veritatis corporis animi molestiae repudiandae voluptatibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolores illum recusandae non ex. Maiores natus inventore dolor velit quas!
                    </p>
                </Panel>
                <Panel header="Who are your major clients?">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum omnis illo accusantium quidem veritatis iure, officia exercitationem ea aperiam culpa fugiat, obcaecati tempore? Maiores veritatis corporis animi molestiae repudiandae voluptatibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolores illum recusandae non ex. Maiores natus inventore dolor velit quas!
                    </p>
                </Panel>
                <Panel header="Do i need to create an account?">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum omnis illo accusantium quidem veritatis iure, officia exercitationem ea aperiam culpa fugiat, obcaecati tempore? Maiores veritatis corporis animi molestiae repudiandae voluptatibus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolores illum recusandae non ex. Maiores natus inventore dolor velit quas!
                    </p>
                </Panel>

            </Collapse>
            <div className="quick-support">
                <h3>Want expidite support?</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum omnis illo accusantium quidem veritatis iure, officia exercitationem ea aperiam culpa fugiat, obcaecati tempore? Maiores veritatis corporis animi molestiae repudiandae voluptatibus.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolores illum recusandae non ex. Maiores natus inventore dolor velit quas!
                </p>
                <Button type='primary' size='large'>
                    <i className="fas fa-envelope"></i>Email your Question!
                </Button>
            </div>
        </div>

    </div>
  )
}
