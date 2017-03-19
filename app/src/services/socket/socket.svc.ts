import {async, register} from 'platypus';
import BaseService from '../base/base.svc';
import * as socketIo from 'socket.io-client';

let SERVER_URL = 'http://localhost:8080';

export default class SocketService extends BaseService {

}

register.injectable('socket-svc', SocketService, ['BaseService']);
