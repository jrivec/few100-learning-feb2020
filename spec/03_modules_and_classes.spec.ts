// import { Employee, PI, isEven, Contractor } from './hr';
import * as fromHr from './hr';

describe('modules and classes ', () => {
    it('creating an employee', () => {
        const bob = new fromHr.Employee('Bob', 'Smith', 120_000);

        expect(bob.firstName).toBe('Bob');
        expect(bob.lastName).toBe('Smith');
        expect(bob.fullName).toBe('Bob Smith');
        expect(bob.salary).toBe(120_000);

        bob.giveRaise(1_000);
        expect(bob.salary).toBe(121_000);

    });
    it('working with contractor', () => {
        const joe = new fromHr.Contractor('joe schmidt');

        expect(joe.name).toBe('joe schmidt');
    });
});
