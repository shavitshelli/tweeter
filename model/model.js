let posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't worry second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]


class Tweeter {

    constructor(){
        this._posts = posts
        this._postIdCounter = posts.length
        this._commentIdCounter = this._countComments()
    }

    _countComments(){
        return this._posts.reduce((acc,p) => {
            let commentsCount = p.comments.length
            acc+=commentsCount
            return acc
        },0)
    }

    getPosts(){
        return this._posts
    }

    addPost(text){
        this._postIdCounter++
        this._posts.push({
            text:text,
            id:'p'+ this._postIdCounter,
            comments: [],
        })
    }

    removePost(postID){
        this._posts = this._posts.filter(p => p.id != postID)
    }

    addComment(postID, text){
        this._commentIdCounter++
        let newComment = { id: "c"+ this._commentIdCounter, text: text }
        this._posts.find(p => p.id == postID).comments.push(newComment)
    }

    removeComment(postID, commentID){
        let postToRemoveAComment = this._posts.find(p =>p.id == postID )
        postToRemoveAComment.comments = postToRemoveAComment.comments.filter(c => c.id != commentID)
    }

}

const tweeter = new Tweeter();

// Test adding a post
tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());
// Should add: {text: "This is my own post!", id: "p3", comments: []}

// Test removing a post
tweeter.removePost("p1");
console.log(tweeter.getPosts());
// Should only have two posts left

// Test adding comments
tweeter.addComment("p3", "Damn straight it is!");
tweeter.addComment("p2", "Second the best!");
console.log(tweeter.getPosts());

// Test removing comments
tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());
