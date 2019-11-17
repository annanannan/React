import React, { Component } from 'react'
import { NavBar,Tabs,Icon } from 'antd-mobile'

const Tab = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
    { title: '+' }
];
export default class AppInspiration extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'white', marginRight: '16px' }} />,
                    ]}>灵感
                </NavBar>
                <Tabs tabs={Tab}
                   initialPage={0}
                   tabBarUnderlineStyle={{border:'0px solid #ffdb2c'}}
                   onChange={(tab, index) => { console.log('onChange', index, tab); }}
                   onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
                    <div style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b1.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b2.jpg')}/>
                                    橙色律动
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b4.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b9.jpg')}/>
                                    儿童房
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                        </div>
                        <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b5.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b8.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b4.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b2.jpg')}/>
                                    角落里的瞎想
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                        </div>
                        <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b4.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b9.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b5.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b8.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                        </div>


                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b4.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b9.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b5.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b8.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b4.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b9.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b5.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b8.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b4.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b9.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b5.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b8.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b4.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b9.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b5.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b8.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{display:'flex',marginBottom:'10px'}}>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b4.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b9.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <img style={{width:'150px'}} src={require('../images/b5.jpg')}/>
                                <div>
                                    <img style={{width:'30px'}} src={require('../images/b8.jpg')}/>
                                    翻滚吧
                                    <img style={{width:'25px',float:'right'}} src={require('../images/b3.jpg')}/></div>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        )
    }
}