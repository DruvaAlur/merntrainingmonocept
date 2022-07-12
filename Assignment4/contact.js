class User {
  static allUsers = [];
  constructor(fname, lname, role) {
    this.fname = fname;
    this.lname = lname;
    this.role = role;
    this.isActive = true;
    this.contacts = [];
  }
  createUser(fname, lname, role) {
    if (this.role != "admin") {
      console.log("only admin can create user");
      return;
    }
    let newUser = new User(fname, lname, role);

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
    let [indexofcontact, isContactExists] = this.isContactExists(fname, lname);
    if (!isContactExists) {
      console.log("Contact doesnt exists");
      return;
    }
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
        return [i, true];
      }
    }
    console.log("contact does not exists");
    return [null, false];
  }

  displayContact() {
    for (let i = 0; i < this.contacts.length; i++)
      if (this.contacts[i].isActive) console.log(this.contacts[i]);
  }
  displayUsers() {
    for (let i = 0; i < User.allUsers.length; i++)
      if (User.allUsers[i].isActive) console.log(User.allUsers[i]);
  }
  deleteContact(contactfname, contactlname) {
    let [indexofcontact, isContactExists] = this.isContactExists(
      contactfname,
      contactlname
    );
    if (!isContactExists) {
      console.log("contact doesnt exists");
      return;
    }
    this.contacts[indexofcontact].isActive = false;
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
      let [indexofUser, isUserExists] = this.isUserExists(fname, lname);
      if (!isUserExists) {
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

let druva = new User("druva", "alur", "admin");
User.allUsers.push(druva);
let pavan = druva.createUser("pavan", "aloor", "user");

pavan.createContact("pavan", "aloor");

pavan.displayContact();
druva.createContact("pavan", "aloor");

druva.createContactDetail("pavan", "aloor", "email", "druva.alur@gmail.com");

druva.displayContact();
druva.displayUsers();
pavan.deleteContact("pavan", "aloor");
