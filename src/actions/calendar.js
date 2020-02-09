import { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY } from './types'

// export const sunday = () =>
// {
//     return {
//         type: SUNDAY,
//         payload: 'Private Lessons',
//     }
// }

export const sunday = () => {
    return {
        type: SUNDAY,
        day: 'Sunday',
        time1_title: '******',
        time1: 'Private Lessons'
    }
}

export const monday = () => {
    return {
        type: MONDAY,
        day: 'Monday',
        time1_title: 'Adult Beginning',
        time1: '11:00 am - 1:00 pm',
        time2_title: 'Beginning Juniors',
        time2: '5:30 pm - 6:30 pm',
        time3_title: 'Advanced Juniors',
        time3: '6:30 pm - 7:30 pm',
        time4_title: 'Adult Advanced Floor 1',
        time4: '7:30 pm - 8:30 pm',
        time5_title: 'Adult Advanced Floor 2',
        time5: '7:30 pm - 8:30 pm'
    }
}

export const tuesday = () => {
    return {
        type: TUESDAY,
        day: 'Tuesday',
        time1_title: 'Reserved for Private Lessons',
        time1: '11:00 am - 3:00 pm',
        time2_title: 'Junior Pee Wee Advanced',
        time2: '5:30 pm - 6:30 pm',
        time3_title: 'Family Beginners',
        time3: '6:30 pm - 7:30 pm',
        time4_title: 'Family Advanced',
        time4: '7:30 pm - 8:30 pm'
    }
}

export const wednesday = () => {
    return {
        type: WEDNESDAY,
        day: 'Wednesday',
        time1_title: 'Adult Beginning',
        time1: '11:00 am - 1:00 pm',
        time2_title: 'Beginning Juniors',
        time2: '5:30 pm - 6:30 pm',
        time3_title: 'Advanced Juniors',
        time3: '6:30 pm - 7:30 pm',
        time4_title: 'Adult Advanced Floor 1',
        time4: '7:30 pm - 8:30 pm',
        time5_title: 'Adult Advanced Floor 2',
        time5: '7:30 pm - 8:30 pm'
    }
}

export const thursday = () => {
    return {
        type: THURSDAY,
        day: 'Thursday',
        time1_title: 'Reserved for Private Lessons',
        time1: '11:00 am - 3:00 pm',
        time2_title: 'Junior Pee Wee Advanced',
        time2: '5:30 pm - 6:30 pm',
        time3_title: 'Family Beginners',
        time3: '6:30 pm - 7:30 pm',
        time4_title: 'Family Advanced',
        time4: '7:30 pm - 8:30 pm'
    }
}

export const friday = () => {
    return {
        type: FRIDAY,
        day: 'Friday',
        time1_title: 'Adult Beginners & Advanced',
        time1: '11:00 am - 1:00 pm',
        time2_title: 'Beginning Juniors',
        time2: '5:30 pm - 6:30 pm',
        time3_title: 'Advanced Juniors',
        time3: '6:30 pm - 7:30 pm',
        time4_title: 'Adult Beginners & Advanced',
        time4: '7:30 pm - 8:30 pm'
    }
}

export const saturday = () => {
    return {
        type: SATURDAY,
        day: 'Saturday',
        time1_title: 'Super Tots (4 & 5 Year Olds)',
        time1: '10:00 am - 11:00 am',
        time2_title: 'Super Tots (4 & 5 Year Olds)',
        time2: '11:00 am - 12:00 pm',
        time3_title: 'White Belt Juniors (Floor 1)',
        time3: '12:00 pm - 1:00 pm',
        time4_title: 'Yellow Belt Juniors (Floor 2)',
        time4: '12:00 pm - 1:00 pm',
        time5_title: 'Adult Advanced Floor 2',
        time5: '1:00 pm - 2:00 pm',
        time6_title: 'Adult Advanced Floor 1',
        time6: '2:00 pm - 3:00 pm',
        time7_title: 'Adult Advanced Floor 2',
        time7: '3:00 pm - 4:00 pm'
    }
}

