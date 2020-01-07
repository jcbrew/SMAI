import { combineReducers } from 'redux'
import masterReducer from './masters'
import calendarReducer from './calendar'
import faqReducer from './faq'

export default combineReducers({
    masterReducer,
    calendarReducer,
    faqReducer
})