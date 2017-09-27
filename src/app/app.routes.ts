import {Routes} from '@angular/router';
import {CircularComponent} from './circular/circular.component';
import {SearchComponent} from './search/search.component';
import {UserComponent} from './user/user.component';
import {BlogComponent} from './blog/blog.component';
import {BlogviewComponent} from './blogview/blogview.component';
import { HeroComponent } from './hero/hero.component';

export const appRoutes: Routes = [
    {
        path:'circular',
        component: CircularComponent
    },
    {
        path:'search',
        component: SearchComponent
    },
    {
        path: 'user/:userId',
        component: UserComponent
    },
    {
        path: 'blogs',
        component: BlogComponent
    },
    {
        path: 'blog/:bid',
        component: BlogviewComponent
    },
    {
        path: 'hero',
        component: HeroComponent
    }
];
