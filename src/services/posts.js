import { posts as data } from "../data/posts";

//private
let posts = [...data];

export function getPosts() {
  //get all posts
  return [...posts];
}

export function getPostsByUser(userId) {
  //get all posts by userId
  return posts.filter((post) => post.userId === userId);
}

export function getPostById(id) {
  //get a single post by id
  return posts.find((post) => post.id === id);
}

export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
posts.unshift(post);
}

export function updatePostTitle(id, title) {
  //update post title
  posts = posts.map((post) => {
if (post.id === id) {
  return {
    ...post,
    ...title,
  };
}
return post;
  });
  
}

export function updatePostBody(id, body) {
  //update post body
  posts = posts.map((post) => {
    if (post.id === id) {
      return {
        ...post,
        ...body,
      };
    }
    return post;
      });
      
}

export function updatePost(id, posts1) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  posts = posts.map((post) => {
    if (post.id === id) {
      return {
        ...post,
        ...posts1,
      };
    }
    return post;
      });
      

}

export function deletePostBy(id) {
  //delete post by id
  posts = posts.filter((post) => post.id !== id);
  return posts;
}

export function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  posts = posts.filter((post) => post.userId !== userId);
  return posts;
}
