import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           const state = store.getState();
//
//           const addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }
//
//           const onPostChange = (text) => {
//             const action = updateNewPostTextActionCreator(text);
//             store.dispatch(action);
//           }
//           return <MyPosts updateNewPostText={onPostChange}
//                           addPost={addPost}
//                           posts={state.profilePage.postsData}
//                           newPostText={state.profilePage.textArea}
//           />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.textArea
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
