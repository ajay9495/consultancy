import React from 'react'
import Row from '../BaseComponents/Row/Row'
import Wrapper from '../BaseComponents/Wrapper/Wrapper'
import Col from '../BaseComponents/Col/Col'

import AboutImage1 from '../../image/s1.webp'
import AboutImage2 from '../../image/s2.webp'
import AboutImage3 from '../../image/s3.webp'

import './About.css'

export default function About() {
  return (
    <Row >

        <Row classList={'bo w-12 r-x-center'}>
            <Col classList="bo  g-3 g-1-s   p-2 c-y-start c-x-center-s s-long">
                <div className="bo py-5 txt-l txt-bold-l">
                    About
                </div>

            </Col>
        </Row>

        <Row classList="bo g-5-s">

            <Col classList="bo w-4 w-s-12">
                <img className='a-image' src={AboutImage1} alt="" />
                <div className="p-5 a-txt-wrapper">
                    <Col classList={'g-2 g-3-s h-100 c-y-start'}>
                        <div className="txt-white txt-m txt-m-s txt-bold-m">
                            Personalized career consultations
                        </div>
                        <div className="txt-white txt-s txt-s-s">
                            Our team of experts offers personalized career consultations, education consultations, and job consultations
                        </div>
                    </Col>
                </div>
            </Col>
            <Col classList="bo w-4 w-s-12 c-reverse-s">
                <div className="p-5 a-txt-wrapper">
                    <Col classList={'bo h-100 c-y-end g-2 g-3-s'}>
                        <div className="bo txt-white txt-m txt-m-s txt-bold-m">
                            Tailored career advice
                        </div>
                        <div className="bo txt-white txt-s txt-s-s">
                            We provide tailored advice to help you navigate the complexities of the job market and make informed decisions about your career path
                        </div>
                    </Col>
                </div>
                <img className='a-image' src={AboutImage2} alt="" />
            </Col>
            <Col classList="bo w-4 w-s-12">
                <img className='a-image' src={AboutImage3} alt="" />
                <div className="p-5 a-txt-wrapper">
                    <Col classList={'g-2 g-3-s h-100 c-y-start'}>
                        <div className="txt-white txt-m txt-m-s txt-bold-m">
                            Valuable insights and strategies
                        </div>
                        <div className="txt-white txt-s txt-s-s">
                            We provide you with valuable insights and strategies to help you secure your dream job
                        </div>
                    </Col>
                </div>
            </Col>

        </Row>


    </Row>
  )
}
