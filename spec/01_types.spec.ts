describe('Declaring Variables', () => {
    describe('using let', () => {
        it('unitialized let', () => {
            let x;
            x = 12;
            expect(x).toBe(12);
            x = 'Pizza';
            expect(x).toBe('Pizza');
        });
        it('using typed let', () => {
            let x: number;
            x = 12;
            expect(x).toBe(12);

            // x = 'Pizza';
            // expect(x).toBe('Pizza');
        });
        it('using initialized let', () => {
            let x = 12;
            expect(x).toBe(12);
            // x = 'Tacos';
            x = 42;
        });
    });
    describe('using const', () => {
        it('protects you from reasssigning variabls', () => {
            const minimumAge = 21;
            minimumAge = 12;

            const friends = ['A', 'B', 'C'];
            friends[0] = 'D';

            expect(friends).toEqual(['D', 'B', 'C']);

            const message = { from: 'stacey', note: 'Get Milk' };
            message.note = 'Get Soy Milk';
            // expect(message).toEqual({ stacey, 'Get Soy Milk'});

        });
    });
    describe('advanced types', () => {
        it('has union types', () => {
            let x: number | string;
            x = 12;
            x = 'puppy';
            expect(x).toBe('puppy');
        });
        it('type aliases', () => {
            type ThingWithLettersAndStuff = string;

            let name: ThingWithLettersAndStuff;
            name = 'Joe';
            type NumberOrString = number | string;
            type CreditCardNumber = string;
            interface Person {
                name: string;
                age: number;
                cc: CreditCardNumber;
            }

        });
    });
    describe('some of the built in types', () => {
        it('has numbers', () => {
            const n1 = 3;
            const n2 = 3.14;
            const n3 = 0xff;
            const n4 = 0o34567;
            const n5 = 0b01010101;
            const myPay = 1_888_888;
            let x: number;
            x = n1;
            x = n2;
            x = n3;
            x = n4;
            x = n5;
            x = myPay;


        });
        it('has strings', () => {
            const s1 = 'This is a string';
            // tslint:disable-next-line: quotemark
            const s2 = "Double Quote";

            const s3 = 'She said "Ok"';
            // tslint:disable-next-line: quotemark
            const s4 = "The name is Flanner O'Connor";

            const s5 = 'It is Four O\'Clock';
        });
        it('template strings', () => {
            // these are back-tick delimted
            const s1 = `this is whatever`;
            const s2 = `this is whatever;
        multi line string
            `;
            const age = 50;
            const s3 = 'The name is ' + s1 + ` and the age is ` + age + `.`;
            const s4 = `The name is ${s1} and the age is ${age}.`;
            expect(s3).toEqual(s4);


        });
        it('what is so bad about the var keyword', () => {
            const age = 27;

            if (age >= 18) {
                const message = 'Old Enough';
            }

            expect(message).toBe('Old Enough');
        });
    });
    describe('arrays', () => {
        it('has a literal syntax', () => {
            const friends = ['a', 'b', 'c'];
            const someCrazyArray = [1, 2, 'tacos', ['bread', 'wine'], friends];
            expect(friends[0]).toBe('a');
            friends[1] = 'dave';
            expect(friends[1]).toBe('dave');
            // friends[2] = 99;  no no
            const what = friends[99]; // undefined
            expect(what).toBeUndefined();
            friends[999] = 'ted';
            expect(friends[999]).toBe('ted');
        });
        it('more on declaring them', () => {
            let favoriteNumbers: number[];
            let favoriteNumbers2: Array<number>;
            let stuff: (number | string)[];
            let stuff2: Array<number | string>;
            stuff2 = [12, 'tacos'];
            stuff2[1].toUpperCase();
        });
    });
    describe('solving rpobems with tuples', () => {
        it('firstb the problem without a tuple', () => {
            function formatName(first: string, last: string): { fullName: string, numberOfLetters: number } {
                const result = `${last}, ${first}`;
                return {
                    fullName: result,
                    numberOfLetters: result.length
                };
            }

            const formattingResponse = formatName('Han', 'Solo');
            expect(formattingResponse.fullName).toBe('Solo, Han');
            expect(formattingResponse.numberOfLetters).toBe(9);
            const { fullName: hisName } = formatName('kylo', 'ren'); // object destructuring
            // when an object returns many fields of which we only want a few specific fields.
            expect(hisName).toBe('ren, kylo');

            const movie = {
                title: 'jaws',
                director: 'spielberg',
                yearREleased: 1977
            };

            const { title, director: by } = movie;
            expect(title).toBe('jaws');
            expect(by).toBe('spielberg');

        });
        it('doing with tuple', () => {
            function formatName(first: string, last: string): [string, number] {
                const result = `${last}, ${first}`;
                return [result, result.length];
            }

            const formattingResponse = formatName('Han', 'Solo');
            expect(formattingResponse[0]).toBe('Solo, Han');
            expect(formattingResponse[1]).toBe(9);

            const [name, letters] = formatName('kylo', 'ren');
            expect(name).toBe('ren, kylo');
            expect(letters).toBe(9);
        });
        it('array destructuring', () => {
            const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const [first, second, , fourth] = someNumbers;
            expect(first).toBe(1);
            expect(second).toBe(2);
            expect(fourth).toBe(4);

            const [head, ...rest] = someNumbers;
            expect(first).toBe(1);
            expect(rest).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);

        });
        it('object destructuring', () => {
            const person = {
                firstName: 'ben',
                lastName: 'solo',
                job: 'jedi trainee'
            };

            const { firstName, lastName: ln, ...rest } = person;
            expect(firstName).toBe('ben');
            expect(ln).toBe('solo');
            expect(rest).toEqual({ job: 'jedi trainee' });

        });
        it('array spread operator', () => {
            const numbers = [1, 2, 3];
            const newNumbers = [0, ...numbers, 4];
            expect(newNumbers).toEqual([0, 1, 2, 3, 4]);
        });

        it('object spread', () => {
            const movie = {
                title: 'jaws',
                director: 'spielberg',
                yearReleased: 1978
            };

            const movie2 = { ...movie, yearReleased: 1977 };
            expect(movie2).toEqual({
                title: 'jaws', director: 'spielberg', yearReleased: 1977
            });
        });
    });
    describe('object literasl', () => {
        it('has them', () => {
            interface Person {
                name: string;
                department: string;
                salary: number;
                manager?: string;
            }

            const bob: Person = {
                name: 'Bob Smith',
                department: 'QA',
                salary: 100_000,
                manager: 'Mary'
            };

            const mary: Person = {
                name: 'Mary Jones',
                department: 'CEO',
                salary: 80_000
            };

            function printEmployeeInfo(p: Person) {
                let prelude = `person ${p.name} works in ${p.department} and makes ${p.salary}`;
                if (p.manager) {
                    prelude += ` and they are managed by ${p.manager}`;
                } else {
                    prelude += ` and they have no manager`;
                }
                console.log(prelude);
            }
            printEmployeeInfo(bob);
            printEmployeeInfo(mary);

        });
        it('has truthy ad falsy value', () => {
            expect('tacos').toBeTruthy();
            expect('').toBeFalsy();
            expect(0).toBeFalsy();
            expect(-1).toBeTruthy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();

        });
        it('has duck typing', () => {
            interface MessageHavingThing { message: string; }
            function logMessage(thingy: MessageHavingThing) {

                console.log('Got: ' + thingy.message);
            }
            logMessage({ message: 'Call Your Mom' });

            // logMessage();

            const book = {
                title: 'Clean your garage',
                message: 'A clean garage is a sign of a healthy mind'
            };

            logMessage(book);

        });
    });
});

