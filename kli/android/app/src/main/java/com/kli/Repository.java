package com.kli;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class Repository extends RealmObject {
    @PrimaryKey
    public int id;
    @Required
    public String code;
}
