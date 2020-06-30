export interface IUser {
    email: string;
    password: string;
    isActive: boolean;
}
  
  export interface IActiveUser extends IUser {
    isActive: true
}
  
  export interface IAdmin extends IActiveUser {
    adminSince: Date;
}

export class AccountManager {
    users: IUser[] = new Array();
  
    register(email: string, password: string): IUser {
      if(!email) throw 'Must provide an email';
      if(!password) throw 'Must provide a password';
      let user = { email, password, isActive: false };
      this.users.push(user);
      return user;
    }

    activateNewUser(approver: IAdmin, userToApprove: IUser): IActiveUser {
      if (!approver.adminSince) throw "Approver is not an admin!";
      return Object.assign(userToApprove, { isActive: (true as true) });
    }

    promoteToAdmin(existingAdmin: IAdmin, user: IActiveUser) {
      if (!existingAdmin.adminSince) throw "Not an admin!";
      return Object.assign(user, { adminSince: new Date() });
    }
  }