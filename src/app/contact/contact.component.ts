import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  createMessage(contactForm:any){

    alert(contactForm.value.name+"\n"+contactForm.value.email+"\n"+contactForm.value.message);
  }

}
