import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi? how are you', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 30},
        ]
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
            ]
    },
    sitebar: {
        friends:
            [{id: 1, icon: 'https://i.ytimg.com/vi/DxgFgiVIJ0g/sddefault.jpg'},
                {id: 2, icon: 'https://i.ytimg.com/vi/DxgFgiVIJ0g/sddefault.jpg'},
                {id: 3, icon: 'https://i.ytimg.com/vi/DxgFgiVIJ0g/sddefault.jpg'},
            ]

    }

}

   export let addPost = (postMessage)=> {

        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0
        }
    state.profilePage.posts.push(newPost);
        rerenderEntireTree(state);

}

export default state