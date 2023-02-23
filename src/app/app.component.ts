import { Component } from '@angular/core';
import { Announcement } from './announcement';
import { AnnouncementComponent } from './announcement/announcement.component';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications-app';
  selectCategory:string='';
  
  readonly announcements: Announcement[]=[{id:'1', author:"Adrian",message:"Nu tin cursul", title:"Curs",category:Category.General, imageUrl:''},
  {id:'2',author:"Nimeni",message:"Alt anunt", title:"Nimic interesenat",category:Category.Course,imageUrl:''},
  {id:'3',author:"Eminescu",message:"Elemente de anatomie", title:"Anatomie",category:Category.Laboratory,imageUrl:''}];

  
  filterAnnouncement:Announcement[]=this.announcements;

  changeCategory(category:string){
    this.selectCategory=category;
    if(category==''){
      this.filterAnnouncement=this.announcements;
    }else{
      this.filterAnnouncement=this.announcements.filter(announcement=>announcement.category===category as Category);
    }
  }
}
