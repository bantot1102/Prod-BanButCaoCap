import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  butcaocap = [
    // Bút bi
    {name: 'Bút bi Allan D’lious 6002BG', price: 4490000 , imgs: 'Allan-Dlious-9102-BBK-215x323.jpg'},
    {name: 'Bút bi Allan D’lious 2102BS', price: 7980000, imgs: '6-Allan-Dlious-120-BBK-262x394.jpg' },
    {name: 'Bút bi Allan D’lious 6002BBK', price: 4890000, imgs: '5-Allan-Dlious-0502-BBL-262x394.jpg' },
    // Bút dạ bi
    {name: 'Bút dạ bi Allan D’lious 30302RG', price: 3000000, imgs: '2-Allan-Dlious-0302-RN-262x394.jpg' },
    {name: 'Bút dạ bi Allan D’lious 0302RPK', price: 6000000, imgs: '3-Allan-Dlious-0302-RP-264x394.jpg' },
    //Bút dạ kim
    {name: 'Bút dạ kim Montblanc Starwalker Red Gold Resin Fineliner Pen MB105652', price: 5890000, imgs: '2-montblanc-starwalker-red-gold-resin-fineliner-105652-1-215x323.jpg' },
    {name: 'Bút dạ kim Montblanc Starwalker Blue Planet Precious Resin Fineliner MB125291', price: 2490000, imgs: '3-montblanc-starwalker-blue-planet-precious-resin-fineliner-mb125291-215x323.jpg' },
    {name: 'Bút Lamy Joy Black Fountain Pen', price: 3390000, imgs: '4-parker-ingenuity-red-dragon-gt-5th-1861196-1-215x323.jpg' },
    //Bút máy
    {name: 'Bút máy Lamy Al-Star Black Fountain Pen', price: 1490000, imgs: '2-Allan-Dlious-6002-FS-215x323.jpg' },
    {name: 'Bút máy Montblanc Patron Of Art Homage To Ludwig II LE 4810 Fountain Pen MB117842', price: 8000000, imgs: '3-Allan-Dlious-6002-FS-215x323.jpg' },
  ];
}
