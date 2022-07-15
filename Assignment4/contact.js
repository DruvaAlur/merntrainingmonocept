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
    let [indexofcontact, isContactActive, isContactExists] =
      this.isContactExists(contactfname, contactlname);
    if (!isContactExists) {
      console.log("contact does not exists");
      return;
    }
    if (!isContactActive) {
      console.log("contact is not active");
      return;
    }
    this.contacts[indexofcontact].isActive = false;
  }
  createContactDetail(fname, lname, type, value) {
    let [indexofcontact, isContactActive, isContactExists] =
      this.isContactExists(fname, lname);
    if (!isContactExists) {
      console.log("Contact doesnt exists");
      return;
    }
    if (!isContactActive) {
      console.log("contact is not active");
      return;
    }
    let newContactDetail = Contact.createContactDetail(type, value);
    this.contacts[indexofcontact].contactDetails.push(newContactDetail);
  }
  isUserExists(fname, lname) {
    for (let i = 0; i < User.allUsers.length; i++) {
      console.log(fname);
      console.log(User.allUsers[i].fname);
      if (
        fname === User.allUsers[i].fname &&
        lname === User.allUsers[i].lname
      ) {
        return [i, this.isActive, true];
      }
    }
    return [null, false, false];
  }

  deleteUser(fname, lname) {
    if (this.role == "admin") {
      let [indexofUser, isUserActive, isUserExists] = this.isUserExists(
        fname,
        lname
      );
      if (!isUserExists) {
        console.log("User doesnt exists");
        return;
      }
      if (!isUserActive) {
        console.log("User is not active");
        return;
      }
      User.allUsers[indexofUser].isActive = false;
    }
    console.log("only admin can delete users");
  }
  isContactExists(fname, lname) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (
        fname === this.contacts[i].fname &&
        lname === this.contacts[i].lname
      ) {
        return [i, this.contacts[i].isActive, true];
      }
    }

    return [null, false, false];
  }
}
class Contact {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.isActive = true;
    this.contactDetails = [];
  }
  static createContactDetail(type, value) {
    let newContactDetail = new ContactDetail(type, value);
    // console.log(newContactDetail);

    return newContactDetail;
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

druva.createContact("pavan", "aloor");

pavan.createContact("arjun", "naik");

druva.createContactDetail("pavan", "aloor", "email", "druva.alur@gmail.com");

druva.createContact("arjun", "naik");
druva.displayContact();
druva.deleteContact("pavan", "aloor");
druva.displayContact();
// druva.deleteContact("pavan", "aloor");
