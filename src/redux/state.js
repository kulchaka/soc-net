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
  _callSubscriber() {
    console.log('state chg')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  addPost() {

  },
  postChange(text){

  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: '04',
        text: this._state.profilePage.textArea,
        likesCount: '0'
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.textArea = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'POST-UPDATE') {
      this._state.profilePage.textArea = action.text;
      this._callSubscriber(this._state)
    }
  }
}

export default store;
window.store = store
