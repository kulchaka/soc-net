import {rerenderTree} from "../render";


const state = {
  dialogsPage: {
    dialogsData: [
      {
        id: '01',
        name: 'John'
      },
      {
        id: '02',
        name: "Andrii"
      },
      {
        id: '03',
        name: "Peter"
      }
    ],
    messagesData: [
      {
        id: '01',
        message: 'Hello'
      },
      {
        id: '02',
        message: "How are you?!"
      },
      {
        id: '03',
        message: "Yo!"
      }
    ]
  },
  profilePage: {
    postsData: [
      {
        id: '01',
        text: 'Hello, how are you?',
        likesCount: '2'
      },
      {
        id: '02',
        text: "Hi, this is my first POST ))",
        likesCount: '5'
      },
      {
        id: '03',
        text: "Bye!"
      }
    ],
    textArea: 'enter text'
  }

}

export const addPost = (text) => {
  const newPost = {
    id: '04',
    text: state.profilePage.textArea,
    likesCount: '0'
  }
  state.profilePage.postsData.push(newPost)
  state.profilePage.textArea = ''
  rerenderTree(state)
}

export const postChange = (text) => {
  state.profilePage.textArea = text;
  rerenderTree(state)
}

export default state;
