import { ResponseStatus } from './response-status';
import { Terminal } from './terminal';

export class LoginResponse {
    responseStatus:ResponseStatus;
    terminalsLinked: Array<Terminal>;
}
