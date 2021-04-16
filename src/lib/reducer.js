export const initialState = {
    user: null,
    page: null,
    project: null,
    projectTitle: null,
    projectImage: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_PAGE":
            return {
                ...state,
                page: action.page
            }
        case "SET_PROJECT":
            return {
                ...state,
                project: action.project,
                projectTitle: action.projectTitle,
                projectImage: action.projectImage
            }
        default: {
            return state;
        }
    }
}

export default reducer;
