## Parallel Execution

Also Nodejs is **Single Threaded** we have one Thread But Also we Can Still Achieve **Concurrency**

Thanks to **Non-Blocking** Nature of Nodejs

So We Can Execute Async Operations in Parallel Because their Concurrency is Handled internallu by Non-Block API's

#### How it Work

Easy by Executing all Tasks at Once Without Waiting Previous Task To Be Finish

This Technique Improve The **Performance** of The Process By Finished All Tasks Parallel

#### Code Snippet

```javascript
let completed = 0;
tasks.forEach((task) => {
  task(() => {
    if (++completed === tasks.length) {
      finish();
    }
  });
});

function finish() {
  console.log('All tasks executed!');
}
```
