


const initState => {

    post:[]

}

function postReducer(state = initState, action){
//         action = {type: 'ADD_POST', payload: {id: 1, title: 'Post Title', body: 'Post Body'}}
//         action = {type: 'DELETE_POST', payload: 1}

// reducer is just a simple function that takes two arguments, state and action, and returns the next state.
// It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue) to reduce an array to a single value.
        if (action.type === 'CREATE_POST'){
            return 
        }
        else if (action.type === 'UPDATE_POST'){}
        else if (action.type === 'DELETE_POST'){}
        else {
            return state;
        }

}