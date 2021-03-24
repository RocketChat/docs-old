# Scheduler API

## How it works

The Scheduler API gives apps the possibility of creating tasks that will run in a defined schedule. It can me a one time event or a recurring task. It uses [agenda.js](https://github.com/agenda/agenda) as backend, so [schedule syntax](https://github.com/agenda/human-interval) and internal processes are all according to its documentation.

Detailed documentation on the API can be found at the [Apps Engine's docs](https://rocketchat.github.io/Rocket.Chat.Apps-engine/modules/scheduler.html).

There's also an [example app](https://github.com/RocketChat/Apps.RocketChat.Tester/tree/scheduler) that can be used as guide.

## Permissions

As per the [Permission System](https://docs.rocket.chat/apps-development/permission-system), the [Schedule API needs the following permission](https://docs.rocket.chat/apps-development/permission-system#register-and-maintain-scheduled-jobs) in your app's manifest:

```javascript
{
  permissions: [
    { "name":"scheduler" }
  ]
}
```

## How to use it

### Registering job functions \(processors\)

To use the Scheduler API you'll need two things: the functions to be run as jobs \(we call them `processors`\) and the schedule in which they will be run on. This is configured in the app's `extendConfiguration` method. During the app's startup, the processors are registered to make them available for scheduling.

```typescript
public async extendConfiguration(configuration: IConfigurationExtend) {
    configuration.scheduler.registerProcessors([
        {
            id: 'first',
            processor: async (jobData) => console.log(`[${ Date() }] this is a task`, jobData),
        },
    ]);
}
```

The `processor` is an `async` function and can receive arguments \(`jobData`\). The arguments are passed during scheduling.

### Starting a job

To trigger the registered processor as a job, you must provide the `id` of the processor, the type of job it will be and optionally an object \(`data`\) that will be passed to the processor as argument \(`jobData`\). Available types are `RECURRING`, making the job run in a `interval`, and `ONETIME`, making the job run only once \(`when`\). Starting a job can be done when running a slashcommand, for example:

```typescript
// slashcommand class
public async executor(context: SlashCommandContext, read: IRead, modify: IModify): Promise<void> {
    // SCHEDULING A RECURRING TASK
    const task = {
      id: 'first',
      interval: '10 seconds',
      data: { test: true },
    };
    await modify.getScheduler().scheduleRecurring(task);

    // SCHEDULING ONETIME TASK
    const task = {
      id: 'first',
      when: '8 seconds',
    };
    await modify.getScheduler().scheduleOnce(task);
}
```

There's also the possibility of triggering a job as soon as it gets registered, without the need for manual or automated triggering.

When you register your processor in the `extendConfiguration` method, you can pass a prop called `startupSetting` in the processor's object:

```typescript
import { StartupType } from '@rocket.chat/apps-engine/definition/scheduler';
// ...
    configuration.scheduler.registerProcessors([
        {
            id: 'first',
            processor: async (jobData) => console.log(`[${ Date() }] this is a task`, jobData),
            startupSetting: {
              type: StartupType.ONETIME,
              when: '20 seconds',
              data: { test: true },
            }
        },
        {
            id: 'second',
            processor: async (jobData) => console.log(`[${ Date() }] this is a task`, jobData),
            startupSetting: {
              type: StartupType.RECURRING,
              interval: '20 seconds',
            }
        },
    ]);
```

This will indicate that you want that particular processor to be scheduled as soon as it gets registered. You can define the "immediate scheduling" as a recurring job \(`StartupType.RECURRING`\) or a onetime job \(`StartupType.ONETIME`\). You can also pass data using the `data` object. It will work just like when you schedule a task using the `modify` accessor.

### Canceling a job

To stop a job, all you have to do is pass the id of the job you want to stop

```typescript
    const jobId = 'first';
    await modify.getScheduler().cancelJob(jobId);
```

It will stop the running job \(if any\).

### Canceling all jobs from the app

To stop all the current running jobs from the app:

```typescript
    await modify.getScheduler().cancelAllJobs();
```

