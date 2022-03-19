const bcrypt = require("bcrypt");
const saltRounds = 15;
const registerSchema = require("../../db/models/auth");

class Controller {
  authentication = async (userName, password) => {
    try {
      let authenticationResponse = await registerSchema.find({
        userName: userName,
      });
      if (authenticationResponse.length) {
        let password_compare = await bcrypt.compare(
          password,
          authenticationResponse[0].password
        );
        if (
          authenticationResponse[0].userName === userName &&
          password_compare
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  registration = async (details) => {
    try {
      let password_hash = await bcrypt.hash(
        details.password.toString(),
        saltRounds
      );
      const register = new registerSchema({
        userName: details.userName,
        password: password_hash,
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
      });
      var registerUser = await register.save();
      if (registerUser) {
        return "registered";
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports= { Controller };

