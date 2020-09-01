export const category2Str = (categoryNum) => {
  switch (categoryNum) {
    case 1:
    case 3:
      return '開発';
    case 2:
      return '趣味'
    default:
      return '雑記';
  }
}
