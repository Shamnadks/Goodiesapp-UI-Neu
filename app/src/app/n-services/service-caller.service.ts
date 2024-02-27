// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_1G57ImUFAs3KlsO8 from 'app/sd-services/registerUser'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(private sd_1G57ImUFAs3KlsO8: sd_1G57ImUFAs3KlsO8.registerUser) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
