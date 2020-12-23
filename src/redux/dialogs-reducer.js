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

}

  const  dialogsReducer = (state = initialState, action) => {




        switch (action.type) {

            case SEND_MESSAGE: {

                let body = action.newMessageBody;
                return  {...state,
                    messages: [ ...state.messages, {id: 6, message: body } ] }


            }
            default:
                return state;
        }


}

export const sendMessageCrator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer