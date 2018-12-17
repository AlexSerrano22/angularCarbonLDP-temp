import {Component, OnInit} from '@angular/core';
import {Author, AuthorService} from '../../services/author.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements OnInit {

  author: Author = {
    name: ''
  };

  newAuthorForm = new FormGroup({
    name: new FormControl(this.author.name, [Validators.required, Validators.minLength(3)])
  });

  constructor(private _authorService: AuthorService) {
  }

  ngOnInit() {
  }

  createAuthor() {
    const author = {
      name: this.newAuthorForm.value.name
    };

    this._authorService.createAuthor(author).then((authorDocument) => {

    });
  }

}
