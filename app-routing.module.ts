import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhiteComponent } from './white/white.component';
import { BlackComponent } from './black/black.component';
import { RedComponent } from './red/red.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomdComponent } from './homd/homd.component';
 

const routes: Routes = 
[{
   path:'about',
   component:AboutComponent,
},
{
  path:'contact',
  component:ContactComponent,
},
{
  path:'',
  component:HomdComponent,
},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
