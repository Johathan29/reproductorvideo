import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormNoticiasComponent } from './form-noticias/form-noticias.component';
import { FormGroup, FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
     { path: 'nueva-noticia', component: FormNoticiasComponent },
      { path: 'noticias', component: NoticiasComponent },
      { path: 'noticias/:id', component: NoticiaDetalleComponent },
  { path: '**', component: NotFoundComponent },

        { path: '',   redirectTo: '/app', pathMatch: 'full' }

 
 ];
@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    HeaderComponent,
    NoticiaDetalleComponent,
    NotFoundComponent,
    FormNoticiasComponent,
    HomeComponent,
    FooterComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    
         ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
