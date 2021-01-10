import { AppNavComponent } from './../app-nav/app-nav.component';
import { UsersCompany } from './usersCompany';
import { UsersAddress } from './usersAddress';
import { DialogDataComponent } from './../dialog-data/dialog-data.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../services/users-service.service';
import { Users } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  USER_DATA: Users[] = [];
  dataSource = new MatTableDataSource<Users>(this.USER_DATA);
  displayedColumns = ['name', 'username', 'email', 'actions'];

  constructor(public dialog: MatDialog, private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  };

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  public getUsers() {
    let resp = this.usersService.usersData();
    resp.subscribe(data => {
      this.dataSource.data = data as Users[]
    });
  };

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  openDialog(name: string, username: string, email: string, phone: string, website: string, address: UsersAddress, company: UsersCompany) {
    name = name;
    username = username;
    email = email;
    phone = phone;
    website = website;
    address = address;
    company = company;
    this.dialog.open(DialogDataComponent, {
      data: {
        name: name,
        username: username,
        email: email,
        phone: phone,
        website: website,
        address: address,
        company: company
      }
    });
  };

}
