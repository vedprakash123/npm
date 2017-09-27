import { Component, OnInit } from '@angular/core';
import { BlogsService} from '../services/blogs.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts = []

  constructor(private blogsService: BlogsService, private router: Router, private route: ActivatedRoute, private slimLoadingBarService: SlimLoadingBarService) { }

  pager = {
    current: 0,
    pageCount: 8,
    itemsPerPage: 1
  };

  ngOnInit() {
    let param = this.route.snapshot.queryParams["page"];
    this.slimLoadingBarService.start();
  	this.blogsService.getPosts(param).subscribe(res => {
  		this.posts = res;
  		console.log("Data Recieved: ", res);
      this.slimLoadingBarService.complete();
  	}, err => {
  		console.log("Getting Error");
  		console.log(err);
      this.slimLoadingBarService.complete();
  	});

    // Create Blog
    /*this.blogsService.createBlog().subscribe(res => {
      //this.posts = res;
      console.log("Create Blog: ", res);
    }, err => {
      console.log("Error on Blog Creation");
      console.log(err);
    }); */

    // Update Blog
   /* let idd = 36; // Create a method & pass dynamin perm - put it inside method.
    this.blogsService.updateBlog(idd).subscribe(res => {
      //this.posts = res;
      console.log("Update Blog: ", res);
    }, err => {
      console.log("Error on Blog Updation");
      console.log(err);
    });*/


  }

  showBlogDetail(bid){ console.log(bid);
    this.router.navigate(['blog', bid]);
  }

  onPageChange(pageNum) {//console.log(pageNum);
    this.router.navigate(['blogs'], { queryParams: { page: pageNum } });
    this.slimLoadingBarService.start();
    this.blogsService.getPosts(pageNum).subscribe(res => {
      this.posts = res;
      console.log("Data Recieved: ", res);
      this.slimLoadingBarService.complete();
    }, err => {
      console.log("Getting Error");
      console.log(err);
      this.slimLoadingBarService.complete();
    });

  }

  // Remove entry
    removeBlog(eid) {//console.log(pageNum);
    //this.router.navigate(['blogs'], { queryParams: { page: pageNum } });
    //let param = this.route.snapshot.queryParams["page"];
    this.blogsService.deleteBlog(eid).subscribe(res => {
      this.posts = res;
      console.log("Data Recieved: ", res);
    }, err => {
      console.log("Getting Error");
      console.log(err);
    });

  }

}
