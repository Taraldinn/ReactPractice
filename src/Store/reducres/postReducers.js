


const initState = {

    post:[],
    length: 0,
    login: '',


}

function postReducer(state = initState, action){
//         action = {type: 'ADD_POST', payload: {id: 1, title: 'Post Title', body: 'Post Body'}}
//         action = {type: 'DELETE_POST', payload: 1}

// reducer is just a simple function that takes two arguments, state and action, and returns the next state.
// It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue) to reduce an array to a single value.
        // if (action.type === 'CREATE_POST'){
        //     return {
        //         ...state,
        //         post : state.post.concat(action.payload),
        //     } 

        // }
        // else if (action.type === 'UPDATE_POST'){

        // }
        // else if (action.type === 'DELETE_POST'){}
        // else {
        //     return state;
        // }

        switch (action.type) {
            case 'CREATE_POST':
                return{
                    ...state,
                    post: state.post.concat(action.payload),
                    
                }
            case 'UPDATE_POST':
                return{
                    ...state,

                }
            case 'DELETE_POST':
                return{
                    ...state,
                    
                }

            default:
                return state;
                
        }

}

// let testArray = [1,2,3,4,5]
// let testArray2 =[6,7,8,9,10]
// console.log(testArray.concat(testArray2));