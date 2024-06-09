export interface ContextProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    users: any[];
    userPanel: boolean;
    setUserPanel: React.Dispatch<React.SetStateAction<boolean>>;
    setShowSignUp: React.Dispatch<React.SetStateAction<string>>;
    showSignUp: string
    setUsersArray : React.Dispatch<React.SetStateAction<user[]>>;
    usersArray: user[]
  }

export class user {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    password: string = '';
    // loggedIn: boolean = false;

    constructor(id: number, firstName: string, lastName: string, email: string, password: string){
        // this.loggedIn = loggedIn;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

export const users: user[]= []
