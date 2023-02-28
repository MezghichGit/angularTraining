import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailpipe'
})
export class EmailpipePipe implements PipeTransform {

  transform(value: string): string {
    return "email : "+value;
  }

}
