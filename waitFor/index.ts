/**
 * A utility helper function to wait for an asynchronous expectation to resolve
 *
 * @param callback - a callback function to invoke
 * @param timeout - time to wait before throwing an error
 * @returns promise or error
 * @example ```await waitFor(() => { expect(a).toEqual(b) });```
 */
function waitFor(callback: () => void, timeout = 1000): Promise<void | Error> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const tick = () => {
      setTimeout(() => {
        try {
          resolve(callback());
        } catch (err) {
          if (Date.now() - startTime > timeout) {
            reject(err);
          } else {
            tick();
          }
        }
      }, 50);
    };

    tick();
  });
}

export default waitFor;
