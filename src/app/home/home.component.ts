import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor ( private announcementService: AnnouncementService,
    private notificationService:NotificationService ){
    
  }
  
  ngOnInit(): void {
    this.announcementService.serviceCall(); 
    this.announcementService.getAnnouncements().subscribe((announcement=>{
        this.announcements=announcement;
    }));
    this.notificationService.initWebSocket;
    this.notificationService.notificationSubject.subscribe(hasNotifications => 
      this.notificationMessage = hasNotifications ? "New notifications, please refresh the page" : "");

  }

  title = 'notifications-app';
  selectCategory!:string;
  announcements: Announcement[]=[];
  filterAnnouncement:Announcement[]=this.announcements;
  notificationMessage: string="notificationMessage";

  changeCategory(category:string): void{
    this.selectCategory=category;
    if(category==''){
      this.filterAnnouncement=this.announcements;
    }else{
      this.filterAnnouncement=this.announcements.filter(announcement=>announcement.category===category as Category);
    }
  }
}
