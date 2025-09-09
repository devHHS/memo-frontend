import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';

interface Memo {
  id: number;
  content: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';

  readonly API_URL = 'http://localhost:8080/memos';

  memos: Memo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMemos();
  }

  getMemos() {
    this.http.get<Memo[]>(this.API_URL)
      .subscribe(memos => {
        this.memos = memos;
      });
  }
}
