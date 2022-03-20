
import React, { PureComponent, Component } from 'react';
import * as eva from 'eva-icons';

export default class Row_category extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        eva.replace({
            height: 28,
            width : 28,
        });
    }

    render()
    {
        const get_display = () => {
            if (this.props.visible)
            {return "block"}
            else
            {return "none"}
        }

        return <div className='button_category noselect'>

            <i data-eva="more-vertical-outline" data-eva-fill="#FFF"/>

            <span onClick={() => this.props.on_click_eye(this.props.id)}>
                <div className={this.props.visible ? 'empty':'hidden'}>
                    <i data-eva="eye-outline" data-eva-fill="#FFF"/>
                </div>
                <div className={this.props.visible ? 'hidden':'empty'}>
                    <i data-eva="eye-off-outline" data-eva-fill="#FFF"/>
                </div>
            </span>

            <div className='spacer_10'/>

            <div
            className = 'button_color_picker'
            style     = {{backgroundColor:this.props.color}}
            onClick   = {() => this.props.on_click_color(this.props.id)}
            />

            {this.props.title}

            <div className={this.props.error ? 'hidden':'to_the_right'}>
                    <i data-eva="alert-circle-outline" data-eva-fill="#F00"/>
            </div>
            
        </div>
    }
}