import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi? how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 30},
            ],
            newPostText: "Dkfl"

        },

        dialogsPage: {
            messages:
                [{id: 1, message: 'Hi'},
                    {id: 2, message: 'how is your IT'},
                    {id: 3, message: 'YO'},
                    {id: 4, message: 'YO'},
                ],
            dialogs:
                [{id: 1, name: 'Сергей'},
                    {id: 2, name: 'Дмитрий'},
                    {id: 3, name: 'Юрий'},
                    {id: 4, name: 'Ильяс'},
                ],

            newMessageBody: ""

        },
        sitebar: {
            friends:
                [{id: 1, icon: 'https://i.ytimg.com/vi/DxgFgiVIJ0g/sddefault.jpg'},
                    {id: 2, icon: 'https://i.ytimg.com/vi/DxgFgiVIJ0g/sddefault.jpg'},
                    {id: 3, icon: 'https://i.ytimg.com/vi/DxgFgiVIJ0g/sddefault.jpg'},
                ]

        }

    },
    _callSubscriber() {
        console.log("State changed");
    },
    getState() {
        return this._state;
    },

    // addPost() {
    // let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0
    // }
    // this._state.profilePage.posts.push(newPost);
    // this._state.profilePage.newPostText = '';
    // this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    //
    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch: function (action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sitebar = sidebarReducer(this._state.sitebar, action)
        this._callSubscriber(this._state);


    }
}







export default store;
window.store = store;