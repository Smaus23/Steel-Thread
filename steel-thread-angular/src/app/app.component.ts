import { Component } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response} from '@angular/http';
import { AppModule } from './app.module';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Steel Thread';

	   apiUrl ='http://localhost:52131/api/name';
     apiUrlPost ='http://localhost:52131/api/name/add';
	   data: any = {};


	   constructor (private http: Http)
	   {
		   this.getNames();
		   this.getData();
      // this.addNames();
      // this.postData();

       let params = new URLSearchParams();
       params.append('name', name);
       this.http.post(this.apiUrlPost, params).subscribe(
      data => {
        alert(params);
        console.log("Name: " + name)
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
	   }

	   getData()
	   {
		   return this.http.get(this.apiUrl)
		   .map((res: Response) => res.json())
	   }

     //postData()
     //{
    //   return this.http.post(this.apiUrlPost, this.params)
		 //  .map((res: Response) => res.json())
    // }

	   getNames()
	   {
		   this.getData().subscribe(data => {
		   this.data = data
		   console.log(data)
		   })
	   }

    // addNames()
    // {
    //   this.postData().subscribe(
      //   data => {
      //     console.log(data);
      //   },
      //   error => {
        //   console.log("Error");
      //   }
  //  )
     }
