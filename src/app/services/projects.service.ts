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
      name: 'Airbnb-clone React NextJS  ',
      img: '../../assets/images/airbnb.png',
      link: 'https://airbnb-clone-phi-eight.vercel.app/',
    },
    {
      id: 3,
      name: 'Movie React App',
      img: '../../assets/images/p3.jpg',
      link: 'https://next-movies-zeta.vercel.app/?category=Popular&page=1',
    },
    {
      id: 4,
      name: 'Amazon clone with React',
      img: '../../assets/images/p4.jpg',
      link: 'https://next-shopping-task.vercel.app/',
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
      name: 'UI/UX Educational website',
      img: '../../assets/images/edu.jpg',
      link: 'https://edu-ha.vercel.app/',
    },
    {
      id: 9,
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
