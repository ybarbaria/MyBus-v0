import { ApiService } from "./api.service";
import { Injectable } from "@angular/core";

@Injectable()
export class BusService {

  constructor(private apiSrv: ApiService ){
    apiSrv.setApiurl('lines');
  }

  getBus() : any {
    return this.apiSrv.doGET(['type'],['bus']);
  }
}
