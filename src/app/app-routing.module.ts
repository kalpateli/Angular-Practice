import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './shared/Components/about-us/about-us.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { Module2Component } from './module-2/module-2.component';
import { PageNotFoundComponent } from './shared/Components/page-not-found/page-not-found.component';
import { authLogged } from './shared/guards/auth-logged.guard';
import { PreloadAllModules } from '@angular/router';
// import { UsersComponent } from './employees/components/employee-list/employee-list.component';
import { authRoleGuard } from './shared/guards/auth-role.guard';

const routes: Routes = [
  {path:'',
   redirectTo:'home',
   pathMatch:'full'
  },

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
  {path : 'module-2', component: Module2Component,canActivate:[authLogged]},
  // {path : 'employees', component: UsersComponent , canActivate:[authLogged]},
  
  {
    path : 'auth' , 
    // children :
    //     [
    //       {path:'sign-up', component: SignupPageComponent},
    //       {path:'log-in', component: LoginPageComponent},
    //     ]

    loadChildren:()=>import('./auth/auth.module')
    .then(mod=>mod.AuthModule)

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


