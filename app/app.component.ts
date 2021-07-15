import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIRedditService } from './redditAPI.service';
import { Post } from './redditPost';
//. means this is importing a file you created
import { Logger } from './logger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paupersReddit';
  post: Post | null = null;
  constructor(private logger: Logger, private api: APIRedditService) { }
  testLogger() {
    this.logger.log("Hello World");
  }

    //This is our getModel() method its job is to delegate a call  to the api
  //and process responses
  redditAPICall(id: number){
    //in order to pull anything out of our call we need to subscribe
    //which is how we pull out the resulting data
    let response = this.api.getThreads(id);
    console.log(response);
  }
}
