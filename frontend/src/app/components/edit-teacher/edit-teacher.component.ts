import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {AppServiceService} from '../../app-service.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacherData: any = {};

  constructor(private service : AppServiceService, private router: Router) { }

  navigation = this.router.getCurrentNavigation();

  ngOnInit(): void {
    this.getTeacherData();
  }

  getTeacherData(){
    const id = this.navigation?.extras?.state?.id || history.state?.id;
    if (id) {
      let teacher = { id };
      this.service.getOneTeacherData(teacher).subscribe((response)=>{
        this.teacherData = response[0] || {};
      },(error)=>{
        console.log('ERROR - ', error)
      })
    }
  }

  editTeacher(values){
    const id = this.navigation?.extras?.state?.id || history.state?.id;
    values.id = id;
    this.service.editTeacher(values).subscribe((response)=>{
      this.router.navigate(['']);
    },(error)=>{
      console.log('ERROR - ', error)
    })
  }

}