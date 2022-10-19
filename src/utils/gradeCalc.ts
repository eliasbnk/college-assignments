export const calcGrade: (got: number, outof: number) => string = (got, outof) => {
  return got === 0 ? 'UNGRADED' : `Grade: ${((got / outof) * 100).toFixed(2)}%`;
};
