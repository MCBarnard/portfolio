export const initialState = {
    user: null,
    page: null,
    project: null,
    intro: null,
    subText: null,
    projectImage: null,
    projectBannerImage: null,
    projectIntroParagraph: null,
    projectBodyText: null,
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
                intro: action.intro,
                subText: action.subText,
                projectImage: action.projectImage,
                projectBannerImage: action.projectBannerImage,
                projectIntroParagraph: action.projectIntroParagraph,
                projectBodyText: action.projectBodyText,
            }
        default: {
            return state;
        }
    }
}

export default reducer;
