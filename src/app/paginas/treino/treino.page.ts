import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  rota(){
    this.router.navigate(['/home'])
  }
}
