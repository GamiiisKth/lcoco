import SimpleSchema from "simpl-schema";
import { check } from "meteor/check";
import { Tracker } from "meteor/tracker";
import { registerSchema } from "@reactioncommerce/schemas";


export const ContactForm = new SimpleSchema({
  name: {
    type: String,
    label: "sender name"
  },
  email: {
    type: String,
    label: "sender email"
  },
  typeOfCase: {
    type: String,
    label: "case typ"
  },
  message: {
    type: String,
    label: "message"
  }
}, { check, tracker: Tracker });

registerSchema("ContactForm", ContactForm);
