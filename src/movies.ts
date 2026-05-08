export interface Movie {
  title: string;
  description: string;
  year: number;
}

export const movies: Movie[] = [
  {
    title: 'Интерстеллар',
    description: 'Команда исследователей отправляется через червоточину в поисках нового дома для человечества.',
    year: 2014
  },
  {
    title: 'Начало',
    description: 'Профессиональный вор внедряется в сны людей, чтобы украсть или внедрить идею.',
    year: 2010
  },
  {
    title: 'Матрица',
    description: 'Хакер узнаёт, что привычный мир — симуляция, созданная машинами.',
    year: 1999
  },
  {
    title: 'Паразиты',
    description: 'История столкновения двух семей из разных социальных слоёв.',
    year: 2019
  }
];
