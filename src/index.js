//Call all functions inside services and log updated value/s
import { getAllUsers, getUserById, updateUser,addUser, } from "./services/users";
import { getCommentById, getCommentsByPostId, updateCommentBody, deleteCommentById,
    addComment, getAllComments, comments,} from "./services/comments";
import { getPosts, getPostsByUser, getPostById, addPost,
    updatePostTitle, updatePostBody, updatePost,
    deletePostBy, deletePostsByUserId, } from "./services/posts";

import { generateId } from "./utils";

// tests

// console.log(getAllUsers());
// console.log(getUserById(2));
// updateUser(1, { name: "Dimple", username: "Marasigan", email: "roger@77.com", website: "hilde-edit.org" });
// console.log(getUserById(1));
// addUser({
//       id: generateId(),
//       name: "Dimple Miranda",
//       username: "KALM103119",
//       email: "dimps@october.biz",
//       address: {
//         street: "Kulas Lampur",
//         suite: "Apt. 546",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "-37.3159",
//           lng: "81.1496",
//         },
//       },
//     });
//     console.log(getAllUsers());
// console.log(getCommentById(3));
// console.log(getCommentsByPostId(8))
// console.log(getAllComments());

// updateCommentBody(7, { body: "New Body Content"});
// console.log(getCommentById(7));

// deleteCommentById(1);
// console.log(deleteCommentById(1));
// console.log(getAllComments());

// addComment({
//         postId: generateId(),
//         id: generateId(),
//         name: "Dimple",
//         email: "Dimple@candy.co.uk",
//         body: "Roll & roll",
//         });
//         console.log(getAllComments());

// console.log(getPosts());
// console.log(getPostsByUser(2));
// console.log(getPostById(2));

// addPost({
//       userId: generateId(),
//       id: generateId(),
//       title: "Add New Title",
//       body: "Added New Body ",
//     });
//     console.log(getPosts());

// updatePostTitle(4, { title: "A new Title" });
// console.log(getPostById(4));

// updatePostBody(5, { body: "Updated Body" });
// updatePostBody(6, { body: "Updated body " });
// console.log(getPostById(5));
// console.log(getPostById(6));

// updatePost(8, { title: "A Whole New World", body: "A new Chapter in my Life" });
// console.log(getPostById(8));

// console.log(deletePostBy(4));
// console.log(deletePostsByUserId(2));

