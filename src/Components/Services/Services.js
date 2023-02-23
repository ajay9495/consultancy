import './Services.css'

import React from 'react'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import ServicesIcon from '../../image/icon2.webp'

export default function Services() {
  return (
    <Wrapper>
        <Row classList="bo g-5-s">
            <Col classList="bo g-3 g-1-s w-3 w-s-12 p-2 c-y-start s-long">
                <div className="bo txt-l txt-bold-l">
                    Our services highlights
                </div>
                <div className="bo txt-m hide-s">
                    These are the highlights of our services.
                </div>
            </Col>
            <Col classList="bo w-3 w-s-12 s-3 c-y-end">
                <div className="bo s-sub p-5">
                    <Col classList="bo g-2 c-y-center c-x-start">
                        <img className='s-icon' src={ServicesIcon} alt="" />
                        <div className='bo pt-3 s-sub-text txt-m txt-m-s  txt-bold-m'>
                            Career Consultation Service
                        </div>
                        <div className='bo s-sub-text txt-s txt-s-s'>
                            Career consultation helps individuals make informed decisions about their professional journey
                        </div>
                    </Col>
                </div>         
            </Col>
            <Col classList="bo w-3 w-s-12 s-2 c-y-end">
                <div className="bo s-sub p-5">
                    <Col classList="bo g-2 c-y-center c-x-start">
                        <img className='s-icon' src={ServicesIcon} alt="" />
                        <div className='bo pt-3 s-sub-text txt-m txt-m-s txt-bold-m'>
                            Educaton Consultation Service
                        </div>
                        <div className='bo txt-s txt-s-s s-sub-text'>
                            Education consultation assists individuals in identifying the best educational programs
                        </div>
                    </Col>
                </div>                           
            </Col>
            <Col classList="bo w-3 w-s-12 s-1 c-y-end">
                <div className="bo s-sub p-5">
                    <Col classList="bo g-2 c-y-center c-x-start">
                        <img className='s-icon' src={ServicesIcon} alt="" />
                        <div className='bo pt-3 s-sub-text txt-m txt-m-s txt-bold-m'>
                            Job Consultation Service
                        </div>
                        <div className='bo s-sub-text txt-s txt-s-s'>
                            Job consultation service provides individuals with strategies and support to secure their desired job
                        </div>
                    </Col>
                </div>          
            </Col>
        </Row>
    </Wrapper>
  )
}


