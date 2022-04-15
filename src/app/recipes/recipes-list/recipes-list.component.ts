import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe','This is simply a tes','https://scontent.ftun18-1.fna.fbcdn.net/v/t31.18172-8/893702_438656382884762_495850160_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4NruTaeBQB4AX9ncHfE&_nc_ht=scontent.ftun18-1.fna&oh=00_AT8zS3ipszWWJCLQu-R7lcyHvx4mSix6HptHgF8jVg3AWg&oe=627F3353'),
    new Recipe('A test Recipe','This is simply a tes','https://freedesignfile.com/upload/2019/10/Cartoon-chef-making-soup-illustration-vector.jpg'),
    new Recipe('A test Recipe','This is simply a tes','https://st2.depositphotos.com/1035243/11215/v/950/depositphotos_112151154-stock-illustration-chef-with-plate-of-soup.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
