export class Todo {
  load() {
    let todos = [
      {
        text: 'market',
        isComplete: false,
        id: 1

      },
      {
        text: 'cricket',
        isComplete: false,
        id: 2
      },
      {
        text: 'Football',
        isComplete: true,
        id: 3
      }
    ];
    localStorage.setItem('todos', JSON.stringify(todos));
    return
  }
}