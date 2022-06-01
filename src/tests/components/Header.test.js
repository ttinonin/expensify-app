import { shallow } from 'enzyme'
import React from 'react'
import Header from '../../components/Header'

//tira uma "print" do codigo do header
//cada vez que eu mudar ele o jest me avisa

test('should render header correctly',  ()=>{
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1').length).toBe(1)
    
    //const renderer = new ReactShallowRenderer()
    //renderer.render(<Header />)
    //expect(renderer.getRenderOutput()).toMatchSnapshot()
})