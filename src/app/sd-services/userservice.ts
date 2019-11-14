/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SDBaseService } from '../n-services/SDBaseService';
import { environment } from '../../environments/environment';
import {
  NAlertComponent,
  NAlertService,
  NFileIOService,
  NFileUploadComponent
} from 'neutrinos-module';
import {
  NDataModelService,
  NAuthGuardService,
  NHTTPLoaderService,
  NLocalStorageService,
  NLoginService,
  NLogoutService,
  NNotificationService,
  NPubSubService,
  NSessionStorageService,
  NSnackbarService,
  NSystemService,
  NTokenService
} from 'neutrinos-seed-services';
//CORE_REFERENCE_IMPORTS

declare const window: any;
declare const cordova: any;

@Injectable()
export class userservice {
  systemService = NSystemService.getInstance();
  appProperties;

  constructor(
    private http: HttpClient,
    private matSnackBar: MatSnackBar,
    private sdService: SDBaseService,
    private sessionStorage: NSessionStorageService,
    private tokenService: NTokenService,
    private router: Router,
    private httpLoaderService: NHTTPLoaderService,
    private dataModelService: NDataModelService,
    private loginService: NLoginService,
    private authGuardService: NAuthGuardService,
    private localStorageService: NLocalStorageService,
    private logoutService: NLogoutService,
    private notificationService: NNotificationService,
    private pubsubService: NPubSubService,
    private snackbarService: NSnackbarService,
    private alertService: NAlertService,
    private fileIOService: NFileIOService
  ) {}

  //   service flows_userservice

  public async getById(id = undefined, ...others) {
    try {
      let bh = { input: { id: id }, local: { result: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_umXWliubZFHgUvyp(bh);
      //appendnew_next_getById
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async saveData(userObj = undefined, ...others) {
    try {
      let bh = { input: { userObj: userObj }, local: { result: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_DY6zjSQpPUO4CDWD(bh);
      //appendnew_next_saveData
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  public async getData(rowId = undefined, ...others) {
    try {
      let bh = { input: { rowId: rowId }, local: { result: undefined } };
      bh = this.__constructDefault(bh);

      bh = await this.sd_fCsJCKEmNaCvNYlr(bh);
      //appendnew_next_getData
      //Start formatting output variables
      let outputVariables = { input: {}, local: { result: bh.local.result } };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_flow_userservice_Start

  async sd_umXWliubZFHgUvyp(bh) {
    try {
      bh.local.modelrApiUrl = `http://localhost:24483/api/getById?_id=${bh.input.id}`;

      bh = await this.sd_2ki5W5K8JjgsUDGH(bh);
      //appendnew_next_sd_umXWliubZFHgUvyp
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_2ki5W5K8JjgsUDGH(bh) {
    try {
      let requestOptions = {
        url: bh.local.modelrApiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_2ki5W5K8JjgsUDGH
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_DY6zjSQpPUO4CDWD(bh) {
    try {
      bh.local.modelrApiUrl = `http://localhost:24483/api/add`;

      bh = await this.sd_UwYi1Uc7pwg2cv94(bh);
      //appendnew_next_sd_DY6zjSQpPUO4CDWD
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_UwYi1Uc7pwg2cv94(bh) {
    try {
      let requestOptions = {
        url: bh.local.modelrApiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.userObj
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_UwYi1Uc7pwg2cv94
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_fCsJCKEmNaCvNYlr(bh) {
    try {
      bh.local.modelrApiUrl = `http://localhost:24483/api/get`;

      bh = await this.sd_ychmX37JChkvado9(bh);
      //appendnew_next_sd_fCsJCKEmNaCvNYlr
      return bh;
    } catch (e) {
      throw e;
    }
  }
  async sd_ychmX37JChkvado9(bh) {
    try {
      let requestOptions = {
        url: bh.local.modelrApiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.rowId
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_ychmX37JChkvado9
      return bh;
    } catch (e) {
      throw e;
    }
  }
  //appendnew_node

  __constructDefault(bh) {
    const system: any = {};

    try {
      system.currentUser = this.sessionStorage.getValue('userObj');
      system.environment = environment;
      system.tokenService = this.tokenService;
      system.deviceService = this.systemService;
      system.router = this.router;
      system.httpLoaderService = this.httpLoaderService;
      system.dataModelService = this.dataModelService;
      system.loginService = this.loginService;
      system.authGuardService = this.authGuardService;
      system.localStorageService = this.localStorageService;
      system.logoutService = this.logoutService;
      system.notificationService = this.notificationService;
      system.pubsubService = this.pubsubService;
      system.snackbarService = this.snackbarService;
      system.alertService = this.alertService;
      system.fileIOService = this.fileIOService;

      Object.defineProperty(bh, 'system', {
        value: system,
        writable: false
      });

      return bh;
    } catch (e) {
      throw e;
    }
  }
}
