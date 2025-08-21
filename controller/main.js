import { Tweeter } from "../model/model.js";
import { Render } from "../view/render.js";


const t = new Tweeter();
const r = new Render()

// This should render the initial dummy data
r.renderPosts(t.getPosts());

document.querySelector("#twit").addEventListener('click',()=>{
    const newPost = document.querySelector('#post').value
    t.addPost(newPost)
    r.renderPosts(t.getPosts());
    document.querySelector('#post').value = ''
})

document.addEventListener('click' ,(e) => {
    if(e.target.classList.contains('delete')){
        const postID = e.target.dataset.id
        t.removePost(postID)
        r.renderPosts(t.getPosts());
    }
})
document.addEventListener('click' ,(e) => {
    if(e.target.classList.contains('delete-comment')){
        const postID = e.target.parentElement.parentElement.parentElement.dataset.id
        const commentID = e.target.dataset.id
        t.removeComment(postID,commentID)
        r.renderPosts(t.getPosts());
    }
})