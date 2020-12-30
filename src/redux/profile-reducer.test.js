import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'hi? how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 30},
    ],
};


it('leghht post should be increment', () => {
    //1. test data
    let action = addPostActionCreator("Vlad")


    //2. action
    let newState = profileReducer(state, action)

    //3. expectation

    expect(newState.posts.length).toBe(3);



});


it('message of post should be', () => {
    //1. test data
    let action = addPostActionCreator("Vlad")


    //2. action
    let newState = profileReducer(state, action)

    //3. expectation

    expect(newState.posts[2].message).toBe("Vlad");

});

it('after deletinf of message should be decrement', () => {
    //1. test data
    let action = deletePost(1);


    //2. action
    let newState = profileReducer(state, action)

    //3. expectation

    expect(newState.posts.length).toBe(1);

});

