import {register} from 'platypus';
import {User} from '../user/user.model'

export default class SensorText{
    constructor(public from: User, public content: string){
        
    }
}

register.injectable('sensortext-mdl', SensorText, ['User']);
