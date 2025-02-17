import { Component, OnInit } from '@angular/core';
import { ReadDataService } from '../read-data.service';
import { ActivatedRoute } from '@angular/router';
import { ModelNoticias } from '../model-noticias';
import { Noticias } from '../noticias';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {

ModeloNoticia: ModelNoticias[];
  constructor(public infor: ReadDataService, private rutaActiva: ActivatedRoute) {
     
  }

  ngOnInit(): void {
     this.ModeloNoticia = Noticias;
    console.log(this.ModeloNoticia);
  
    
    };

}
