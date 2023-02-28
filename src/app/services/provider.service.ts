import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  baseUrl = environment.urlprovider;

  // injection de dependences : HttpClient
  constructor(private http: HttpClient) { }

  //1)get Providers
  getProviders() {
    return this.http.get(this.baseUrl + "list");
  }

  //2) add provider
  addProvider(provider: any) {
    return this.http.post(this.baseUrl + "add", provider);
  }

  //3) get provider
  getProvider(id: number) {

    return this.http.get(this.baseUrl + id);
  }

  //4) delete provider
  deleteProvider(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  //5) update provider
  updateProvider(id: number, new_provider: any) {
    return this.http.put(this.baseUrl + id, new_provider);
  }
}
