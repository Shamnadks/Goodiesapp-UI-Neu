// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class scannerService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_scannerService

  async getUser(bh) {
    try {
      bh = await this.sd_6QCEKXKsqyvXMmVj(bh);
      //appendnew_next_getUser
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dLZfhFZ0rDgUlEDu');
    }
  }

  async updateUser(bh) {
    try {
      bh = await this.sd_Inn3RnLSDUte9q6a(bh);
      //appendnew_next_updateUser
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hzo02in3T1RXueb2');
    }
  }
  //appendnew_flow_scannerService_start

  async sd_6QCEKXKsqyvXMmVj(bh) {
    try {
      bh.input.url = bh.system.environment.properties.ssdURL + 'user/get';
      bh = await this.sd_WPM2veEsOICUPpvI(bh);
      //appendnew_next_sd_6QCEKXKsqyvXMmVj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6QCEKXKsqyvXMmVj');
    }
  }

  async sd_WPM2veEsOICUPpvI(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.query,
        body: undefined,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_WPM2veEsOICUPpvI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WPM2veEsOICUPpvI');
    }
  }

  async sd_Inn3RnLSDUte9q6a(bh) {
    try {
      bh.input.url = bh.system.environment.properties.ssdURL + 'user/put';
      console.log(bh.local.body);
      bh = await this.sd_WzUm5IVMLPgvsQJ8(bh);
      //appendnew_next_sd_Inn3RnLSDUte9q6a
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Inn3RnLSDUte9q6a');
    }
  }

  async sd_WzUm5IVMLPgvsQJ8(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_WzUm5IVMLPgvsQJ8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WzUm5IVMLPgvsQJ8');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_scannerService_Catch
}
