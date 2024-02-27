// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_WGiiJbDpRs20urpL from 'app/sd-services/scannerService'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(
    private sd_WGiiJbDpRs20urpL: sd_WGiiJbDpRs20urpL.scannerService
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
