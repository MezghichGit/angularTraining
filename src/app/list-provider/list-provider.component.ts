import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent {

  providers:any;
  // injection de dependences : ProviderService
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
     this.providerService.getProviders().subscribe(
      data =>{
        this.providers = data;
        console.log(this.providers);
      }
     );
  }


}