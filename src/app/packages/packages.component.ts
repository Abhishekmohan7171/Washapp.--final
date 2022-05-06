import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  whyus = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";


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
