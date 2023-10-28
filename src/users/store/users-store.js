const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async () => {};

const loadPreviousPage = async () => {};

//TODO: implementar
const onUserChanged = () => {};

const reloadPage = async () => {
    throw new Error('No implementado');
};

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
};
