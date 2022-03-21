
import React, { Component } from 'react';
import Row_category from './Row_category';
import { HexColorPicker } from "react-colorful";
import * as eva from 'eva-icons';

export default class Container_colorpicker extends Component
{
    constructor(props)
    {
        super(props);
        this.wrapperRef         = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    
    componentDidMount()
    {
        eva.replace();
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount()
    {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    
    handleClickOutside(event)
    {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target))
        {
            // alert("You clicked outside of me!");
            console.log("You clicked outside of me!")
            this.props.set_color_by_id()
        }
    }

    render()
    {
        return <div
        id        = "colorpicker"
        className = {this.props.visible ? 'empty':'hidden'}
        style     = {{position:"absolute"}}
        ref       = {this.wrapperRef}
        >
        <HexColorPicker
        color    = {this.props.color}
        onChange = {this.props.set_color_to_assign}
        />
        {/* <i data-eva="plus-circle-outline" data-eva-fill="#AAA"/> */}
      </div>
    }
}