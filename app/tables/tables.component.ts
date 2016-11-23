import { Component, OnInit } from '@angular/core';
import {Table} from "../_models/table";
import {User} from "../_models/user";
import {UserService} from "../_services/user.service";

@Component({
    moduleId: module.id,
    templateUrl: 'tables.component.html',
    styleUrls: ['tables.component.css']
})

export class TablesComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    tables: string[];
    tableArray: Table[];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.tableArray = new Array();
        this.init();
    }

    ngOnInit(): void {
        this.loadAllUsers();
    }

    private init() {
        for(var i = 1; i < 9; i ++) {
            let table = new Table(i);
            this.tableArray.push(table);
        }
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

}