import ErrorRepository from '../classes/errors';

const errorRep = new ErrorRepository();
errorRep.errors.set(1, 'Ошибка 1')
  .set(2, 'Ошибка 2');

test.each([
  [2, 'Ошибка 2'],
  [3, 'Unknown error'],
])(
  ('Проверка работы метода translate'),
  (code, ans) => {
    expect(errorRep.translate(code)).toBe(ans);
  },
);
