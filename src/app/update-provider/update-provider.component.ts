import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent {

  constructor(private providerService: ProviderService, private activeRoute: ActivatedRoute, private router: Router) { }

  provider: any;

  public id: any;

  public providerToUpdate: any;
  public name: any;
  public email: any;
  public address: any;

  ngOnInit() {

    // 1)Récupération de l'id du provider depuis l'url
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });

    // 2)Récu^pération de tout le provider depuis le back
    this.providerService.getProvider(this.id).subscribe(
      response => {
        this.provider = response
        //3) mettre à jour les variables du formulaire
        this.name = this.provider.name;
        this.email = this.provider.email;
        this.address = this.provider.address;

      }
    );
  }


  // La méthode update
 //4)Update du Provider
  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.address,
      'id': this.id
    }

    this.providerService.updateProvider(this.id, this.providerToUpdate).subscribe(
      response => {
        //console.log(response);
        this.router.navigate(['listProvider']);
      }
    );
  }

}
