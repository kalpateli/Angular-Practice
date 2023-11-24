import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupPageComponent } from './module-3/signup-page/signup-page.component';
import { LoginPageComponent } from './module-3/login-page/login-page.component';
import { Module2Component } from './module-2/module-2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { module2GuardGuard } from './guards/module2-guard.guard';
import { PreloadAllModules } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path:'',
   redirectTo:'/home',
   pathMatch:'full'
  },
  {path : 'home',
    loadChildren:()=>import('./home/home.module')
    .then(mod=>mod.HomeModule),
  },
  {path : 'about-us', component: AboutUsComponent},
  {path : 'module-2', component: Module2Component, canActivate:[module2GuardGuard]},
  {path : 'employees', component: EmployeesComponent},
  
  {
    path : 'auth' , 
    // children :
    //     [
    //       {path:'sign-up', component: SignupPageComponent},
    //       {path:'log-in', component: LoginPageComponent},
    //     ]

    loadChildren:()=>import('./module-3/module-3.module')
    .then(mod=>mod.Module3Module)

  },
  //wildCart Route
  { path:'**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {
    //   preloadingStrategy:PreloadAllModules
    // }
    )],
  exports: [RouterModule]
})


export class AppRoutingModule { }
