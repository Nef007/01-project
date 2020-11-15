const UPDATE_NEW_MESSAGE_BODY= 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE= 'SEND_MESSAGE';

let initialState = {
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
}

  const  dialogsReducer = (state = initialState, action) => {

        switch (action.type) {
            case UPDATE_NEW_MESSAGE_BODY: {
                let copyState = {...state}
                copyState.newMessageBody = action.body;
                return copyState
            }
            case SEND_MESSAGE: {
                let copyState = {...state}
                 copyState.messages =[ ...state.messages]
                let body = copyState.newMessageBody;
                copyState.newMessageBody = '';
                copyState.messages.push({id: 6, message: body});
                return copyState
            }
            default:
                return state;
        }


}

export const sendMessageCrator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default dialogsReducer