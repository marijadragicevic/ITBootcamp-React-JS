import React,{useReducer} from 'react';
import {GameReducer} from '../reducer/GamesReducer';

const initialState=[
    {title:"game1",id:1},
    {title:"game2",id:2}
];


const GameList = () => {
    const[state,dispatch]=useReducer(GameReducer,initialState);

    const handleAddGame=()=>{
        // setState===dispatch
        dispatch({
            type:"ADD_GAME",
            payload:{
                title:"Game3",id:"4"
            }
        });
    }

    const handleUpdateGameName=()=>{
        dispatch({
            type:"UPDATE_GAME",
            payload:{
                title:"updateGameName",id:"6"
            }
        })
    }

    return ( <div>GameList
        {state.map(game=><p key={game.id}>{game.title}</p>)}

        <button onClick={handleAddGame}>Add new Game</button>
        <button onClick={handleUpdateGameName}>Update Game</button>
    </div> );
}
 
export default GameList;