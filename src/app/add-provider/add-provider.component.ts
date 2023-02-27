import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent {


  constructor(private providerService: ProviderService){

  }

  createProvider(providerform:any)
  {
    console.log(providerform.value)
    /*
    let provider={
      "name":"amine",
      "email":"amine.mezghich@gmail.com",
      "address":"France"
    }

    this.providerService.addProvider(provider).subscribe(
      data=>{
           alert("Provider Added !");
           console.log(data);
      }
    );*/

  }

}
