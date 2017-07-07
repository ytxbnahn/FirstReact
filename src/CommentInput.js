/**
 * Created by lau on 2017/7/3.
 */
import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { addComment } from './reducers/comments'

class CommentInput extends Component{
    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.state={
            username: '',
            content: '',
            createdTime: null
        }
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmitComment(){
        if(!this.state) return
        if(!this.state.username) return alert('请输入用户名')
        if(!this.state.content) return alert('请输入评论内容')
        this.setState({
            createdTime: +new Date()
        })
        this.setState((prevState) => {
            console.log('----------'+JSON.stringify(prevState))
            const { comments } = this.props
            const newComments = [...comments, prevState]

            localStorage.setItem('comments', JSON.stringify(newComments))
            console.log('+++++++++++'+JSON.stringify(newComments))
            if(this.props.onSubmit){
                console.log(11111)
                this.props.onSubmit({...prevState})
            }// 上一个 setState 的返回是 count 为 0，当前返回 1
        })
        this.setState({
            content: ''  // 上一个 setState 的返回是 count 为 1，当前返回 3
        })
    }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.username}
                               onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content}
                                  onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmitComment.bind(this)}>提交</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(CommentInput)