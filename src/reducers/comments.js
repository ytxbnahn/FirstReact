/**
 * Created by lau on 2017/7/4.
 */
const INIT_COMMNETS = 'INIT_COMMNETS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export default function (state, action) {
    if(!state) {
        state = { comments:[] }
    }
    switch (action.type) {
        case INIT_COMMNETS:
            return { comments: action.comments }
        case ADD_COMMENT:
            console.log('commentddd'+JSON.stringify(action.comment))
            return {
                comments: [...state.comments, action.comment]
            }
        case DELETE_COMMENT:
            return{
                comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex+1)
                ]
            }
        default:
            return state
    }
}

export const initComments = () => {
    let comments = localStorage.getItem('comments')
    comments = comments? JSON.parse(comments) : []
    return {type: INIT_COMMNETS, comments }
}

export const addComment = (comment) => {
    console.log('comment'+JSON.stringify(comment))
    return { type: ADD_COMMENT, comment }
}

export const deleteComment = (comments,commentIndex) => {
    const newComments = [
        ...comments.slice(0,commentIndex),
        ...comments.slice(commentIndex+1)
    ]
    localStorage.setItem('comments', JSON.stringify(newComments))
    return { type: DELETE_COMMENT, commentIndex }
}