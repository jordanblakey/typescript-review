interface UserInterface{
    name: string;
    email: string;
    age: number;
    // register();
    // payInvoice();
}

class User implements UserInterface {
    // Private restrained to scope
    name: string;
    // Protected restrained to scope and extending classes
    email: string;
    // accessible in the global scope
    public age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: '+this.name);
    }

    register(){
        console.log(this.name+' is now registered');
    }

    payInvoice(){
        console.log(this.name+ 'paid invoice');
    }
}

class Member extends User{
    id: number;

    constructor(id:number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);

// let john = new User('John Doe', 'jdoe@gmail.com', 34);

// john.register();

mike.payInvoice();