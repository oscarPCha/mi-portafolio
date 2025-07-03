import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { ProjectComponent } from "../project/project.component";
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProjectComponent, AboutComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
