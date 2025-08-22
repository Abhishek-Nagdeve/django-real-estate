import React, { useState } from 'react'
import { Anchor, Button, Drawer } from 'antd'
import { Link } from 'react-router-dom'

export default function AppHeader() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => setVisible(true)
    const closeDrawer = () => setVisible(false)

    const anchorItems = [
        { key: '1', href: '#banner', title: 'Home' },
        { key: '2', href: '#about', title: 'About' },
        { key: '3', href: '#options', title: 'Options' },
        { key: '4', href: '#faq', title: 'FAQ' },
    ]

    return (
        <div className='fluid-container'>
            <div className="header">
                <div className="logo">
                    <i className="fas fa-home fa-2x"></i>
                    <Link to="/">Real Estate</Link>
                </div>

                {/* Desktop Menu */}
                <div className="mobileHidden">
                    <Anchor targetOffset={65} items={anchorItems} />
                    <Link to="/properties" className="ant-anchor-link-title">Properties</Link>
                </div>

                {/* Mobile Menu */}
                <div className="mobileVisible">
                    <Button type='primary' onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        placement='right'
                        closable={false}
                        onClose={closeDrawer}
                        open={visible} // ✅ AntD v5 uses `open`
                    >
                        <Anchor targetOffset={65} items={anchorItems} />
                        <Link to="/properties" className="ant-anchor-link-title">Properties</Link>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}
