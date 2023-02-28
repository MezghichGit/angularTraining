import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-provider',
  templateUrl: './details-provider.component.html',
  styleUrls: ['./details-provider.component.css']
})
export class DetailsProviderComponent {

  provider: any;
  private id: any;
  // injection de dependences : ProviderService
  constructor(private providerService: ProviderService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });


    this.providerService.getProvider(this.id).subscribe(
      response => {
        //console.log(response);
        this.provider = response
      }
    );
  }

}
