import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { latLng, tileLayer } from 'leaflet';

import { ChartType, Stat, Chat, Transaction,Map} from './dashboard.model';

import { statData, revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions,map,realTime } from './data';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard Component
 */
export class DashboardComponent implements OnInit {

  term: any;
  chatData: Chat[];
  transactions: Transaction[];
  statData: Stat[];
  map:Map[];
  SalesRevenue:any=[];
  RecentEarnings:any=[];
  CustomerNames:any=[];
  TransactionDetails:any=[];
  RealTimeSales:any=[];
  RetentionDetails:any=[];
  
  constructor(private service:SharedService, public formBuilder: FormBuilder) {
  }

  // bread crumb items
  breadCrumbItems: Array<{}>;

  revenueChart: ChartType;
  salesAnalytics: ChartType;
  sparklineEarning: ChartType;
  sparklineMonthly: ChartType;
  realTime:ChartType;
  

  // Form submit
  chatSubmit: boolean;

  formData: FormGroup;


  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 6,
    center: latLng(46.879966, -121.726909)
  };
  //this is the function that get's executed when the component is in scope
  ngOnInit(): void {
    this.refreshSalesRevenue();
    this.refreshRecentEarnings();
    this.refreshCustomerNames();
    this.refreshTransactionDetails();
    this.refreshRealTimeSales();
    this.refreshRetentionDetails();
    this.breadCrumbItems = [{ label: 'Nazox' }, { label: 'Dashboard', active: true }];
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });
    this._fetchData();
  }
  refreshSalesRevenue(){
    this.service.getSalesRevenue().subscribe(data =>{
      this.SalesRevenue = data;
    });
  }
  refreshRecentEarnings(){
    this.service.getRecentEarnings().subscribe(data =>{
      this.RecentEarnings = data;
    });
  }

  refreshCustomerNames(){
    this.service.getCustomerNames().subscribe(data => {
      this.CustomerNames = data;
    });
  }
  refreshTransactionDetails(){
    this.service.getTransactionDetails().subscribe(data => {
      this.TransactionDetails = data;
    });
  }
  refreshRealTimeSales(){
    this.service.getRealTimeSales().subscribe(data => {
      this.RealTimeSales = data;
    });
  }

  refreshRetentionDetails(){
    this.service.getRetentionDetails().subscribe(data => {
      this.RetentionDetails = data;
    });
  }
  private _fetchData() {
    this.revenueChart = revenueChart;
    this.salesAnalytics = salesAnalytics;
    this.sparklineEarning = sparklineEarning;
    this.sparklineMonthly = sparklineMonthly;
    this.chatData = chatData;
    this.transactions = transactions;
    this.statData = statData;
    this.map=map;
    this.realTime=realTime;
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get('message').value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.chatData.push({
        align: 'right',
        name: 'Ricky Clark',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes()
      });

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null
      });
    }

    this.chatSubmit = true;
  }
}
