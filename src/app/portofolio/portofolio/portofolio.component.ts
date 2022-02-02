import {  Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/projects.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent implements OnInit {
  projects!:Projects[];
  name!:string;

  constructor(private projectsService:ProjectsService) {
   }

  ngOnInit(): void {
    this.projects=this.projectsService.projects;
  }
  search(){
    if(this.name !=""){
      this.projects=this.projects.filter(res=>{
        return res.name.toLowerCase().match(this.name.toLowerCase());
      })
    }else if(this.name==""){
      this.ngOnInit();
    }
  }


}
