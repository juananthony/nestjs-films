import { Controller, Get, Req } from '@nestjs/common';
import { FilmsDTO } from './films.interface';

@Controller('films')
export class FilmsController {
  @Get()
  getFilms(@Req() req: Request): [FilmsDTO] {
    return [
      {
        id: 1,
        title: 'A New Hope',
        description: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.',
        director: 'George Lucas',
        producer: 'Gary Kurtz, Rick McCallum',
        release_date: '1977-05-25',
        rt_score: 92,
      },
    ];
  }
}
