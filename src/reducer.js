
export const initialState = {
    basket:[],
}

 export const getTotal = (basket) => basket?.reduce((sum, current)=> sum + current.price ,0 )

const reducer = (state=initialState, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket,action.item ]
            };
        case 'REMOVE_FROM_BASKET':
                // ...state,
                // basket: state.basket.filter(item=> item.id !== action.id),
            const index = state.basket.findIndex((basketitem)=> basketitem.id === action.id);
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index, 1);
            } else{
                console.warn( `can remove product { id ${action.id}} as its not in basket`)
            }
            return{
               ...state,
               basket: newBasket 
            }
        default:
            return state;
    }
}



export default reducer;