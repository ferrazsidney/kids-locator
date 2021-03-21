export default class Repository {
    static schema = {
        name: "Repository",
        properties: {
            id: { type: "int", indexed: true },
            code: "string"
        } ,
        primaryKey: "id",
    };
}