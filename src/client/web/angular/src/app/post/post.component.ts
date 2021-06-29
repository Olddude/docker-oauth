import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  template: `
    <div id="post">
      <header>
        <div>Post Component</div>
      </header>
      <main>
        <div>{{ data$ | async | json }}</div>
      </main>
      <footer>
        <a (click)="reload()">reload</a>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      #post {
        padding: 1rem;
      }
    }
  `]
})
export class PostComponent {

  data$ = this.service.fetch();

  constructor(
    private readonly service: PostService
  ) { }

  reload() {
    this.service.reload();
  }

}
