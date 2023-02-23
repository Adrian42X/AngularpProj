import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  formTitle: string="";
  formAuthor: string="";
  formMessage: string="";
  formImage: string="";
  categories:string[]=Object.values(Category);
  formCategory:string="";
  
  constructor(private announcementService: AnnouncementService, 
    private notificationService:NotificationService) { }
  
  ngOnInit(): void {
  }

  addAnnouncement(){
    const addAnnounce: Announcement={
      id:"bfd1d761-bfd5-4910-b1e8-6b9c2311679b",
      title:this.formTitle,
      author:this.formAuthor,
      message:this.formMessage,
      imageUrl:this.formImage,
      category:this.formCategory as Category
    }
    if(addAnnounce.title!=""&&addAnnounce.message!=""){
    console.log(addAnnounce);
    this.announcementService.addAnnouncements(addAnnounce).subscribe(r=>
      this.notificationService.sendMessage("BroadcastMessage",[r]));
    }
  }
  
}
