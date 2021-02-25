const tasks = [
  (cb) => {
    console.log('Task1 Started Execution');
    setTimeout(cb, 1000);
  },
  (cb) => {
    console.log('Task2 Started Execution');
    setTimeout(cb, 1000);
  },
  (cb) => {
    console.log('Task3 Started Execution');
    setTimeout(cb, 1000);
  },
];

const iterate = (index) => {
  if (index === tasks.length) return finish();

  const task = tasks[index];
  task(() => iterate(index + 1));
};

const finish = () => console.log('All Tasks Executed Successfully');

iterate(0);
