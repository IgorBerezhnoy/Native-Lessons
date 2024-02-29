// Single Responsibility Principle ...Принцип единственной ответственности
class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  updateText(text) {
    this.text = text;
    this.modified = true;
  }

  show() {
    console.log(this.text);
  }


}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  toHtml() {
    return `<div>${this.news.text}</div>`;
  }

  toJSON() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text
    });
  }

  xml() {
    return ` <news>
 <title>${this.news.title}</title>
</news>`;
  }
}

const news = new News('title', 'text');
news.updateText('new text');
const printer = new NewsPrinter(news);
console.log(printer.toJSON())
