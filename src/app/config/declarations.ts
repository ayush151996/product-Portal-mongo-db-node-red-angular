import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-editproductComponent
import { editproductComponent } from '../components/editproductComponent/editproduct.component';
//CORE_REFERENCE_IMPORT-updateproductComponent
import { updateproductComponent } from '../components/updateproductComponent/updateproduct.component';
//CORE_REFERENCE_IMPORT-addproductComponent
import { addproductComponent } from '../components/addproductComponent/addproduct.component';
//CORE_REFERENCE_IMPORT-simple_pageComponent
import { simple_pageComponent } from '../components/simple_pageComponent/simple_page.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-editproductComponent
editproductComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-updateproductComponent
updateproductComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addproductComponent
addproductComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-simple_pageComponent
simple_pageComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'Simple_Page', component: simple_pageComponent,
children: [{path: 'addproduct', component: addproductComponent}]},{path: 'addproduct', component: addproductComponent},{path: 'updateproduct', component: updateproductComponent,
children: [{path: 'editproduct', component: editproductComponent}]},{path: 'editproduct', component: editproductComponent},{path: '', redirectTo: 'Simple_Page', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
