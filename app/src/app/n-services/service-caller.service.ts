// _neu_generated_code__dont_modify_directly_
//append_imports_start

<<<<<<< HEAD
import * as sd_1G57ImUFAs3KlsO8 from 'app/sd-services/registerUser'; //_splitter_
=======
import * as sd_IQSPuXuoYNiGfMAP from 'app/sd-services/getApplicants'; //_splitter_
import * as sd_WGiiJbDpRs20urpL from 'app/sd-services/scannerService'; //_splitter_
>>>>>>> c5d82a05ac9741d6d14f8b3b70f8fce12f5f8059
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
<<<<<<< HEAD
  constructor(private sd_1G57ImUFAs3KlsO8: sd_1G57ImUFAs3KlsO8.registerUser) {}
=======
  constructor(
    private sd_WGiiJbDpRs20urpL: sd_WGiiJbDpRs20urpL.scannerService
  ) {}
>>>>>>> c5d82a05ac9741d6d14f8b3b70f8fce12f5f8059
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
