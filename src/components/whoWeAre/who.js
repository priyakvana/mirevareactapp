"use strict"
import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

class Who extends React.Component {
    render() {
        return (
<div>
    <Container>
        <br/>
        <br/>
  
    <Row>
        <Col xs={6}>   <h1>Who we are</h1>
        <br/>
        <p style={{'font-size':20}}> We are a team with a deep bench of expertise in hedge fund long-short investing, invest
        regulations, data
        science, direct-to-consumer markets and investment research. Our team members hail from reversed organizations
        such as Citadel, D.E. Shaw, Millennium, Google, Apple and Square.</p>
      </Col>
        <Col><p style={{'font-size':35}}>Team Pictures</p>
        <img src="../team.png"  width="400"
        height="300"/></Col>
    </Row>
    </Container>
    <br/>
    <br/>
    <Container fluid={true} style={{'backgroundColor':'#22788F','height':500,'color':'white'}}>
    <Row>
    <Col>
        <img src="../stock-tree.png"  width="500"
        height="500" style={{'padding-left':200}}/></Col>
        <Col xs={6}> 
        <br/>
         <b style={{'font-size':35}}>Why we are paving this new path</b><br/><br/>
      <p style={{'font-size':20}} >Our mission is to the world's low-cost platform for long-short investing. We
        want to
        deocratize investing in
        alternative equity strategies and give you, the consumer the power of generating uncorrelated market returns in
        your portfolio - all at your fingertips.</p>
      <p style={{'font-size':20}}>As responsible stewards of capital, we take asset allocations very seriously. We
        invest in
        companies generating
        shareholder return and short those aren't. Simply put, this is how the world works! We think our relative value
        allocation helps keep markets functioning efficiently.</p>
      <p style={{'font-size':20}} >We want you to invest commission-free if you are anon-accredited investor and
        help you
        realize the power of
        generating uncorrelated returns via long-short investing</p>
      </Col>
        
    </Row>
    </Container>
    <Container>
    <Row>
        <Col xs={6}>   
        <br/>
        <b style={{'font-size':35}}>How do we get this done</b><br/><br/>
        <p style={{'font-size':20}}> Our stock by stock investment theses are available for your once yor are investe on the
          platform. Deep dive
          research is available for a samll fee</p>
        <p style={{'font-size':20}} >We use automated portfolio managment using portfolio construction limits which our
          founders have particed and
          deployed for decades.</p>
        <p style={{'font-size':20}} >We are constantly innovating with AI based risk optimization.</p>
        <p style={{'font-size':20}}>We have developed our proprietary factor risk model which helps our portfolios generate
          market uncorrelated
          returns.</p>
          <button style={{'border-radius':20,'backgroundColor':'#22788F','color':'white','height':40}} size="sm">Learn more</button>
          </Col>
          <Col>
          <br/>
          <br/>
       
        <img src="../stock-image.png"  width="400"
        height="300"/></Col>
    </Row>
    </Container>
    <br/>
    <br/>
    
</div>
          
                                );
                    }
         }
                        
export default Who             
