import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button,Carousel } from 'antd'

const items = [
    {
        key:1,
        title: "Buy and Sell Properties",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, consectetur laudantium nemo maxime culpa nobis quidem veniam eaque autem natus fugit officia dolor, enim magnam iusto commodi quae iure voluptatibus.",
        image: "/images/banner1.jpg"
    },
    {
        key:3,
        title: "Buy and Sell Land",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, consectetur laudantium nemo maxime culpa nobis quidem veniam eaque autem natus fugit officia dolor, enim magnam iusto commodi quae iure voluptatibus.",
        image: "/images/banner1.jpg"
    },
    {
        key:3,
        title: "Buy and Sell Properties",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, consectetur laudantium nemo maxime culpa nobis quidem veniam eaque autem natus fugit officia dolor, enim magnam iusto commodi quae iure voluptatibus.",
        image: "/images/banner1.jpg"
    },

]


export default function Banner() {
    return (
      <div id="banner" className="banner-section">
        <Carousel autoplay>
          {items.map((item) => (
            <div key={item.key}>
              <div
                className="banner-slide"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="slide-inner">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div className="btn-group">
                    <Button type="primary" size="large">Learn More…</Button>
                    <Button icon={<SearchOutlined />} size="large">Search</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    )
  }