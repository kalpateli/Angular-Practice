import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private navListSubject = new BehaviorSubject<any[]>([]);

  getNavList() {
    return this.navListSubject.asObservable();
  }

  setNavList(navList: any[]) {
    this.navListSubject.next(navList);
  }

  constructor() { }

  
}
