import { Component } from '@angular/core';
import { ApiScryfallService } from './shared/service/api-scryfall.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
 isOuvert: string = "ferme";
   isSlide: string = "main";
  constructor(
    private apiScryfallService: ApiScryfallService
  ){}

  ngOnInit(){
    this.apiScryfallService.getCard('aust com').subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

    onDeplier(){
      /* NOM DE VARIABLE EN FRANCAIS SEROUSLYYYYYYYY UN PEU DE RESPECT!!!!!!!!!!!!!
      RESPECTE TOI */
    if (this.isOuvert == "ouvert"){
      this.isOuvert = "ferme";
      this.isSlide = "main";
    }else{
      this.isOuvert = "ouvert";
      this.isSlide = "mainOuvert";
    }
  };

  
}
