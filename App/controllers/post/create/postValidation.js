import joi from "joi";

const postValidation = (data) => {
  const schemaValidation = joi.object({
    userId: joi.string(),
    title: joi.string().required().min(3).max(256),
    text: joi.string().required().min(3).max(2048),
    topicId: joi.string(),
  });

  return schemaValidation.validate(data);
};

export { postValidation };
