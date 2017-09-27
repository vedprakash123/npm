import { Component } from '@angular/core';

import { BlogsService} from '../services/blogs.service';
import { Hero } from '../hero';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'hero-form',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

constructor(private blogsService: BlogsService, private slimLoadingBarService: SlimLoadingBarService) { }
 
 	/*startLoading() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }

    stopLoading() {
        this.slimLoadingBarService.stop();
    }

    completeLoading() {
        this.slimLoadingBarService.complete();
    }*/

  powers = ['', 'Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer', 'Independence Day'];

  model = new Hero(18, 'Dr IQ', this.powers[1], 'ss@gmail.com', 'enter Text here', 'female', '', 'Chuck Overstreet');

  submitted = false;

  onSubmit() {  console.log(this.model);

    this.slimLoadingBarService.start();
    //}
    this.blogsService.createBlog(this.model).subscribe(res => {
    	this.submitted = true;
      console.log("Create Blog: ", res.nid[0].value);
      this.slimLoadingBarService.complete();
    }, err => {
      console.log("Error on Blog Creation");
      console.log(err);
      this.slimLoadingBarService.complete();
    });
  }

  newHero() {
    this.model = new Hero(42, '', '', '', '', '', '');
  }
}