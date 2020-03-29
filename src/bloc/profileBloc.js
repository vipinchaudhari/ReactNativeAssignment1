import * as rxjs from 'rxjs'
import { WEATHER_API, provide_city_name } from '../utils/Constant'
import { AsyncStorage } from 'react-native'
//initialize the subject with initial value
var profileInfo = new rxjs.BehaviorSubject({ name: 'Madeline Watson', profession: 'Model, Actress', availability: { availableFor: 'Available for paid photo shoot', place: 'Miami Beach, FL', day: '20', month: 'SEPETEMBER' }, booking: { status: 'Booked', place: 'Municipio, Rome', day: '21', month: 'OCTOBER', distance: '23.6 mi', time: '12.00 - 18.00' }, mapSnap: require('../icons/sample_map.jpg') })
class ProfileBloc {
    getProfileInfo = () => {
        return profileInfo;
    }
}

export default ProfileBloc