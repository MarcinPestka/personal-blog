export class User {
  UserName: string;
  Password: string;
  firstName: string;
  lastName: string;

  constructor(
    userName: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    this.UserName = userName;
    this.Password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export class UserDTO {
  UserName: string;
  Password: string;

  constructor(userName: string, password: string) {
    this.UserName = userName;
    this.Password = password;
  }
}
