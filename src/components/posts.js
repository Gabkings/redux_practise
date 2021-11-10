import React, { Component } from 'react'

class Posts extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        console.log("Mounted")
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({posts: data}))
    }
    render() {
        // eslint-disable-next-line array-callback-return
        console.log(this.state.posts)
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ));
        return (
            <div>{postItems}</div>
        
        )
    }
}


export default Posts
