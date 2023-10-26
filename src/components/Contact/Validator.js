export const validateName = (name) => {
    const regex = /^[a-zA-Z]+$/;
  if (name.length <= 0) {
    return {
      state: false,
      message: "",
    };

  } else if (!regex.test(name)) {
    return {
      state: false,
      message: "votre nom ne peut pas contenir de chiffre",
    };
  }
  return {
    state: true,
    message: ""
  }
};

export const validateMessage = (message) => {
    if (message.length <= 0) {
        return {
            state: false,
            message: ""
        }
    }

    return {
        state: true,
        message: ""
    }
}

export const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (mail.length <= 0) {
    return {
      state: false,
      message: ""
    };
  } else if (!emailPattern.test(mail)) {
    return {
      state: false,
      message: "email invalide",
    };
  }
  return {
    state: true,
    message: "",
  };
};
