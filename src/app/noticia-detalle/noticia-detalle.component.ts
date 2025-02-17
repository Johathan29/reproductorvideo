import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute ,ParamMap } from '@angular/router';
import { NoticiasComponent } from '../noticias/noticias.component';
import { ModelNoticias } from '../model-noticias';
import { Noticias } from '../noticias';
@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.css']
})

export class NoticiaDetalleComponent implements OnInit {
  

  
  ModelNoticias: ModelNoticias;

   noticia: any = ModelNoticias;

  constructor(private route: ActivatedRoute) {
   

  }
  
     
  ngOnInit(): void {
    
  
    this.route.paramMap
 .subscribe((params: ParamMap) => {
 let id = this.route.snapshot.paramMap.get('id');
   
  this.noticia = Noticias.find(item => item.id.toString() === id);
 });


  //  let id = this._route.snapshot.paramMap.get('id');

    
  
    
   
  }

 
  


}
