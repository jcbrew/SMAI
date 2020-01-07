import { QUESTION1, QUESTION2, QUESTION3, QUESTION4, QUESTION5, QUESTION6 } from '../actions/types'


const initialState = {
    //day: '', 
    question: "", 
    answer: ""
}

const faqReducer = (state = initialState, action) => {
    // let newState = {...state};

    switch (action.type) {
        case QUESTION1:
                return{...state, 
                    question: action.question, 
                    answer: action.answer
                };
        case QUESTION2:
            return{...state, 
                question: action.question, 
                answer: action.answer
            };
        case QUESTION3:
            return{...state, 
                question: action.question, 
                answer: action.answer
            };
        case QUESTION4:
            return{...state, 
                question: action.question, 
                answer: action.answer
            };
        case QUESTION5:
            return{...state, 
                question: action.question, 
                answer: action.answer
            };
        case QUESTION6:
            return{...state, 
                question: action.question, 
                answer: action.answer
            };
    }

    return state;
};

export default faqReducer;