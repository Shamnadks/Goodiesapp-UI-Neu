// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { scannerService } from 'app/sd-services/scannerService'; //_splitter_
import {
  NgxScannerQrcodeService,
  ScannerQRCodeConfig,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-scannerModal',
  templateUrl: './scannerModal.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class scannerModalComponent {
  @ViewChild('action')
  public action: any = null;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_8CTFvDSKeXLvkJFH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, {
      camera: 'scan',
      file: undefined,
      id: undefined,
      perm: undefined,
      user: undefined,
    });

    //append_listeners
  }

  sd_8CTFvDSKeXLvkJFH(bh) {
    try {
      bh = this.sd_Zv5F8bG6jrhXYf8S(bh);
      //appendnew_next_sd_8CTFvDSKeXLvkJFH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8CTFvDSKeXLvkJFH');
    }
  }

  onEvent(e: any = [], action: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { e, action };
      bh.local = {};
      bh = this.sd_HPc6tgqNsYX3zg1M(bh);
      //appendnew_next_onEvent
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QXeOKACo3TRmbzG4');
    }
  }

  handle(action: any = undefined, fn: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action, fn };
      bh.local = {};
      bh = this.sd_Uvw2dlCcz6FxBJLU(bh);
      //appendnew_next_handle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tOYsG9QDP6oHFVJo');
    }
  }

  onDownload(action: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action };
      bh.local = {};
      bh = this.sd_iyEtlqBjMMbwjLrt(bh);
      //appendnew_next_onDownload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3Tah55HjWfk8Rt4f');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_QoBQniQpm4NiyxYp(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XOOa3vhOfRMMfXzp');
    }
  }

  toggle(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NwFHF3yniqMFaCUa(bh);
      //appendnew_next_toggle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_srHJemkFURbdu785');
    }
  }

  navigateHome(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3stYOnao4f1XEaWr(bh);
      //appendnew_next_navigateHome
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7AEJj2XG4VkvsY2a');
    }
  }
  //appendnew_flow_scannerModalComponent_start

  sd_Zv5F8bG6jrhXYf8S(bh) {
    try {
      bh = this.sd_3VYzkD80ik9o4YxI(bh);
      //appendnew_next_sd_Zv5F8bG6jrhXYf8S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zv5F8bG6jrhXYf8S');
    }
  }

  sd_3VYzkD80ik9o4YxI(bh) {
    try {
      this.page.scanners = this.__page_injector__.get(NgxScannerQrcodeService);
      bh = this.sd_8r16pPvVFalEoQM1(bh);
      //appendnew_next_sd_3VYzkD80ik9o4YxI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3VYzkD80ik9o4YxI');
    }
  }

  sd_8r16pPvVFalEoQM1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, { action: this.action });
      bh = this.sd_sthu8krDDThFqLJo(bh);
      //appendnew_next_sd_8r16pPvVFalEoQM1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8r16pPvVFalEoQM1');
    }
  }

  sd_sthu8krDDThFqLJo(bh) {
    try {
      const page = this.page;

      let config: ScannerQRCodeConfig = {
        constraints: {
          video: {
            aspectRatio: 1,
          },
        },
        canvasStyles: [
          {
            /* layer */ lineWidth: 1,
            fillStyle: '#00950685',
            strokeStyle: '#00950685',
          },
          {
            /* text */ font: '17px serif',
            fillStyle: '#ff0000',
            strokeStyle: '#ff0000',
          },
        ],
      };
      page.config = config;
      let qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
      let qrCodeResult2: ScannerQRCodeSelectedFiles[] = [];
      page.qrCodeResult = qrCodeResult;
      page.qrCodeResult2 = qrCodeResult2;

      page.percentage = 80;
      page.quality = 100;

      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          page.perm = true;
          this.handle(this.action, 'start');
        })
        .catch((err) => {
          page.perm = false;
          console.error('Error accessing camera:');
        });

      //appendnew_next_sd_sthu8krDDThFqLJo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sthu8krDDThFqLJo');
    }
  }

  sd_HPc6tgqNsYX3zg1M(bh) {
    try {
      const page = this.page;
      page.item = bh.input.e[0];
      console.log(bh.input.e[0]);
      bh.local.fn = 'pause';

      bh = this.sd_ncUWDh9XxQXppBTe(bh);
      //appendnew_next_sd_HPc6tgqNsYX3zg1M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HPc6tgqNsYX3zg1M');
    }
  }

  sd_ncUWDh9XxQXppBTe(bh) {
    try {
      let outputVariables = this.handle(bh.input.action, bh.local.fn);

      bh = this.sd_8MTU3V7SsSpq6n6M(bh);
      //appendnew_next_sd_ncUWDh9XxQXppBTe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ncUWDh9XxQXppBTe');
    }
  }

  sd_8MTU3V7SsSpq6n6M(bh) {
    try {
      const page = this.page;
      bh.local.query = {
        id: page.item.value,
      };

      bh = this.sd_fIxMWWuf2OF1GRoN(bh);
      //appendnew_next_sd_8MTU3V7SsSpq6n6M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8MTU3V7SsSpq6n6M');
    }
  }

  async sd_fIxMWWuf2OF1GRoN(bh) {
    try {
      const scannerServiceInstance: scannerService =
        this.__page_injector__.get(scannerService);

      bh = await scannerServiceInstance.getUser(bh);

      bh = this.sd_qVToKa6YbloN0msp(bh);
      //appendnew_next_sd_fIxMWWuf2OF1GRoN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fIxMWWuf2OF1GRoN');
    }
  }

  sd_qVToKa6YbloN0msp(bh) {
    try {
      const page = this.page;
      if (bh.input?.result?.length != 0) {
        page.user = bh.input.result[0];
        if (!page.user.status) {
          page.id = page.user.id;
        }
      }
      //appendnew_next_sd_qVToKa6YbloN0msp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qVToKa6YbloN0msp');
    }
  }

  sd_Uvw2dlCcz6FxBJLU(bh) {
    try {
      const page = this.page;
      const playDeviceFacingBack = (devices: any[]) => {
        // front camera or back camera check here!
        const device = devices.find((f) =>
          /back|rear|environment/gi.test(f.label)
        ); // Default Back Facing Camera
        bh.input?.action.playDevice(
          device ? device.deviceId : devices[0].deviceId
        );
      };

      if (bh.input?.fn === 'start') {
        bh.input?.action[bh.input?.fn](playDeviceFacingBack).subscribe(
          (r: any) => console.log(bh.input?.fn, r),
          alert
        );
      } else if (bh.input?.fn === 'download') {
        bh.input?.action.download().subscribe((r) => {
          console.log(r);
          page.file = r[0].file;
        }, alert);
      } else {
        bh.input?.action[bh.input?.fn]().subscribe(
          (r: any) => console.log(bh.input?.fn, r),
          alert
        );
      }
      //appendnew_next_sd_Uvw2dlCcz6FxBJLU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Uvw2dlCcz6FxBJLU');
    }
  }

  sd_iyEtlqBjMMbwjLrt(bh) {
    try {
      const page = this.page;
      bh.input?.action.download().subscribe(console.log, alert);
      //appendnew_next_sd_iyEtlqBjMMbwjLrt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iyEtlqBjMMbwjLrt');
    }
  }

  sd_QoBQniQpm4NiyxYp(bh) {
    try {
      const page = this.page;
      const formData = new FormData();
      formData.append('id', page.id);
      formData.append('file', page.file);
      bh.local.body = formData;
      console.log('fotm herer');
      bh = this.sd_7YCuW9sqimStzSkc(bh);
      //appendnew_next_sd_QoBQniQpm4NiyxYp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QoBQniQpm4NiyxYp');
    }
  }

  async sd_7YCuW9sqimStzSkc(bh) {
    try {
      const scannerServiceInstance: scannerService =
        this.__page_injector__.get(scannerService);

      bh = await scannerServiceInstance.updateUser(bh);

      bh = this.sd_lbHk9L4McTE6gZx2(bh);
      //appendnew_next_sd_7YCuW9sqimStzSkc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7YCuW9sqimStzSkc');
    }
  }

  sd_lbHk9L4McTE6gZx2(bh) {
    try {
      const page = this.page;
      if (bh.input.result) {
        page.id = null;
        page.user = null;
        page.file = null;
      }
      bh = this.sd_n8jNQtw4j4BhVdx2(bh);
      //appendnew_next_sd_lbHk9L4McTE6gZx2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lbHk9L4McTE6gZx2');
    }
  }

  sd_n8jNQtw4j4BhVdx2(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.result.result,
          'updated successfully',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Nqy5tHYuYWleqIvK(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n8jNQtw4j4BhVdx2');
    }
  }

  sd_Nqy5tHYuYWleqIvK(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The goodies has been given!', 'ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Nqy5tHYuYWleqIvK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nqy5tHYuYWleqIvK');
    }
  }

  sd_NwFHF3yniqMFaCUa(bh) {
    try {
      const page = this.page;
      bh.local.fn = 'play';
      this.handle(this.action, bh.local.fn);
      //appendnew_next_sd_NwFHF3yniqMFaCUa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NwFHF3yniqMFaCUa');
    }
  }

  async sd_3stYOnao4f1XEaWr(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_3stYOnao4f1XEaWr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3stYOnao4f1XEaWr');
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
    throw e;
  }
  //appendnew_flow_scannerModalComponent_Catch
}
