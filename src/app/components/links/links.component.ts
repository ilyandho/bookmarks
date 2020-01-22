import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-links",
  templateUrl: "./links.component.html",
  styleUrls: ["./links.component.scss"]
})
export class LinksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  handleFavorite($event) {
    console.log("Clicked");
    const target = $event.target;

    if (target.classList.contains("favorited")) {
      const unfavorited = document.querySelector(".unfavorited");
      console.log(unfavorited);
      target.style.display = "none";
      (<any>unfavorited).style.display = "inline";
      // console.log(unfavorited);
    } else {
      const favorited = document.querySelector(".favorited");
      console.log(favorited);
      target.style.display = "none";
      (<any>favorited).style.display = "inline";
    }
  }

  handleDelete($event) {
    console.log($event.target);
  }
}
