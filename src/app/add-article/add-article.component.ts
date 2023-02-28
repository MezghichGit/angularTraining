import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  providers:any;
  constructor(
    private providerService: ProviderService,
    private articleService: ArticleService,
    private router : Router){
  }

  ngOnInit(): void {
    this.refrech();
  }

  createArticle(addArticleForm:any){

    let label = addArticleForm.value.label;
    let price = addArticleForm.value.price;
    let picture = addArticleForm.value.picture;
    let idProvider = addArticleForm.value.idProvider;

    let article={
      "label":label,
      "price":price,
      "picture":picture
    }

    this.articleService.addArticle(idProvider, article).subscribe(
      data=>{
           alert("Article Added !");
           console.log(data);
           this.router.navigate(['listArticle']);
      }
    );


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
