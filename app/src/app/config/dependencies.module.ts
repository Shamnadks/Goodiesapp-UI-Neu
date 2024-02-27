// _neu_generated_code__dont_modify_directly_
//__IMPORT_MODULES_HERE__
//__LIBRARY__ngx\-scanner\-qrcode
import {NgxScannerQrcodeModule} from 'ngx-scanner-qrcode';
//__END__LIBRARY__ngx\-scanner\-qrcode
import {NgModule } from '@angular/core';
import { sdProviders} from './sd-providers';
import { environment } from 'environments/environment';
@NgModule({
  imports: [
    //__CUSTOM_IMPORTS_MODULES__
    //__CUSTOM_IMPORTS_MODULES_END__
    //__IMPORTS_MODULES__
    
//__IMPORTED_MODULE__NgxScannerQrcodeModule
NgxScannerQrcodeModule,
//__IMPORTED_MODULE__NgxScannerQrcodeModule__END
//__IMPORTS_MODULES_END__
  ],
  providers: [...sdProviders],
  exports: [
    //__EXPORTS_MODULES__
    
//__EXPORTED_MODULE__NgxScannerQrcodeModule
NgxScannerQrcodeModule,
//__EXPORTED_MODULE__NgxScannerQrcodeModule__END
//__EXPORTS_MODULES_END__
  ]
})
export class DependenciesModule { }