import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsProviderComponent } from './details-provider/details-provider.component';
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listProvider", component: ListProviderComponent },
  { path: "addProvider", component: AddProviderComponent },
  { path: "contact", component: ContactComponent },
  { path: "detailsProvider/:id", component: DetailsProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
