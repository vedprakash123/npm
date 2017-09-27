import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {RouterModule} from '@angular/router';

import {appRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { AppService } from './services/app.service';
import { BlogsService } from './services/blogs.service';
import { BlogComponent } from './blog/blog.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { PagerComponent } from './elements/pager/pager.component';
import { HeroComponent } from './hero/hero.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent,
    UserComponent,
    BlogComponent,
    BlogviewComponent,
    PagerComponent,
    HeroComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    SlimLoadingBarModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [AppService, BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
