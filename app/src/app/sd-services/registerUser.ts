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
export class registerUser {
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

  //   service flows_registerUser

  async sd_aB6sQo8JpjBUqaLz(userData: any = undefined, ...others) {
    let bh: any = {
      input: {
        userData,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_0eYkpoQuLvAU3PFR(bh);
      //appendnew_next_sd_aB6sQo8JpjBUqaLz
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aB6sQo8JpjBUqaLz');
    }
  }
  //appendnew_flow_registerUser_start

  async sd_0eYkpoQuLvAU3PFR(bh) {
    try {
      console.log(bh.system.environment.properties.ssdURL);
      bh.local.request = {
        HttpUrl: bh.system.environment.properties.ssdURL + 'user',
        data: {
          users: {
            name: bh.input.userData?.name,
            email: bh.input.userData?.email,
            phone_no: `${bh.input.userData?.phone}`,
          },
        },
      };
      bh = await this.sd_8L6RWUEvYrrluor3(bh);
      //appendnew_next_sd_0eYkpoQuLvAU3PFR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0eYkpoQuLvAU3PFR');
    }
  }

  async sd_8L6RWUEvYrrluor3(bh) {
    try {
      let requestOptions = {
        url: bh.local.request.HttpUrl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.request.data,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_8L6RWUEvYrrluor3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8L6RWUEvYrrluor3');
    }
  }

  async sd_tq2aHN8ifKRTcD34(bh) {
    try {
      bh.local.response = bh.error.message || 'something went wrong';
      console.log(bh.error);
      bh = await this.sd_rGGl8k7r5MEVSZMK(bh);
      //appendnew_next_sd_tq2aHN8ifKRTcD34
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tq2aHN8ifKRTcD34');
    }
  }

  async sd_rGGl8k7r5MEVSZMK(bh) {
    try {
      this.matSnackBar.open(bh.local.response, bh.local, {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'start',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_rGGl8k7r5MEVSZMK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rGGl8k7r5MEVSZMK');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      (await this.sd_DtBDR51TStUloiS4(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_DtBDR51TStUloiS4(bh) {
    const catchConnectedNodes = ['sd_tq2aHN8ifKRTcD34', 'sd_rGGl8k7r5MEVSZMK'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_tq2aHN8ifKRTcD34(bh);
    //appendnew_next_sd_DtBDR51TStUloiS4
    return true;
  }
  //appendnew_flow_registerUser_Catch
}
