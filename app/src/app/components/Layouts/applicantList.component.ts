// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { getApplicants } from 'app/sd-services/getApplicants'; //_splitter_
import * as XLSX from 'xlsx'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-applicantList',
  templateUrl: './applicantList.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class applicantListComponent implements AfterViewInit {
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
  @ViewChild(MatSort)
  public MatSort: any = null;
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
      this.sd_zvGarhVZAKwzmv5x(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zvGarhVZAKwzmv5x(bh) {
    try {
      bh = this.sd_17syokCbolhskxGO(bh);
      //appendnew_next_sd_zvGarhVZAKwzmv5x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zvGarhVZAKwzmv5x');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0rh3jvae640zDDVu');
    }
  }

  onFilter_2(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_2(bh);
      //appendnew_next_onFilter_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MH1gQinRT8EpP9fg');
    }
  }

  onFilter_6(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_6(bh);
      //appendnew_next_onFilter_6
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EgNVpDoGQeOQdnxA');
    }
  }

  downloadExcel(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_bv98DAaMPC0WcHzl(bh);
      //appendnew_next_downloadExcel
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dKzhUzc2dGDKY77X');
    }
  }

  navigateScanner(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_aq7jRv69dpLGBhUx(bh);
      //appendnew_next_navigateScanner
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zcSjfUae2fPCy8YF');
    }
  }
  //appendnew_flow_applicantListComponent_start

  sd_17syokCbolhskxGO(bh) {
    try {
      bh = this.sd_2aHnYEEn9UIIkYDq(bh);
      //appendnew_next_sd_17syokCbolhskxGO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_17syokCbolhskxGO');
    }
  }

  sd_2aHnYEEn9UIIkYDq(bh) {
    try {
      const page = this.page;
      console.log(bh.system);
      bh = this.sd_TDhEgB0QkuhKg6ed(bh);
      //appendnew_next_sd_2aHnYEEn9UIIkYDq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2aHnYEEn9UIIkYDq');
    }
  }

  async sd_TDhEgB0QkuhKg6ed(bh) {
    try {
      const getApplicantsInstance: getApplicants =
        this.__page_injector__.get(getApplicants);

      let outputVariables = await getApplicantsInstance.getApplicants();
      this.page.applicants = outputVariables.local.response;

      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_TDhEgB0QkuhKg6ed
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TDhEgB0QkuhKg6ed');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      console.log(page.applicants, 'appplican');
      bh.local.dataSource = new MatTableDataSource(page.applicants);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n1JKjU7S0fsORa66');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lTUO1BOMJefYAjVY');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      bh = this.sd_xKCCTWKzvgDN0rx7_4(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2baK3I1sQxPOLJak');
    }
  }

  sd_xKCCTWKzvgDN0rx7_4(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_4(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8y4nczFkE8XEHLey');
    }
  }

  sd_2VNGqvcKee34lvOz_4(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      bh = this.sd_xKCCTWKzvgDN0rx7_5(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mFpOy4MZWbVcri2t');
    }
  }

  sd_xKCCTWKzvgDN0rx7_5(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_5(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X7qV8955LakD41x1');
    }
  }

  sd_2VNGqvcKee34lvOz_5(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ucdfBiagY2CYW9Ll');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M2RtIj5SUiRe79iq');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a9cZsHnGsh9MXsDp');
    }
  }

  sd_iBlFYTlpoczCmWts_6(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_iBlFYTlpoczCmWts_6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_18kthgbA8P4DffDH');
    }
  }

  sd_bv98DAaMPC0WcHzl(bh) {
    try {
      const page = this.page;
      console.log(page.tableData?._data?.value);
      bh.local.data = page.tableData?._data?.value;

      bh = this.sd_PsOJm655sKByDL0T(bh);
      //appendnew_next_sd_bv98DAaMPC0WcHzl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bv98DAaMPC0WcHzl');
    }
  }

  sd_PsOJm655sKByDL0T(bh) {
    try {
      bh.local.XLSX = XLSX;
      bh = this.sd_hUqfflfiNmLQFesx(bh);
      //appendnew_next_sd_PsOJm655sKByDL0T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PsOJm655sKByDL0T');
    }
  }

  sd_hUqfflfiNmLQFesx(bh) {
    try {
      const page = this.page;
      function downloadAsGoogleSheetCSV() {
        // Convert the array of objects to a CSV string
        console.log(bh.local.dataSource);
        const csv = convertArrayOfObjectsToCSV({
          data: bh.local.data,
          headers: ['name', 'email', 'phone_no', 'image', 'status'],
        });

        // Create a download link for the CSV file
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        // Create a hidden link element and click it to download the file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'applicants.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log(1111);
      }

      function convertArrayOfObjectsToCSV(args) {
        const keys = args.headers.map((header) => header.replace(/,/g, '\\,'));
        const rep = args.data.map((row) =>
          keys.map((k) => `"${row[k]}"`).join(',')
        );
        return `${keys.join(',')}\r\n${rep.join('\r\n')}`;
      }
      downloadAsGoogleSheetCSV();

      //appendnew_next_sd_hUqfflfiNmLQFesx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hUqfflfiNmLQFesx');
    }
  }

  async sd_aq7jRv69dpLGBhUx(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/scanner');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_aq7jRv69dpLGBhUx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aq7jRv69dpLGBhUx');
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
  //appendnew_flow_applicantListComponent_Catch
}
