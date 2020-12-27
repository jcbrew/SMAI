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
        time1_title: 'Teens and Adults',
        time1: '11:00 am - 12:00 pm',
        time2_title: 'Teens and Adults',
        time2: '12:00 pm - 1:00 pm',
        time3_title: 'Beginner Juniors',
        time3: '5:30 pm - 6:30 pm',
        time4_title: 'Advanced Juniors',
        time4: '6:30 pm - 7:30 pm',
        time5_title: 'Teens and Adults',
        time5: '7:30 pm - 8:30 pm'
    }
}

export const tuesday = () => {
    return {
        type: TUESDAY,
        day: 'Tuesday',
        time1_title: 'Reserved for Private Lessons',
        time1: '11:00 am - 2:00 pm',
        time2_title: 'Advanced',
        time2: '5:30 pm - 6:30 pm',
        time3_title: 'Family Beginning/Advanced',
        time3: '6:30 pm - 7:30 pm',
        time4_title: 'Reserved for Private Lessons',
        time4: '7:30 pm - 8:30 pm',
        time5_title: '',
        time5: ''
    }
}

export const wednesday = () => {
    return {
        type: WEDNESDAY,
        day: 'Wednesday',
        time1_title: 'Teens and Adults',
        time1: '11:00 am - 12:00 pm',
        time2_title: 'Teens and Adults',
        time2: '12:00 pm - 1:00 pm',
        time3_title: 'Beginner Juniors',
        time3: '5:30 pm - 6:30 pm',
        time4_title: 'Advanced Juniors',
        time4: '6:30 pm - 7:30 pm',
        time5_title: 'Men and Womens Self-Defense*',
        time5: '7:30 pm - 8:30 pm'
    }
}

export const thursday = () => {
    return {
        type: THURSDAY,
        day: 'Thursday',
        time1_title: 'Reserved for Private Lessons',
        time1: '11:00 am - 2:00 pm',
        time2_title: 'Advanced',
        time2: '5:30 pm - 6:30 pm',
        time3_title: 'Family Beginner and Advanced',
        time3: '6:30 pm - 7:30 pm',
        time4_title: 'Reserved for Private Lessons',
        time4: '7:30 pm - 8:30 pm'
    }
}

export const friday = () => {
    return {
        type: FRIDAY,
        day: 'Friday',
        time1_title: 'Teen and Adults',
        time1: '11:00 am - 12:00 pm',
        time2_title: 'Teen and Adults',
        time2: '12:00 pm - 1:00 pm',
        time3_title: 'Beginner Juniors',
        time3: '5:30 pm - 6:30 pm',
        time4_title: 'Advanced Juniors',
        time4: '6:30 pm - 7:30 pm',
        time5_title: 'Men and Womens Self-Defense*',
        time5: '7:30 pm - 8:30 pm'
    }
}

export const saturday = () => {
    return {
        type: SATURDAY,
        day: 'Saturday',
        time1_title: 'Beginner Super Tots (4 & 5 Year Olds)',
        time1: '10:00 am - 11:00 am',
        time2_title: 'Advanced Super Tots (4 & 5 Year Olds)',
        time2: '11:00 am - 12:00 pm',
        time3_title: 'Beginner Juniors',
        time3: '12:00 pm - 1:00 pm',
        time4_title: 'Advanced Juniors',
        time4: '1:00 pm - 2:00 pm',
        time5_title: 'Family Beginner and Advanced',
        time5: '2:00 pm - 3:00 pm',
        time6_title: 'Special Class',
        time6: '3:00 pm - 4:00 pm',
        time7_title: '',
        time7: ''
    }
}

