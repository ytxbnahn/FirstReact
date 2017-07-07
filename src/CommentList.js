/**
 * Created by lau on 2017/7/3.
 */
import React, {Component, PropTypes} from 'react'
import Comment from './Comment'
import {connect} from 'react-redux'
import {initComments, deleteComment} from './reducers/comments'

class CommentList extends Component{
    static propTypes = {
        comments: PropTypes.array,
        initComments: PropTypes.func,
        onDeleteComment: PropTypes.func
    }
    componentWillMount () {
        this._loadComments();
    }


    handleDeleteComment (index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.comments,index)
        }
    }
    _loadComments() {
        this.props.initComments()
    }
    render() {
        return (
            <div>
                {
                    this.props.comments.map((element,index)=>{
                        console.log(JSON.stringify(element))
                        return (
                            <Comment key={index}
                                     index = {index}
                                     comment={element}
                                     onDeleteComment={this.handleDeleteComment.bind(this)}/>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state'+state.comment)
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initComments: () => {
            dispatch(initComments())
        },
        onDeleteComment: (comments, commentIndex) => {
            dispatch(deleteComment(comments, commentIndex))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList)