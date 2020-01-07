import { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY } from '../actions/types'


const initialState = {
    day: '', 
    time1_title: " ", 
    time1: " ", 
    time2_title: " ", 
    time2: " ", 
    time3_title: " ", 
    time3: " ", 
    time4_title: " ", 
    time4: " ", 
    time5_title: " ", 
    time5: " ", 
    time6_title: " ", 
    time6: " ",
    time7_title: " ", 
    time7: " "
}

const calendarReducer = (state = initialState, action) => {
    // let newState = {...state};

    switch (action.type) {
        case SUNDAY:
                return{...state, 
                    day: 'Sunday', 
                    time1_title: action.time1_title, 
                    time1: action.time1,
                    time2_title: '',
                    time2: '',
                    time3_title: '',
                    time3: '',
                    time4_title: '',
                    time4: '',
                    time5_title: '',
                    time5: '',
                    time6_title: '',
                    time6: '',
                    time7_title: '',
                    time7: ''
                };
        case MONDAY:
                return{...state, 
                    day: 'Monday', 
                    time1_title: action.time1_title, 
                    time1: action.time1, 
                    time2_title: action.time2_title, 
                    time2: action.time2, 
                    time3_title: action.time3_title, 
                    time3: action.time3, 
                    time4_title: action.time4_title, 
                    time4: action.time4, 
                    time5_title: action.time5_title, 
                    time5: action.time5,
                    time6_title:'',
                    time6:'',
                    time7_title:'',
                    time7:''

                };
        case TUESDAY:
                return{...state, 
                    day: 'Tuesday', 
                    time1_title: action.time1_title, 
                    time1: action.time1, 
                    time2_title: action.time2_title, 
                    time2: action.time2, 
                    time3_title: action.time3_title, 
                    time3: action.time3, 
                    time4_title: action.time4_title, 
                    time4: action.time4, 
                    time5_title: '', 
                    time5: '',
                    time6_title:'',
                    time6:'',
                    time7_title:'',
                    time7:''
                };
        case WEDNESDAY:
                return{...state, 
                    day: 'Wednesday', 
                    time1_title: action.time1_title, 
                    time1: action.time1, 
                    time2_title: action.time2_title, 
                    time2: action.time2, 
                    time3_title: action.time3_title, 
                    time3: action.time3, 
                    time4_title: action.time4_title, 
                    time4: action.time4, 
                    time5_title: action.time5_title, 
                    time5: action.time5,
                    time6_title:'',
                    time6:'',
                    time7_title:'',
                    time7:''
                };
        case THURSDAY:
                return{...state, 
                    day: 'Thursday', 
                    time1_title: action.time1_title, 
                    time1: action.time1, 
                    time2_title: action.time2_title, 
                    time2: action.time2, 
                    time3_title: action.time3_title, 
                    time3: action.time3, 
                    time4_title: action.time4_title, 
                    time4: action.time4,
                    time5_title: '', 
                    time5: '',
                    time6_title:'',
                    time6:'',
                    time7_title:'',
                    time7:''
                };
        case FRIDAY:
                return{...state, 
                    day: 'Friday', 
                    time1_title: action.time1_title, 
                    time1: action.time1, 
                    time2_title: action.time2_title, 
                    time2: action.time2, 
                    time3_title: action.time3_title, 
                    time3: action.time3, 
                    time4_title: action.time4_title, 
                    time4: action.time4,
                    time5_title: '', 
                    time5: '',
                    time6_title:'',
                    time6:'',
                    time7_title:'',
                    time7:''
                };
                
        case SATURDAY:
                return{...state, 
                    day: 'Saturday', 
                    time1_title: action.time1_title, 
                    time1: action.time1, 
                    time2_title: action.time2_title, 
                    time2: action.time2, 
                    time3_title: action.time3_title, 
                    time3: action.time3, 
                    time4_title: action.time4_title, 
                    time4: action.time4, 
                    time5_title: action.time5_title, 
                    time5: action.time5, 
                    time6_title: action.time6_title, 
                    time6: action.time6, 
                    time7_title: action.time7_title, 
                    time7: action.time7
                };
    }

    return state;
};

export default calendarReducer;