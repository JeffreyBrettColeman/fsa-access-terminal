import { Floor } from './floor';
import { FSAModule } from './fsamodule';
import { User } from './user';

export class Terminal {
    name: String;
    users: Array<User>;
    floor: Floor;
    presentUser: User;
    accessToModule:FSAModule;
    notes: string;
    instructions: String;
}
