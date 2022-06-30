import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

const generateId = () => String(Date.now());

@Injectable()
export class ArticlesService {
  articles: Article[] = [{ id: 'a1', name: 'Truc', price: 2.34, qty: 123 }];

  create(createArticleDto: CreateArticleDto) {
    const article = new Article();
    Object.assign(article, createArticleDto);
    article.id = generateId();
    this.articles.push(article);
  }

  findAll() {
    return this.articles;
  }

  findOne(id: string) {
    const article = this.articles.find((a) => a.id === id);
    if (!article) {
      throw new NotFoundException();
    }
    return article;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: string) {
    this.articles = this.articles.filter((a) => a.id !== id);
  }
}
