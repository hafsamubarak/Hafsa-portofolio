import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { RightSideComponent } from './homePage/right-side/right-side.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortofolioComponent } from './portofolio/portofolio/portofolio.component';

const routes: Routes = [
  {path:"",component:RightSideComponent},
  {path:"about",component:AboutComponent},
  {path:"portfolio",component:PortofolioComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
