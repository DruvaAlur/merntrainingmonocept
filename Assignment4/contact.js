class User {
  static allUsers = [];
  constructor(fname, lname, role) {
    this.fname = fname;
    this.lname = lname;
    this.role = "admin";
    this.isActive = true;
    this.contacts = [];
  }
  createUser(fname, lname, role) {
    if (this.role != "admin") {
      console.log("only admin can create user");
      return;
    }
    let newUser = new User(fname, lname, role);
    console.log(newUser);
    User.allUsers.push(newUser);
    return newUser;
  }

  createContact(fname, lname) {
    let newcontact = new Contact(fname, lname);

    this.contacts.push(newcontact);
    // this.createContactDetail(type, role);
    return newcontact;
  }
  createContactDetail(fname, lname, type, value) {
    console.log(type);
    let indexofcontact = this.isContactExists(fname, lname);
    let newContactDetail = new ContactDetail(type, value);
    // console.log(newContactDetail);
    this.contacts[indexofcontact].contactDetails.push(newContactDetail);
    return newContactDetail;
  }
  isContactExists(fname, lname) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (
        fname === this.contacts[i].fname &&
        lname === this.contacts[i].lname
      ) {
        return i;
      }
    }
    console.log("contact does not exists");
    return false;
  }

  displayContact() {
    for (let i = 0; i < this.contacts.length; i++)
      if (this.contacts[i].isActive) console.log(this.contacts[i]);
  }
  displayUsers() {
    for (let i = 0; i < User.allUsers.length; i++)
      if (User.allUsers[i].isActive) console.log(User.allUsers[i]);
  }
  deleteContact(userfname, userlname, contactfname, contactlname) {
    let [indexofUser, UserExists] = this.isUserExists(userfname, userlname);
    console.log(indexofUser);
    if (!UserExists) {
      console.log("user not exists");
      return;
    }

    let user = User.allUsers[indexofUser];
    console.log(user);
    let indexofcontact = user.isContactExists(contactfname, contactlname);

    user.contacts[indexofcontact].isActive = false;
  }
  isUserExists(fname, lname) {
    for (let i = 0; i < User.allUsers.length; i++) {
      console.log(fname);
      console.log(User.allUsers[i].fname);
      if (
        fname === User.allUsers[i].fname &&
        lname === User.allUsers[i].lname
      ) {
        return [i, true];
      }
    }
    return [null, false];
  }

  deleteUser(fname, lname) {
    if (this.role == "admin") {
      let indexofUser = this.isUserExists(fname, lname);
      if (!indexofUser) {
        console.log("User doesnt exists");
        return;
      }
      User.allUsers[indexofUser].isActive = false;
    }
    console.log("only admin can delete users");
  }
}
class Contact {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.isActive = true;
    this.contactDetails = [];
  }
}
class ContactDetail {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }
}
console.log(User.allUsers);
let druva = new User("druva", "alur", "admin");
User.allUsers.push(druva);
console.log(druva);
let pavan = druva.createUser("pavan", "aloor", "user");
console.log(pavan);
pavan.createContact("pavan", "aloor");
pavan.deleteContact("pavan", "aloor", "pavan", "aloor");
console.log(pavan.contacts);
druva.createContact("pavan", "aloor");
// console.log(druva.contacts);
// druva.createContactDetail("pavan", "aloor", "email", "druva.alur@gmail.com");
// let druva1 = druva.admincreateUser("druva", "alur", "admin");
console.log(druva.contacts);
// druva.deleteContact("druva", "alur", "pavan", "aloor");
console.log(druva.contacts);
druva.displayContact();
druva.displayUsers();
// druva.deleteUser();
// druva.displayContact();
