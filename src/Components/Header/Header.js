import React from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import Logo from '../../image/logo.PNG'
import './Header.css'

export default function Header() {
  return (
    <Wrapper  classList={'bo h-wrapper'}>
        <Row classList={'bo r-x-space-arounf r-y-center'}>
            <Col  classList={'bo '}>
                <img className="logo" src={Logo} alt="" />
            </Col>
            <Col  classList={'bo  c-x-center hide-s'}>
                <Row classList="bo h-nav">
                    <Col classList="bo h-nav-item txt-m ">
                        <a href='#section-1' >Home</a>
                    </Col>
                    <Col classList="bo h-nav-item txt-m ">
                        <a href='#section-3' >About</a>
                    </Col>
                    <Col classList="bo h-nav-item txt-m ">
                        <a href='#section-2' >Services</a>
                    </Col>
                    <Col classList="bo h-nav-item txt-m ">
                        <a href='#section-4' >Testimonials</a>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Wrapper>
  )
}
