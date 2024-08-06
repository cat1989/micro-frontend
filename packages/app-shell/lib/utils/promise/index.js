export const serial = (tasks) => tasks.reduce((prev, task) => prev.then(() => task()), Promise.resolve());
