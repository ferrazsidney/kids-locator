export default class DatabaseSchema {
    static schema = {
        name: 'Database',
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            code: 'string'
        }
    }
}