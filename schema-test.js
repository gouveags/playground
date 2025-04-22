import assert from "node:assert";

const formatSchema = (schema) => {
  if (!Object.values(schema).length) return;

  schema.strict = true;

  let propertiesQueue = [];
  let currentRoot = schema.parameters;

  do {
    currentRoot.additionalproperties = false;
    propertiesQueue = propertiesQueue.concat(Object.values(currentRoot.properties).filter((child) => child?.properties));
    currentRoot = propertiesQueue.shift();
  } while(currentRoot);

  return schema;
}

const schemaMalformed = {
  name: "lorem_ipsum_dolor",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  parameters: {
      type: "object",
      properties: {
          enum: {
              type: "string",
              enum: ["enum"],
          },
          object: {
              type: "object",
              properties: {
                  string: {type: "string"},
                  text: {
                      type: "string",
                      description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, nisi nec tincidunt tincidunt, lorem ipsum gravida justo, nec tincidunt eros magna non nisi.",
                  },
              },
              required: ["string", "text"],
          },
      },
      required: ["enum", "object"],
  },
};

const schemaWellformed = {
  strict: true,
  name: "lorem_ipsum_dolor",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  parameters: {
      type: "object",
      properties: {
          enum: {
              type: "string",
              enum: ["enum"],
          },
          object: {
              type: "object",
              properties: {
                  string: {type: "string"},
                  text: {
                      type: "string",
                      description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, nisi nec tincidunt tincidunt, lorem ipsum gravida justo, nec tincidunt eros magna non nisi.",
                  },
              },
              additionalproperties: false,
              required: ["string", "text"],
          },
      },
      additionalproperties: false,
      required: ["enum", "object"],
  },
};

const tests = async () => {
  assert.deepEqual(
    formatSchema(schemaMalformed),
    schemaWellformed,
    "Schema should be well-formed"
  );
}

(async () => {
  try {
    await tests();
  } catch (error) {
    return console.error("Test failed:", error);
  }
  return console.log("Tests completed.");
})()
