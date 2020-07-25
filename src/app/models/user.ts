import { Terminal } from './terminal';

export class User {
    userName: string;
    passwordHash: string;
    presentTerminal: Terminal;
    terminals: Array<Terminal>;
}
