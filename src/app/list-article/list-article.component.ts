import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent {

  articles: any;
  // injection de dependences : ProviderService
  constructor(private articleService: ArticleService, private router : Router) { }

  ngOnInit(): void {
    this.refrech();
  }


  refrech() {
    this. articleService.getArticles().subscribe(
      data => {
        this.articles = data;
        console.log(this.articles);
      }
    );
  }

}
