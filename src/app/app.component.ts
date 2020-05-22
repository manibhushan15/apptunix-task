import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-demo';
  arr = new Array<any>();
  selectedFile: any;
  outputImg: any;
  arrayOne(n: number): any[] {
    return Array(n);
  }
 
  onFileChanged(event, i) {
    let that = this;
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      that.outputImg = reader.result;
      that.arr.push(reader.result);
    };
    reader.readAsDataURL(this.selectedFile);
  } 

  removeUpload(i){
    this.arr[i] = null;
    this.selectedFile = null;
    this.outputImg = null;
    const indexT = this.arr.indexOf(null);
    if (indexT > -1) {
      this.arr.splice(indexT, 1);
    }
   }

}
