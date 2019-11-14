/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';
import { userservice } from '../../sd-services/userservice';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

 /**
 * 
 * Serivice Designer import Example - Service Name - HeroService
 * import { HeroService } from 'app/sd-services/HeroService';
 */
export interface PeriodicElement {
 name: string;
 price: number;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
    selector: 'bh-simple_page',
    templateUrl: './simple_page.template.html'
})
export class simple_pageComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

     
    constructor(private bdms: NDataModelService, public userService: userservice) {
        super();
        this.mm = new ModelMethods(bdms);
    }
 resultdata;
    async getData(){
        this.resultdata=this.convertObjtoArr((await this.userService.getData()).local.result);
        console.log(this.resultdata);
    }
    convertObjtoArr(obj) {
      return Array.from(Object.keys(obj), k => obj[k]);
    }

   ngOnInit() {
          this.getData();

    }
  dataClick(row){
    //   console.log(row)
    //   localStorage.setItem("name",JSON.stringify(row.productName));
    //   localStorage.setItem("price", JSON.stringify(row.productPrice));
      window.location.href="/updateproduct";
  }
  data;
  async getById(id){
      console.log(id);
      this.data=(await this.userService.getById()).local.result;
   }
   
    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
