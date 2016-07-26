import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.invocation = new XMLHttpRequest()
    this.base_url = 'https://www.govoid.es/wp-json/wp/v2/posts'
    this.state = {};
    this.state.posts = [];
  }

  handler() {
    const resp = JSON.parse(this.response);
    const output_cont = document.getElementById("output_list");
    const postArray = []

    resp.forEach(
      function(element) {
        postArray.push({title: element.title.rendered, id: element.id} )
        }
    );

    this.setState({ posts: postArray });
  }

  fetch_posts() {
    const url = (arguments[0]? this.base_url + arguments[0] : this.base_url)
    const invocation = this.invocation

    if(!invocation) {
      alert('Woops, there was an error creating the request.');
      return;
    }

    invocation.open('GET', url, true);
    // Response handlers.
    invocation.onload = this.handler
    invocation.setState = this.setState.bind(this)
    invocation.onerror = function() {
      alert('Woops, there was an error making the request.');
      return;
    };

    invocation.send();
  }

  render() {
    const fetch1 = () => {this.fetch_posts('?per_page=5')};
    const fetch2 = () => {this.fetch_posts('?per_page=5&categories=2375')};
    return (
      <div>
        <Button name="All posts" click={fetch1}></Button>
        <Button name="Gadget posts" click={fetch2}></Button>
        <PostList id="output_list" list={this.state.posts}></PostList>
      </div>
    );
  }
}

const Button = (props) => (
  < button onClick={props.click} > {props.name} </button>
)

const Post = (props) => (
  <li>{props.title}</li>
)

const PostList = (props) => (
  <ul id={props.id}>
    {props.list.map(post => (
      <Post title={post.title} key={post.id}></Post>
    ))}
  </ul>
)

export default App;
