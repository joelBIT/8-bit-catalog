import { User } from "../interfaces";
import { generateUserId } from "../utils";

export function getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

export function storeAllUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
}

export function updateUser(updatedUser: User): void {
    const users = getAllUsers().filter(user => user.id !== updatedUser.id);
    users.push(updatedUser);
    storeAllUsers(users);
}

export function createAnonymousUser(): User {
    return {
         id: -1,
         username: "anonymous",
         isAdmin: false,
         isAuthenticated: false,
         password: "",
         email: ""
     }
 }
 
 export function createNewUser(username: string, password: string, passwordRepeat: string, email: string): User {
    if (userExists(username)) {
        throw new Error(`User ${username} already exists!`);
    }

    comparePasswords(password, passwordRepeat);

     const user =  {
         id: generateUserId(),
         username : username,
         password : password,
         isAdmin: false,
         email: email,
         isAuthenticated: false
     }

    const users = getAllUsers();
    users.push(user);
    storeAllUsers(users);

    return user;
 }

 export function getUser(username: string): User {
    const user = getAllUsers().find((user: { username: string; }) => user.username === username);
    if (user) {
        return user;
    } else {
        throw new Error(`User ${username} does not exist`);
    }
}

export function userExists(username: string): boolean {
    const users = getAllUsers();
    return users.find((user: { username: string; }) => user.username === username) ? true : false;
}

export function authenticate(user: User): void {
    user.isAuthenticated = true;
    setActiveUser(user);
}

export function validatePassword(storedPassword: string, givenPassword: string): void {
    if(storedPassword !== givenPassword) {
        throw new Error('Incorrect password');
    }
}

export function comparePasswords(password: string, passwordRepeat: string): void {
    if (password !== passwordRepeat) {
        throw new Error('Passwords do not match!');
    }
}

export function getActiveUser(): User {
    const activeUser = localStorage.getItem('activeUser') || "{}";
    return JSON.parse(activeUser);
}

export function setActiveUser(user: User): void {
    localStorage.setItem('activeUser', JSON.stringify(user));
}

export function activeUserExists(): boolean {
    return localStorage.getItem('activeUser') ? true : false;
}