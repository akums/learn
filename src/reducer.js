
import firstMan from './Components/Review/lll.jpg';
import secondMan from './Components/Review/kkk.jpg';
import onlyWoman from './Components/Review/smilinglady.jpg';

const initialState = {
    app_name: 'fCleaning',
    info: [
        {
            feedback: "Simply the best. Better than all the rest. I'd recommend this company to everyone.",
            profile: firstMan,
            name: 'Harvey Ingram',
            position: 'Customer',
            id: 1
        },
        {
            feedback: 'Finally, i have found a cleaning agent that covers a bootstrapped startup. They launch in days.',
            profile: secondMan,
            name: 'Leo Morton',
            position: 'Marketer',
            id: 2
        },
        {
            feedback: 'You made it so simple . My new home so enjoying and conducive to reside, than initial times.',
            profile: onlyWoman,
            name: 'Catherine Simmons',
            position: 'Customer',
            id: 3
        }
    ],
    name: 'john'
}

const reducer = (state = initialState, action)=>{

    if(action.type === 'swapName'){
        return {
            ...state,
            name: action.new_name
        }
    }

    return state;
}

export default reducer;