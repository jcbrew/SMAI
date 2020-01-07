
const initialState = {
    master: 'Default',
    text: 'Default'
}

const masterReducer = (state = initialState, action) => {
    // let newState = {...state};

    switch (action.type) {
        case 'KYAN':
                return{...state,master: 'Master Kyan', text: 'Text for Master Kyan'};
        case 'MOTOBU':
                return{...state, master: 'Master Motobu', text: 'Text for Master Motobu'};
        case 'MYAGI':
                return{...state, master: 'Master Myagi', text: 'Text for Master Myagi'};
        case 'SHIMIBUKU':
                return{...state, master: 'Master Shimibuku', text: 'Text for Master Shimibuku'};
        case 'CHAPMAN':
                return{...state, master: 'Master Chapman', text: 'Text for Master Chapman'};
        case 'UEZU':
                return{...state,master: 'Master Uezu',text: 'Angi Uezu was born January 3, 1935, in Chiyaranka City on the island of Saipan.  His father was 6th generation Okinawan of Sumarai lineage from Shuri, his ancestors served under the King of Okinawa in the city of Gushikawa. In the 1930\'s work on Okinawa was hard to find, so as a young man his father traveled to Saipan to find work in the sugar cane fields and start a better life.  While in Saipan his father found his first wife and the mother of Angi Uezu who was the third of four brothers.'};
        case 'NAGLE':
                return{...state, master: 'Master Nagle', text: 'Text for Master Nagle'};
        case 'NOXON':
                return{...state, master: 'Master Noxon', text: 'Text for Master Noxon'};
        case 'ADAMS':
                return{...state, master: 'Master Adams', text: 'Text for Master Adams'};
    }

    return state;
};

export default masterReducer;