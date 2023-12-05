const contacts = require("./contacts.js");

// const {progran} = require("commander")- через commander(не забути інсталювати commander)
const yargs = require("yargs"); //через yargs
const { hideBin } = require("yargs/helpers"); //через yargs

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contacts.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// через commander
// program
//.option("--action, <type>")
//.option("--id, <type>")
//.option("--email, <type>")
//.option("--phone, <type>")
//.option("--name, <type>")

// program.parse

// const=program.opts();
// invokeAction(options)

const arr = hideBin(process.argv); //через yargs
const { argv } = yargs(arr); //через yargs
invokeAction(argv); //через yargs
