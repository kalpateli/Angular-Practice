import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(value: any , searchFilter : string): any {
    return value.filter((e)=>{
      const firstNameMatch = e.firstName.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
      const lastNameMatch = e.lastName.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
  
      return firstNameMatch || lastNameMatch;
    });
  }

}
