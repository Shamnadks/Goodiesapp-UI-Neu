// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { registerUser } from 'app/sd-services/registerUser'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_uGRM2deh8cTkudVD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uGRM2deh8cTkudVD(bh) {
    try {
      bh = this.sd_Mie1i3Ftpvs9CGrs(bh);
      //appendnew_next_sd_uGRM2deh8cTkudVD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uGRM2deh8cTkudVD');
    }
  }

  submitForm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.submitFormScript(bh);
      //appendnew_next_submitForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fQkl5z0H7jLCka3q');
    }
  }
  //appendnew_flow_registerComponent_start

  sd_Mie1i3Ftpvs9CGrs(bh) {
    try {
      this.page.form = undefined;
      this.page.formGroup = undefined;
      this.page.formControl = undefined;
      this.page.validators = undefined;
      bh = this.sd_zlxIaAUzWmrAAumv(bh);
      //appendnew_next_sd_Mie1i3Ftpvs9CGrs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mie1i3Ftpvs9CGrs');
    }
  }

  sd_zlxIaAUzWmrAAumv(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validators = Validators;
      bh = this.sd_TQ6Fo4smMMXCLetH(bh);
      //appendnew_next_sd_zlxIaAUzWmrAAumv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zlxIaAUzWmrAAumv');
    }
  }

  sd_TQ6Fo4smMMXCLetH(bh) {
    try {
      const page = this.page;
      page.form = new page.formGroup({
        name: new page.formControl('', [page.validators.required]),
        email: new page.formControl('', [
          page.validators.required,
          page.validators.email,
        ]),
        phone: new page.formControl('', [
          page.validators.required,
          page.validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ]),
      });
      //appendnew_next_sd_TQ6Fo4smMMXCLetH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TQ6Fo4smMMXCLetH');
    }
  }

  submitFormScript(bh) {
    try {
      const page = this.page;
      console.log(page.form);
      if (!page.form.valid) {
        return;
      }
      bh.local.userData = {
        ...page.form.value,
      };
      page.form.reset();
      bh = this.submitFormCallService(bh);
      //appendnew_next_submitFormScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_skLuZTzTUAfqOaX7');
    }
  }

  async submitFormCallService(bh) {
    try {
      const registerUserInstance: registerUser =
        this.__page_injector__.get(registerUser);

      let outputVariables = await registerUserInstance.sd_aB6sQo8JpjBUqaLz(
        bh.local.userData
      );
      bh.local.result = outputVariables.local.result;

      bh = this.sd_OJZ46XXwr2yeE15t(bh);
      //appendnew_next_submitFormCallService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bK2h98j4wk0zoMiX');
    }
  }

  sd_OJZ46XXwr2yeE15t(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('User Added successfully', '', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_OJZ46XXwr2yeE15t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OJZ46XXwr2yeE15t');
    }
  }

  sd_QaJCSlsMu0eEoWGE(bh) {
    try {
      const page = this.page;
      bh.local.response = bh.error.message || 'something went wrong';
      console.log(bh.error);
      //appendnew_next_sd_QaJCSlsMu0eEoWGE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QaJCSlsMu0eEoWGE');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_PGsIIoVdHvWDDTxP(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_PGsIIoVdHvWDDTxP(bh) {
    const nodes = [
      'sd_fQkl5z0H7jLCka3q',
      'sd_skLuZTzTUAfqOaX7',
      'sd_bK2h98j4wk0zoMiX',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_QaJCSlsMu0eEoWGE(bh);
      //appendnew_next_sd_PGsIIoVdHvWDDTxP
      return true;
    }
    return false;
  }
  //appendnew_flow_registerComponent_Catch
}
