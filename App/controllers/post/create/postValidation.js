import joi from "joi";

const postValidation = (data) => {
  const schemaValidation = joi.object({
    userId: joi.string().required(),
    userName: joi.string().required().min(3).max(256),
    title: joi.string().required().min(3).max(256),
    text: joi.string().required().min(3).max(2048),
    topicId: joi.string().required(),
    expirationTime: joi.number().min(7),
  });

  return schemaValidation.validate(data);
};

export { postValidation };
