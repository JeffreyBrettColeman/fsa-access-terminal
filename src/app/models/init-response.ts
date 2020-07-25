import { ResponseStatus } from './response-status';
import { Terminal } from './terminal';

export class InitResponse {
    responseStatus: ResponseStatus;
    terminalsLinked: Array<Terminal>;
}
