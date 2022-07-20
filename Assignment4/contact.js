class User {
  static allUsers = [];
  constructor(fname, lname, role) {
    this.fname = fname;
    this.lname = lname;
    this.username = fname + lname;
    this.role = role;
    this.isActive = true;
    this.contacts = [];
  }
  static createAdmin() {
    const fname = "Druva";
    const lname = "Alur";
    const role = "admin";
    const admin = new User(fname, lname, role);
    User.allUsers.push(admin);
    console.log("Admin created Successfully");
    return admin;
  }
  createUser(fname, lname, role) {
    if (this.isActive == false) {
      console.log("Not able to create an User");
      return;
    }
    if (this.role != "admin") {
      console.log("Please Specify the role to Admin to create a User");
      return;
    }
    let [indexOfUser, isUserActive, isUserExists] = User.isUserExists(
      fname + lname
    );
    if (isUserExists) {
      return [null, "username already exists"];
    }

    const newUser = new User(fname, lname, role);
    User.allUsers.push(newUser);
    console.log("new user created");
    return newUser;
  }

  createContact(fname, lname) {
    let [indexOfUser, isUserActive, isUserExists] = User.isUserExists(
      this.username
    );
    if (!isUserActive || !isUserExists) {
      return "invalid user";
    }
    let [indexOfContact, isContactActive, isContactExists] =
      this.isContactExists(fname, lname);
    if (isContactExists) {
      return "contact already exists please choose other name";
    }
    let newcontact = new Contact(fname, lname);

    this.contacts.push(newcontact);
    return newcontact;
  }

  displayContact() {
    let tempcontacts = [];
    for (let i = 0; i < this.contacts.length; i++)
      if (this.contacts[i].isActive) {
        tempcontacts.push(this.contacts[i]);
      }

    console.log(tempcontacts);
  }
  static displayUsers() {
    let tempusers = [];
    for (let i = 0; i < User.allUsers.length; i++)
      if (User.allUsers[i].isActive) tempusers.push(User.allUsers[i]);
    console.log(tempusers);
  }
  deleteContact(contactfname, contactlname) {
    let [indexofcontact, isContactActive, isContactExists] =
      this.isContactExists(contactfname, contactlname);
    if (!isContactExists) {
      return "contact does not exists";
    }
    if (!isContactActive) {
      return "contact is not active";
    }
    let isContactDeleted = this.contacts[indexofcontact].deleteContact();
    if (isContactDeleted) {
      return "contact deleted";
    }
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
    let newContactDetail = this.contacts[indexofcontact].createContactDetail(
      type,
      value
    );

    return newContactDetail;
  }
  static isUserExists(username) {
    for (let i = 0; i < User.allUsers.length; i++) {
      if (username === User.allUsers[i].username) {
        return [i, User.allUsers[i].isActive, true];
      }
    }
    return [null, false, false];
  }
  updateContact(fullName, propertTobeUpdated, value) {
    if (this.isActive == false) {
      return [false, null, "Invalid User"];
    }
    console.log(fullName);
    let arr = fullName.split(" ");
    let fname = arr[0];
    let lname = arr[1];
    const [indexOfContact, isContactActive, isContactExist] =
      this.isContactExists(fname, lname);
    if (!isContactExist) {
      return [false, null, "contact doesn't exist with that name"];
    }
    return this.contacts[indexOfContact].update(propertTobeUpdated, value);
  }

  deleteUser(username) {
    // console.log(username);
    if (this.role == "admin") {
      let [indexofUser, isUserActive, isUserExists] =
        User.isUserExists(username);
      // console.log(indexofUser);
      if (!isUserExists) {
        console.log("User doesnt exists");
        return;
      }
      if (!isUserActive) {
        console.log("User is not active");
        return;
      }
      User.allUsers[indexofUser].isActive = false;
      return;
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

  // updateUserName(fname, lname) {
  //   this.username = this.fname + this.lname;
  // }
  updateUser(propertyToUpdate, value) {
    switch (propertyToUpdate) {
      case "firstName":
        this.fname = value;
        // this.updateUserName(value, this.lname);
        return true;

      case "lastName":
        this.lname = value;
        // this.updateUserName(this.fname, value);
        return true;

      default:
        return false;
    }
  }
}

class Contact {
  static contactId = 1;
  constructor(fname, lname) {
    this.contactId = Contact.contactId++;
    this.fname = fname;
    this.lname = lname;
    this.isActive = true;
    this.fullname = fname + " " + lname;
    this.contactDetails = [];
  }
  findContactDetail(type) {
    for (let index = 0; index < this.contactDetails.length; index++) {
      if (this.contactDetails[index].type === type) {
        return [true, index];
      }
    }
    return [false, -1];
  }
  createContactDetail(type, value) {
    if (this.isActive === false) {
      return "invalid contact";
    }
    let [isContactDetailExists, indexOfContactDetail] =
      this.findContactDetail(type);
    if (isContactDetailExists) {
      return "type already exists";
    }
    let newContactDetail = new ContactDetail(type, value);
    // console.log(newContactDetail);
    this.contactDetails.push(newContactDetail);
    return newContactDetail;
  }
  deleteContact() {
    if (this.isActive == false) {
      return "invalid Contact";
    }
    this.isActive = false;
    return true;
  }
  isContactExists(fullName) {
    if (this.isContactActive == false) return false;
    if (`${this.firstName} ${this.lastName}` == fullName) return true;
  }
  update(propertTobeUpdated, value) {
    if (this.isActive == false) {
      return [false, this, "invalid contact"];
    }
    console.log(propertTobeUpdated);
    switch (propertTobeUpdated) {
      case "firstname": {
        this.fname = value;
        this.UpdateFullname();
        return [true, this, "firstname updated successfully"];
      }
      case "lastname": {
        this.lname = value;
        this.UpdateFullname();
        return [true, this, "lastname updated successfully"];
      }
      default:
        return [false, this, "contact not updated "];
    }
  }

  UpdateFullname() {
    this.fullName = this.fname + " " + this.lname;
  }
}
class ContactDetail {
  static contactDetailId = 1;
  constructor(type, value) {
    this.contactDetailId = ContactDetail.contactDetailId++;
    this.type = type;
    this.value = value;
  }
}

const druva = User.createAdmin();
console.log(druva);
druva.createContact("druva", "alur");
// console.log(druva.contacts);
druva.displayContact();
druva.createContactDetail("druva", "alur", "email", "druva.alur@gmail.com");
druva.displayContact();
const pavan = druva.createUser("pavan", "aloor", "user");
User.displayUsers();
pavan.createContact("arjun", "naik");
pavan.displayContact();
User.displayUsers();
pavan.createContactDetail("arjun", "naik", "email", "arjun@gmail.com");
pavan.displayContact();
pavan.deleteContact("arjun", "naik");
pavan.displayContact();
druva.deleteUser("pavanaloor");
User.displayUsers();
