import { name } from '../src/app/models/name.model';
import { add } from '../src/app/models/add.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
name: name;
add: add;
//DECLARE NEW VARIABLE

constructor() {
this.name = new name();
this.add = new add();
//CREATE NEW DM INSTANCE
    }
}