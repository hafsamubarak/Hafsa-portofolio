import { Injectable } from '@angular/core';
import { Projects } from '../models/projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Projects[] = [
    {
      id: 1,
      name: 'CliniDo Angular Project',
      img: '../../assets/images/p1.PNG',
      link: 'https://clinido-ce15d.web.app/',
    },
    {
      id: 2,
      name: 'CliniDo React Admin-dashboard ',
      img: '../../assets/images/p2.PNG',
      link: 'https://clinido-dashboard.herokuapp.com/',
    },
    {
      id: 3,
      name: 'Movie React App',
      img: '../../assets/images/p3.jpg',
      link: 'https://movie-app-with-react-js.herokuapp.com/',
    },
    {
      id: 4,
      name: 'Voice Recognition vanilla JavaScript App',
      img: '../../assets/images/p4.jpg',
      link: 'https://hafsamubarak.github.io/Voice-Recognition-with-vanilla-JavaScript/',
    },
    {
      id: 5,
      name: 'GraphQL with Angular, Book store App',
      img: '../../assets/images/p5.png',
      link: 'https://github.com/hafsamubarak/GraphQL-using-Angular',
    },
    {
      id: 6,
      name: 'Memory Game with Vanilla JavaScript',
      img: '../../assets/images/p6.jpg',
      link: 'https://hafsamubarak.github.io/Simple-Memory-Game/',
    },
    {
      id: 7,
      name: 'Angular Todo App-WEBW',
      img: '../../assets/images/p77.jpg',
      link: 'https://webw-crud-app.firebaseapp.com/',
    },
    {
      id: 8,
      name: 'UI/UX Design-WEBW JavaScript',
      img: '../../assets/images/p8.png',
      link: 'https://hafsamubarak.github.io/webw-ui-ux/',
    },
  ];
  AllProjects() {
    return [...this.projects];
  }

  constructor() {}
}
