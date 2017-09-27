import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BlogsService} from '../services/blogs.service';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css'],
  providers:[BlogsService]
})
export class BlogviewComponent implements OnInit {

  post = [];

  constructor(private blogsService: BlogsService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    let bid = this.activeRoute.snapshot.params['bid'];
    this.blogsService.getPost(bid).subscribe(res => {
  		this.post = res;
  		console.log("Data Recieved: ", res);
  	}, err => {
  		console.log("Getting Error");
  		console.log(err);
  	});

  }

}
