// let rerenderTree = () => {
//   console.log('state chg')
// }

// const state = {
//   dialogsPage: {
//     dialogsData: [
//       {
//         id: '01',
//         name: 'John'
//       },
//       {
//         id: '02',
//         name: "Andrii"
//       },
//       {
//         id: '03',
//         name: "Peter"
//       }
//     ],
//     messagesData: [
//       {
//         id: '01',
//         message: 'Hello'
//       },
//       {
//         id: '02',
//         message: "How are you?!"
//       },
//       {
//         id: '03',
//         message: "Yo!"
//       }
//     ]
//   },
//   profilePage: {
//     postsData: [
//       {
//         id: '01',
//         text: 'Hello, how are you?',
//         likesCount: '2'
//       },
//       {
//         id: '02',
//         text: "Hi, this is my first POST ))",
//         likesCount: '5'
//       },
//       {
//         id: '03',
//         text: "Bye!"
//       }
//     ],
//     textArea: 'enter text'
//   }
//
// }

// export const addPost = () => {
//   const newPost = {
//     id: '04',
//     text: state.profilePage.textArea,
//     likesCount: '0'
//   }
//   state.profilePage.postsData.push(newPost)
//   state.profilePage.textArea = ''
//   rerenderTree(state)
// }

// export const postChange = (text) => {
//   state.profilePage.textArea = text;
//   rerenderTree(state)
// }

// export const subscribe = (observer) => {
//   rerenderTree = observer
// }


//store - OOP

let store = {
  _state: {
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

  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state chg')
  },
  addPost() {
    const newPost = {
      id: '04',
      text: this._state.profilePage.textArea,
      likesCount: '0'
    }
    this._state.profilePage.postsData.push(newPost)
    this._state.profilePage.textArea = ''
    this._callSubscriber(this._state)
  },
  postChange(text){
    this._state.profilePage.textArea = text;
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

}

export default store;
window.store = store
