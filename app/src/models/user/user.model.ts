import {register} from 'platypus';

export default class User{
    constructor(public name: string) {

    }
}

register.injectable('user-mdl', User);
