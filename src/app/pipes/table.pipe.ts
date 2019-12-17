import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  	name: 'table'
})
export class TablePipe implements PipeTransform {

	transform(value: string): string {
		switch(value)
		{
			case 'VEN01':
			case 'VEN02':	
			case 'VEN03':
			case 'PAS01':
			case 'PAS02':
			// case 'CM':
			// case 'DW':
			// case 'DM':
			 	return 'Mesa ' + value;
			default:
				return 'No hay mesa';
		}
	}

}
