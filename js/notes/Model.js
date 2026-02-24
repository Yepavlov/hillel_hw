export default class Model {
    #key = null;
    #validationModel = null;

    constructor(validationModel, key) {
        this.#validationModel = validationModel;
        this.#key = key;
    }

    create(data) {
        const newEntity = {
            id: Date.now(),
            title: data.title,
            category: data.category,
            important: false,
            createdAt: new Date().toISOString()

        }

        this.#validateEntity(newEntity);
        const allEntities = this.readAll()
        allEntities.push(newEntity);
        this.#updateStorage(allEntities);

        return newEntity;
    };


    readAll() {
        try {
            const data = localStorage.getItem(this.#key);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Error reading from localStorage", e);
            return [];
        }
    };

    toggleImportant(id, data) {
        const allEntities = this.readAll();
        const entityIndex = allEntities.findIndex(item => item.id === Number(id));

        if (entityIndex !== -1) {
            allEntities[entityIndex].important = !allEntities[entityIndex].important;
            this.#updateStorage(allEntities);
        }
    };

    delete(id) {
        const allEntities = this.readAll();
        const filteredEntities = allEntities.filter(item => item.id !== Number(id));
        this.#updateStorage(filteredEntities);
    };

    clearAll() {
        this.#updateStorage([]);
    };

    #updateStorage(data) {
        localStorage.setItem(this.#key, JSON.stringify(data));
    };

    #validateEntity(data) {
        let failedFields = []

        for (const key in this.#validationModel) {
            const rules = this.#validationModel[key];
            const value = data[key];

            if (rules.required && (value === undefined || value === null || value === "")) {
                failedFields.push({key, message: `Field is required.`});
                continue;
            }

            if (value !== undefined && value !== null) {
                if (rules.type === "enum") {
                    if (!rules.values.includes(value)) {
                        failedFields.push({key, message: `Field should be one of: ${rules.values.join(", ")}`});
                    }
                } else if (typeof value !== rules.type) {
                    failedFields.push({key, message: `Field should be of type: ${rules.type}`});
                }

                if (rules.type === "string" && rules.minLength) {
                    if (value.trim().length < rules.minLength) {
                        failedFields.push({
                            key,
                            message: `Field must be at least ${rules.minLength} characters long (excluding spaces).`
                        });
                    }
                }
            }
        }

        for (const key in data) {
            if (!this.#validationModel.hasOwnProperty(key)) {
                failedFields.push({key, message: `Field doesn't exist in validation model.`});
            }
        }

        if (failedFields.length) {
            throw new Error(`Failed to validate entity:\n${JSON.stringify(failedFields, null, 2)}`);
        }

        return true;
    }
}
