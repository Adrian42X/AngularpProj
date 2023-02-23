import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})

export class AnnouncementComponent implements OnInit {
  @Input('announc') announcement: Announcement={id:'0',author:"",message:"", title:"",category:Category.General,imageUrl:''};

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
  }

  deleteAnnouncement(){
    this.announcementService.deleteAnnouncement(this.announcement.id).subscribe();
  }
}
