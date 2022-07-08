import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.css']
})
export class OurWorksComponent implements OnInit {

  constructor() { }

  works = "Washapp is a brand which is literally going to change the way people think about car cleaning. It is a unique mechanized car cleaning concept where cars are getting pampered by the latest equipments including high pressure cleaning machines, spray injection and extraction machines, high powered vacuum cleaners, steam cleaners and so on.In this fast moving life today we tend to spend more time in travelling as a result spend hours in the car, navigating the traffic jams. Air Pollution, Dust, Rain, Sunlight and Adverse road conditions all keeps adding on woos of common car users. And as a result, there is a severe need of Professional Car Cleaning Organization to take care of all Car Cleaning jobs and give us the finest and ultimate car cleaning experience and satisfaction."




services = [{
	Image:"/assets/sport-car.png",
	Work:"Car Wash"
},
{
	Image:"assets/motorbike.png",
	Work:"Bike Wash"
},
{
	Image:"assets/star.png",
	Work:"Car Detailing"
},
{
	Image:"assets/maintenance.png",
	Work:"General Checkup"
}
]; 


  ngOnInit(): void {
  }

}
