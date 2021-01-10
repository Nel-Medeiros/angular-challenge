import { Photos } from './photos';
import { PhotosService } from '../services/photos-service.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  obs: Observable<any>;
  photos: Photos[] = [];
  dataSource = new MatTableDataSource<Photos>(this.photos);

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.getPhotos();
    this.obs = this.dataSource.connect();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public getPhotos() {
    let resp = this.photosService.photosData();
    resp.subscribe(data => {
      this.dataSource.data = data as Photos[]
    })
  }

}
