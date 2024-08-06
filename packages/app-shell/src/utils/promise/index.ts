type Task = () => PromiseLike<void>

export const serial = (tasks: Task[]) => tasks.reduce((prev, task) => prev.then(() => task()), Promise.resolve())
