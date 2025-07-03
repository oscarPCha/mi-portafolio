import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  @Input() title: string = '';
  @Input() images: string[] = [];
  @Input() technologies: string[] = [];
  @Input() description: string = '';
  selectedImage: string = '';
  @Input() urlWeb: string = '';
  @Input() urlGit: string = '';
  ngOnInit() {
    this.selectedImage = this.images[0] || '';
  }
  // images = [
  //     'assets/Logo_Oscar_Panta.png',
  //     'assets/saludo.png',
  //     'assets/logo_empresas/freelancer.png',

  //     // 'assets/proyectos/proyecto1-3.png',
  //   ];

  // selectedImage = this.images[0];

  // technologies = ['Angular', 'TypeScript', 'TailwindCSS', 'Node.js'];

  // description = `Este proyecto consiste en el desarrollo de una plataforma web moderna
  // que permite gestionar contenido dinámico y responsivo para diferentes
  // usuarios.`;
}
