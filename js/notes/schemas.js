export const noteSchema = {
    id: {type: "number", required: true},
    title: {type: "string", required: true, minLength: 3},
    category: {type: "enum", values: ["work", "study", "personal"], required: true},
    important: {type: "boolean", required: true},
    createdAt: {type: "string", required: true}
};