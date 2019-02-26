import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContentService } from '../content.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  page: Object;

  formdata = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    bbdID: new FormControl(),
    position: new FormControl()
  });

  firstname;
  lastname;
  bbdID;
  position;


  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.page = this.contentService.pages['add'];
  }

  onClickSubmit(data) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.bbdID = data.bbdID;
    this.position = data.position;

    console.log("New user:");
    console.log("First Name:" + this.firstname);
    console.log("Last Name:" + this.lastname);
    console.log("bbdID:" + this.bbdID);
    console.log("Position:" + this.position);
  }
  // width = 320;    // We will scale the photo width to this
  // height = 0;     // This will be computed based on the input stream

  // streaming = false;

  // video = null;
  // canvas = null;
  // photo = null;
  // startbutton = null;

  // startup() {
  //   this.video = document.getElementById('video');
  //   this.canvas = document.getElementById('canvas');
  //   this.photo = document.getElementById('photo');
  //   this.startbutton = document.getElementById('startbutton');
  //   navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  //     .then(function (stream) {
  //       this.video.srcObject = stream;
  //       this.video.play();
  //     })
  //     .catch(function (err) {
  //       console.log("An error occurred! " + err);
  //     });
  //   // function() {
  //   //   var width = 320;    // We will scale the photo width to this
  //   //   var height = 0;     // This will be computed based on the input stream

  //   //   var streaming = false;

  //   //   var video = null;
  //   //   var canvas = null;
  //   //   var photo = null;
  //   //   var startbutton = null;
  //   // }
  //   this.video.addEventListener('canplay', function(ev){
  //     if (!this.streaming) {
  //       this.height = this.video.videoHeight / (this.video.videoWidth/this.width);
      
  //       this.video.setAttribute('width', this.width);
  //       this.video.setAttribute('height', this.height);
  //       this.canvas.setAttribute('width', this.width);
  //       this.canvas.setAttribute('height', this.height);
  //       this.streaming = true;
  //     }
  //   }, false);

  //   this.startbutton.addEventListener('click', function(ev){
  //     this.takepicture();
  //     ev.preventDefault();
  //   }, false);
  // }
  

  // takepicture() {
  //   var context = this.canvas.getContext('2d');
  //   if (this.width && this.height) {
  //     this.canvas.width = this.width;
  //     this.canvas.height = this.height;
  //     context.drawImage(this.video, 0, 0, this.width, this.height);
    
  //     var data = this.canvas.toDataURL('image/png');
  //     this.photo.setAttribute('src', data);
  //   } else {
  //     this.clearphoto();
  //   }
  // }

  // clearphoto() {
  //   var context = this.canvas.getContext('2d');
  //   context.fillStyle = "#AAA";
  //   context.fillRect(0, 0, this.canvas.width, this.canvas.height);

  //   var data = this.canvas.toDataURL('image/png');
  //   this.photo.setAttribute('src', data);
  // }
  
}

