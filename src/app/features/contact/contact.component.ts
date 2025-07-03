import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
form = {
    nombre: '',
    correo: '',
    mensaje: '',
  };

  onSubmit() {
    if (!this.form.nombre || !this.form.correo || !this.form.mensaje) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    const serviceID = 'TU_SERVICE_ID';
    const templateID = 'TU_TEMPLATE_ID';
    const publicKey = 'TU_PUBLIC_KEY';

    const templateParams = {
      from_name: this.form.nombre,
      from_email: this.form.correo,
      message: this.form.mensaje,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        alert('Mensaje enviado correctamente 🎉');
        this.form = { nombre: '', correo: '', mensaje: '' };
      },
      (error:any) => {
        console.error(error);
        alert('Ocurrió un error al enviar el mensaje.');
      }
    );
  }
}
