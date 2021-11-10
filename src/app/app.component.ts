import { Component, Input } from '@angular/core';
import { Post } from './models/Post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts!:Post[]

  title:string = ""
  content:string = ""

  options:object = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  ngOnInit(): void {
    this.posts = [
      {
        title: 'First',
        date: new Date('2021-10-25').toLocaleDateString('en-US', this.options),
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Pellentesque sapien. Duis risus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. In convallis. Etiam egestas wisi a erat. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Nunc auctor. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Duis risus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
      },
      {
        title: 'Second',
        date: new Date('2021-11-08').toLocaleDateString('en-US', this.options),
        content: 'Mauris dictum facilisis augue. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Pellentesque ipsum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Maecenas aliquet accumsan leo. Nulla quis diam. Nullam dapibus fermentum ipsum. Pellentesque arcu. Aenean id metus id velit ullamcorper pulvinar. Nulla non arcu lacinia neque faucibus fringilla. In convallis. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Vivamus luctus egestas leo. Mauris dictum facilisis augue. Integer tempor. Aenean placerat. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit.'
      }
    ]
  }

  showNewPostForm() {
    const newPostForm = document.getElementById('new-post')
    if(newPostForm!.style.display === 'none') {
      newPostForm!.style.display = 'flex'
    } else {
      newPostForm!.style.display = 'none'
    }
  }

  addPost() {
    if(this.title && this.content) {
      this.posts.push({
        title: this.title,
        date: new Date().toLocaleDateString('en-US', this.options),
        content: this.content
      })
    }
  }
}
