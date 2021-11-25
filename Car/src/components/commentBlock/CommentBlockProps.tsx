interface CommentBlockProps {
    commentHeader?: string
    initialComment: string
    placeholder?: string
    setComments: (value: string) => void,
    containerStyle?: object
}

export default CommentBlockProps;
