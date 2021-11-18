import { Component, OnInit, Inject } from '@angular/core';
import $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  sendMail() {
    // this.route.navigate(['/thankyou']);
    if ($('#full_name').val() && $('#email').val()) {
      $('#contact-form')
        .attr('disabled', 'true')
        .css('pointer-events', 'none')
        .find('.spinner')
        .show();
      $('#contact-form').find('span').text('Sending');
      $('#contact-form').find('i').css('visibility', 'hidden');
      $.ajax({
        url: '/StackRoute-API/api/Drupal/PostDataStackroute',
        method: 'GET',
        headers: {
          Token: 'a4P4M9fF3pIgd4Vso3Iqaa3qDPRTcptquTV6eKODNtcS1bUe4+6QDQ==',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers':
            'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        },
        data: {
          Name: $('#full_name').val(),
          EmailID: $('#email').val(),
          PhoneNo: $('#number').val(),
          CompanyName: $('#company').val(),
          Query: $('#requirement').val(),
          Category: 'STACKROUTE-LAB',
          PortalName: 'B2B',
          ApplicationName: 'STACKROUTE-LAB',
        },
        dataType: 'json',
        success: function (res: any) {
          console.log('res', res);
          $('#contact-form')
            .attr('disabled', 'false')
            .css('pointer-events', '')
            .text('Send')
            .find('.spinner')
            .hide();
          $('#contact-form').find('span').text('Send');
          $('#contact-form').find('i').css('visibility', 'visible');
          // window.location = "thankyou.html";
          window.location.href = `${window.location.origin}/thankyou`;
        },
      });
    }
  }
}
