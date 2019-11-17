import React, { Component } from 'react';
import {NavBar, WingBlank,Flex,Carousel,} from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>...</div>
  );

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                    ]}
                    >住吧家具</NavBar>
                <WingBlank style={{margin:0}}>
                    <Carousel
                    autoplay={true}
                    infinite={true}
                    slideWidth={1}>
                        <img src={require('../images/banner.jpg')}/>
                        <img src={require('../images/banner1.jpg')}/>
                    </Carousel>
                </WingBlank>
                <div className="body1">
                    <Flex wrap="wrap">
                        <PlaceHolder className="body2" style={{background:`url(${require('../images/a1.jpg')}) center center no-repeat`,backgroundSize:'110px 110px'}} />
                        <PlaceHolder className="body2" style={{background:`url(${require('../images/a2.jpg')}) center center no-repeat`,backgroundSize:'110px 110px'}} />
                        <PlaceHolder className="body2" style={{background:`url(${require('../images/a3.jpg')}) center center no-repeat`,backgroundSize:'110px 110px'}} />
                    </Flex>                  
                </div>
                <footer>
                    <p><span>|</span>&nbsp;&nbsp;&nbsp;&nbsp;热门推荐</p>
                    <div><img src={require('../images/a4.jpg')} style={{width:'100%',height:'280px'}} /></div>
                </footer>
            </div>
        )
    }
}