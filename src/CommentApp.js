/**
 * Created by lau on 2017/7/3.
 */
import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }
    render(){
        return (
            <div className="wrapper">
                <CommentInput/>
                <CommentList
                    coments= {this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp