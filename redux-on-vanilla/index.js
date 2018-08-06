// 1. store
// 2. action
// 3. reducer

const createStore() {
    let state;
    let listeners = [];
    const getState = () => state;
    const subscribe = list => {
        listeners.push(list)
        return () => {
            listeners = listeners.filter(l => l !== list);
        };
    };
    const dispatch = action => {
        state = todos(state, action);

        listeners.forEach(list => list())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}