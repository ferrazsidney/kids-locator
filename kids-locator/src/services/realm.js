import Realm from 'realm';
import DatabaseSchema from '../database/DatabaseSchema';

export default function getRealm() {
    return Realm.open({
        schema: [DatabaseSchema],
    })
}