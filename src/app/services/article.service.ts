import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseUrl = environment.urlarticle;

  constructor(private http: HttpClient) { }

  //1)get Articles
  getArticles() {
    return this.http.get(this.baseUrl + "list");
  }

  //2) add Article
  addArticle(idProvider: number, article: any) {
    return this.http.post(this.baseUrl + "add/" + idProvider, article);
  }

  //3) delete Article
  deleteArticle(id: number) {
    return this.http.delete(this.baseUrl+"delete/" + id);
  }

   //4) update Article
   updateArticle(idProvider: number, idArticle:number, article:any) {
    return this.http.put(this.baseUrl+"update/"+ idProvider+"/"+idArticle,article);
  }

}
