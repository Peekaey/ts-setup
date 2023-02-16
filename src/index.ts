const world = 'world1';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
