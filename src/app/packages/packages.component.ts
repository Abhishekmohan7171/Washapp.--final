import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  whyus = "Washapp is a brand which is literally going to change the way people think about car cleaning. It is a unique mechanized car cleaning concept where cars are getting pampered by the latest equipments including high pressure cleaning machines, spray injection and extraction machines, high powered vacuum cleaners, steam cleaners and so on. This venture is entirely dedicated towards spreading the awareness among car users about their car hygiene habits, cleanliness, durability of exterior look and other common cleaning tips.";


  time = [{
    Image:"assets/silver-medal.png",
    Package:"SILVER",
    Title: "Weekly",
    Price: "1000 Rs",
    Description: "Weekly based services"
  },
  {
    Image:"assets/coin.png",
    Package:"GOLD",	  
    Title: "Monthly",
    Price: "5000 Rs",
    Description: "Monthly based services"
  },
  {
    Image:"/assets/platinum.png",
    Package:"PLATINUM",	  
    Title: "Yearly",
    Price: "10000 Rs",
    Description: "Yearly based services"
  }
  ];

  // times = this.db.database.ref('Packages/Time').get().then((value)=>{
  //   console.log(value)
  // }).catch((err)=>{
  //   console.log(err,"error")
  // });



  ngOnInit(): void {

  }

}
