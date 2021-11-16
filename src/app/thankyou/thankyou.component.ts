import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  id: any;

  constructor(private route:Router){} 

  ngOnInit() {
    var count = 9;
    setInterval(() => {
      count = count -1 ;
      $('#count').text(count);
      if (count == 0 ){
        this.route.navigate(['/home']);
          clearInterval();
      }
      
  }, 1000);
  }


}
