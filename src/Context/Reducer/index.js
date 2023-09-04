export const INITIAL_STATES = {
    list: [],
    DELETE_ITEM: [],
    TOGGLE_COMPLETE: [],
    // incomplete: 0,
}

export const reducerHandler = (state, action) => {
    switch (action.type) {
        case 'list':
            return {
                list: [...state.list, action.payload]
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                DELETE_ITEM: action.payload
            }
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                TOGGLE_COMPLETE: action.payload
            }
        // case 'incomplete':
        //     return {
        //         ...state,
        //         incomplete: action.payload
        //     }
    }
}