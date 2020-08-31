import { CreateBookDTO } from '../model/dto/createBookDTO';
import { Book } from '../model/model/book';


export class HelloService {
  private books: Book[];
  constructor() {
    this.books = [];
  }

  protected async createBook(params: CreateBookDTO): Promise<object> {
    const book = new Book;
    book.id = this.books.length;
    book.name = params.name;
    book.description = params.description;

    this.books.push(book)

    return book;
  }
}