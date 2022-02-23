import React from 'react';

//2.nac
// action.payload={
//     title:"",
//     id:""
// }

// 3.nac
// action.payload="Game Name"
// action.payload="Game id"

export const GameReducer = (state,action) => {

    console.log("u gamereduceru",action);
    switch (action.type) {
        case "ADD_GAME":
            return[...state,{
                title:action.payload.title,
                id:action.payload.id
            }];

            // return [...state,action.payload]

            // return [...state,{
            //     title:action.payload,
            //     id:Math.random()*10
            // }]
            case "UPDATE_GAME":
                return [...state].map(game=>(game.id===action.payload.id
                    ?{...game,title:action.payload.title}
                    :{...game}));
    case "DELETE_GAME":
        return [...state].filter(game=>game.id!==action.payload.id)
    default:
        return state;
    }
}