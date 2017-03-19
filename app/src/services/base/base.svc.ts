import {async, Utils, register} from 'platypus';
import SensorText from '../../models/sensortext/sensortext.model';

export default class BaseService {
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };

	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;

    host: string = 'my-host';
}
register.injectable('base-svc', BaseService, ['SensorText']);
