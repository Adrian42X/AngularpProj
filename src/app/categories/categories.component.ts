import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  ngOnInit(): void {
    
  }
  categories:string[]=Object.values(Category);
  
  constructor() { }

  @Output() selectedCategoryEmitter = new EventEmitter<string>();


  onclick(category:string){
      this.selectedCategoryEmitter.emit(category);
  }

}
