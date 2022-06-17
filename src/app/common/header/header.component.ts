import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
       selector: "app-header",
       templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {

       activeTab: string = "home";

       constructor(private router: Router) {}

       ngOnInit(): void {}

       isActiveTab = (tab: string) => {
              return this.router.url===tab ? "active-nav" : ""
       }
}
