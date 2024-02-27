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
export class getApplicants {
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

  //   service flows_getApplicants

  async getApplicants(...others) {
    let bh: any = {
      input: {},
      local: {
        response: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_NA3kcb5MSOU0xKuE(bh);
      //appendnew_next_getApplicants
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PUKDCtNoH0qHHyks');
    }
  }
  //appendnew_flow_getApplicants_start

  async sd_NA3kcb5MSOU0xKuE(bh) {
    try {
      // bh.local.httpUrl=bh.system?.environment?.properties.ssdUrl+'users'
      bh.local.httpUrl = 'http://localhost:8081/api/users';

      console.log(bh.local.httpUrl);
      bh = await this.sd_rr5OaYnsV7ZxdWxn(bh);
      //appendnew_next_sd_NA3kcb5MSOU0xKuE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NA3kcb5MSOU0xKuE');
    }
  }

  async sd_rr5OaYnsV7ZxdWxn(bh) {
    try {
      let requestOptions = {
        url: bh.local.httpUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_41vsMoXaGFRaUmnq(bh);
      //appendnew_next_sd_rr5OaYnsV7ZxdWxn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rr5OaYnsV7ZxdWxn');
    }
  }

  async sd_41vsMoXaGFRaUmnq(bh) {
    try {
      console.log(bh.local.response);
      //appendnew_next_sd_41vsMoXaGFRaUmnq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_41vsMoXaGFRaUmnq');
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
  //appendnew_flow_getApplicants_Catch
}
