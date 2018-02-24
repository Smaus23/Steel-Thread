import { Component } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response} from '@angular/http';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Steel Thread';
 
 @Component({
  selector: 'app-root'
})
  
	   private apiUrl ='http://localhost:52131/api/name';
	   data: any = {};
	   
	   constructor (private http: Http)
	   {
		   this.getNames();
		   this.getData();		   
	   }
	   
	   getData()
	   {
		   return this.http.get(this.apiUrl)
		   .map((res: Response) => res.json())
	   }
	   
	   getNames() 
	   {
		   this.getData().subscribe(data => {
		   this.data = data
		   })
	   }
}
  

