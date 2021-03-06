import { Component, OnInit} from '@angular/core';
import $ from "jquery";
import { HostListener } from '@angular/core';
interface Tenure {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
ngOnInit(){
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $(".navbarClass").css("background" , "blue");
      }

      else{
        $(".navbarClass").css("background" , "transparent");
      }
    })
  })
}

  monthlyIncome: number ;
  monthlyExpense: number;
  updateMonthlyIncome(event) {
    this.monthlyIncome = event.value;
  }
  updateMonthlyExpense(event) {
    this.monthlyExpense = event.value;
  }

  tenures: Tenure[] = [
    {value: 'condition-0', viewValue: '6 Months'},
    {value: 'condition-1', viewValue: '12 Months'},
    {value: 'condition-2', viewValue: '18 Months'},
    {value: 'condition-3', viewValue: '24 Months'}
  ];


  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
      let element = document.querySelector('#navbar');
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
    }


}
