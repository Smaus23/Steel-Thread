import { Component } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response} from '@angular/http';
import { AppModule } from './app.module';
import { URLSearchParams } from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Steel Thread';

	   apiUrl ='http://localhost:52131/api/name';
     apiUrlPost ='http://localhost:52131/api/name/add/';
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
		   console.log(data)
		   })
	   }

     addNames(newname: string)
     {
       var name = newname;
       console.log("Before "+name);
       let body = JSON.stringify({ name: name});
       let headers = new Headers ({'Content-Type': 'application/x-www-form-urlencoded'});
       let options = new RequestOptions ({headers: headers});
       this.http.post(this.apiUrlPost+name, body, options).subscribe(
      data => {
        console.log(name);
        console.log("Name: " + name);
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
     }
  //  )
     }
