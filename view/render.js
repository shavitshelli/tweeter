
class Render{
    constructor(){
        
    }

    renderPosts(posts){
        const postsDiv = document.querySelector("#posts")
        this._emptyPosts(postsDiv)
        this._createPosts(postsDiv,posts)
    }
    
    _emptyPosts(postsDiv){
        postsDiv.innerHTML = ""
    }
    
    _createPosts(postsDiv,posts = []){
        posts.forEach(p=>{
            const newPostDiv = this._createDivWithClassNameAndDataID("post",p.id)
            const postText = this._createDivWithClassNameAndDataID("post-text", "", p.text)
            const deletePost = this._createDivWithClassNameAndDataID("delete", p.id,"delete post")
            const commentsDiv = this._createDivWithClassNameAndDataID("comments")
            this._appendCommentsToCorrectDiv(commentsDiv,p.comments)
            
            const commentInputDiv = this._createDivWithClassNameAndDataID("comment-input")
            const commentInput = this._createCommentInput()
            const commentButton = this._createCommentButton()

            

            commentInputDiv.appendChild(commentInput)
            commentInputDiv.appendChild(commentButton)

            this._appendAll(newPostDiv ,postText ,commentsDiv,commentInputDiv,deletePost)
      
            deletePost.addEventListener('click', ()=>{
                
            })
            
            postsDiv.appendChild(newPostDiv)


            this._addStylesPosts(newPostDiv,postText,deletePost,commentInput,commentButton,commentInputDiv)
        })
    }

    _addStylesPosts(newPostDiv,postText,deletePost,commentInput,commentButton,commentInputDiv){
        this._styler = new Styler()
        this._styler.stylePostDiv(newPostDiv)
        this._styler.stylePostText(postText)
        this._styler.stylePostDelete(deletePost)
        this._styler.styleCommentInput(commentInput)
        this._styler.styleCommentButton(commentButton)
        this._styler.styleCommentInputDiv(commentInputDiv)
        
    }
    _addStylesComments(newCommentDiv,deleteComment){
        this._styler = new Styler()
        this._styler.styleCommentDiv(newCommentDiv)
        this._styler.styleDeleteComment(deleteComment)
        
    }

    _appendAll(newPostDiv ,postText ,commentsDiv,commentInputDiv,deletePost){
        newPostDiv.appendChild(postText)
        newPostDiv.appendChild(commentsDiv)
        newPostDiv.appendChild(commentInputDiv)
        newPostDiv.appendChild(deletePost)
    }

    _createCommentInput(){
        const commentInput = document.createElement('input')
        commentInput.setAttribute('placeholder', 'Got something to say?')
        commentInput.setAttribute('class', 'comment-input')
        return commentInput
    }

    _createCommentButton(){
        const commentButton = document.createElement('button')
        commentButton.setAttribute('class', 'comment-button')
        commentButton.innerHTML = 'Comment'
        return commentButton
    }
    
    _appendCommentsToCorrectDiv(commentsDiv,comments = []){
        comments.forEach(c=>{
            const newCommentDiv = this._createDivWithClassNameAndDataID("comment",c.id)
            const newCommentText = this._createDivWithClassNameAndDataID("comment-text","",c.text)
            const deleteComment = this._createDivWithClassNameAndDataID("delete-comment",c.id,"X")
            newCommentDiv.appendChild(deleteComment)
            newCommentDiv.appendChild(newCommentText)
            this._addStylesComments(newCommentDiv,deleteComment)
            commentsDiv.appendChild(newCommentDiv)
        })
    }
    
    _createDivWithClassNameAndDataID(className,dataID= "",innerText = "" ){
        const newDiv = document.createElement("div")
        newDiv.setAttribute('class',className)
        dataID ? newDiv.setAttribute('data-id',dataID) : ""
        innerText ? newDiv.innerHTML = innerText : ""
        return newDiv
    }
}


class Styler {
    constructor(){}
    stylePostDiv(postDiv){
        postDiv.style.width = '100%'
        // postDiv.style.height = '300px'
        postDiv.style.border = '1px solid black'
        postDiv.style.borderRadius = '6px'
        postDiv.style.marginBottom = '1rem'
        postDiv.style.padding = '1rem'
        postDiv.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)'
        postDiv.style.display = 'flex'
        postDiv.style.flexDirection = 'column'
        postDiv.style.justifyContent = 'center'
        postDiv.style.minHeight = 'fit-content';
        postDiv.style.height = 'auto';
        postDiv.style.overflow = 'visible';
    }

    stylePostText(postText){
        postText.style.fontSize = '1.2rem'
        postText.style.fontWeight = 'bold'
        postText.style.marginBottom = '1rem'

    }

    stylePostDelete(deletePost){

        deletePost.style.color = 'white' 
        deletePost.style.backgroundColor = 'red' 
        deletePost.style.borderRadius = '6px'
        deletePost.style.width = '100px'
        deletePost.style.height = '40px'
        deletePost.style.border = 'none'
        deletePost.style.cursor = 'pointer'
        deletePost.style.fontSize = '14px'
        deletePost.style.fontWeight = 'bold'
        deletePost.style.display = 'flex'
        deletePost.style.alignItems = 'center'
        deletePost.style.justifyContent = 'center'
        deletePost.style.transition = 'all 0.3s ease'
        deletePost.addEventListener('mouseenter', () => {
            deletePost.style.backgroundColor = '#ff4444';
            deletePost.style.transform = 'scale(1.1)';
        });
        
        deletePost.addEventListener('mouseleave', () => {
            deletePost.style.backgroundColor = 'red';
            deletePost.style.transform = '';
        });
    }

    styleCommentDiv(commentsDiv){
        commentsDiv.style.display = 'flex'
        commentsDiv.style.marginBottom = '1rem'
    }

    styleDeleteComment(deleteComment){
        deleteComment.style.color = 'red' 
        deleteComment.style.fontWeight = 'bold'
        deleteComment.style.marginRight = '1rem'

    }

    styleCommentInput(commentInput){
        commentInput.style.width = '15rem'
        commentInput.style.height = '2rem'
        commentInput.style.marginRight = '1rem'
    }
    styleCommentButton(commentButton){
        commentButton.style.width = '5rem'
        commentButton.style.height = '2rem'
        commentButton.addEventListener('mouseenter', () => {
            commentButton.style.backgroundColor ='rgb(233, 234, 226)';
            commentButton.style.transform = 'scale(1.1)';
        });
        
        commentButton.addEventListener('mouseleave', () => {
            commentButton.style.backgroundColor = '';
            commentButton.style.transform = '';
        });
    }

    styleCommentInputDiv(commentInputDiv){
        commentInputDiv.style.marginBottom = '1rem'
    }

}


export { Render }
