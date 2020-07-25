import { ResponseStatus } from './response-status';
import { Terminal } from './terminal';

export class FSAModule {
    name: string;
    status: number;
    powered: boolean;
    terminal: Terminal;
}
