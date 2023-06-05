import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
        name: 'filterBy',
      })
export class FilterByPipe implements PipeTransform {

  transform(arr: any[], filterParam: string, query: string): any {
    if (arr) {
      if (typeof query !== 'string') {
        return arr;
      }

      let filteredArray = arr.filter(el =>
                                       el[filterParam]?.trim().toLowerCase().includes(query?.trim().toLowerCase()));
      filteredArray = filteredArray.length > 0 ? filteredArray : null;
      return query.length < 1 ? arr : filteredArray;
    }
  }
}
