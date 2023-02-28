import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsProviderComponent } from './details-provider/details-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { MypipePipe } from './mypipe.pipe';
import { EmailpipePipe } from './emailpipe.pipe';
import { ListArticleComponent } from './list-article/list-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProviderComponent,
    AddProviderComponent,
    NavbarComponent,
    ContactComponent,
    DetailsProviderComponent,
    UpdateProviderComponent,
    MypipePipe,
    EmailpipePipe,
    ListArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
