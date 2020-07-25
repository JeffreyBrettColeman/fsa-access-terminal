import { Component, OnInit } from '@angular/core';
import {InitService} from '../../services/init.service'
import { Terminal } from 'src/app/models/terminal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentTerminal: Terminal
  accessibleTerminals: Array<Terminal>;

  constructor(private initService: InitService) { }

  async ngOnInit() {
    this.accessibleTerminals = await this.initService.getTerminals().toPromise();
  }

}
