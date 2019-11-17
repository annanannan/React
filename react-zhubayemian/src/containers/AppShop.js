import React, { Component } from 'react';
import { NavBar,Carousel, WingBlank, Flex,SearchBar ,Icon} from 'antd-mobile';

export default class AppShop extends Component {
    render() {
        return (
            <div style={{position:"relative"}}>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                    ]}
                    >商城</NavBar>
                <SearchBar placeholder="请输入你想搜索商品的关键字" maxLength={8} />                
                <WingBlank style={{margin:0}}>
                    <Carousel
                        autoplay={true}
                        infinite
                        slideWidth={1}
                    >
                        <img src={require('../images/shop.jpg')}/>
                        <img src={require('../images/shop.jpg')}/>
                        <img src={require('../images/shop.jpg')}/>
                        <img src={require('../images/shop.jpg')}/>
                    </Carousel>
                </WingBlank>
                <div className="body3">
                    <Flex>
                        <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>桌</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>床</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>椅</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>几</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>柜</p>    
                        </div></Flex.Item>
                    </Flex>

                    <Flex>
                    <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>书架</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>沙发</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>家居饰品</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>户外家具</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/c1.png')}/>
                            <p>全部分类</p>    
                        </div></Flex.Item>
                    </Flex>
                </div>

                <div className="body4">
                    <Flex>
                        <Flex.Item align="center">
                            <img src={require('../images/c2.jpg')}/>
                            <p style={{color:'#7e7e7e',fontSize:'6px'}}>Top&nbsp;Art&nbsp;Studio&nbsp;欧式风格精细...</p>
                            <p style={{fontSize:'6px'}}>￥&nbsp;39.95</p>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../images/c3.jpg')}/>
                            <p style={{color:'#7e7e7e',fontSize:'6px'}}>顺顺工艺欧式风格塑料外框黑...</p>
                            <p style={{fontSize:'6px'}}>￥&nbsp;83.99</p>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        );
    }
}
