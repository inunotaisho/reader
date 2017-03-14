import {User} from './user.model';

export class SensorText {
    from: User;
    content: string;

    constructor(from: User, content: string){
        this.from = from; 
        this.content = content;
    }
}