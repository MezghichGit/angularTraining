import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';
@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent {

  providers: any;
  // injection de dependences : ProviderService
  constructor(private providerService: ProviderService, private router : Router) { }

  ngOnInit(): void {
    this.refrech();
  }


  deleteProvider(id: any) {

    this.providerService.deleteProvider(id).subscribe(
      data => {
        this.refrech();
      }
    );
  }
  detailsProvider(id: any) {
    this.router.navigate(['detailsProvider/'+id]);
  }

  updateProvider(id:any){
    this.router.navigate(['updateProvider/'+id]);
  }
  refrech() {
    this.providerService.getProviders().subscribe(
      data => {
        this.providers = data;
        console.log(this.providers);
      }
    );
  }
}
