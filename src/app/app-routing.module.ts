import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './shared/Components/about-us/about-us.component';
import { SignupPageComponent } from './module-3/signup-page/signup-page.component';
import { LoginPageComponent } from './module-3/login-page/login-page.component';
import { Module2Component } from './module-2/module-2.component';
import { PageNotFoundComponent } from './shared/Components/page-not-found/page-not-found.component';
import { authLogged } from './shared/guards/auth-logged.guard';
import { PreloadAllModules } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { authRoleGuard } from './shared/guards/auth-role.guard';

const routes: Routes = [
  {path:'',
   redirectTo:'home',
   pathMatch:'full'
  },
  // {path : 'home',
  //   loadChildren:()=>import('./home/home.module')
  //   .then(mod=>mod.HomeModule),
  // },
  {path : 'home',
  canMatch:[authRoleGuard],
    loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule),
  },
  {path : 'home',
    loadChildren:()=>import('./employees/employees.module')
    .then(mod=>mod.EmployeesModule),
  },
  {path : 'about-us', component: AboutUsComponent},
  {path : 'module-2', component: Module2Component},
  {path : 'employees', component: UsersComponent , canActivate:[authLogged]},
  
  {
    path : 'auth' , 
    // children :
    //     [
    //       {path:'sign-up', component: SignupPageComponent},
    //       {path:'log-in', component: LoginPageComponent},
    //     ]

    loadChildren:()=>import('./module-3/auth.module')
    .then(mod=>mod.Module3Module)

  },
  //wildCard Route
  { path:'**' , component : PageNotFoundComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{enableTracing:true}
  imports: [RouterModule.forRoot(routes

    // {
    //   preloadingStrategy:PreloadAllModules
    // }
    )],
  exports: [RouterModule]
})


export class AppRoutingModule { }
