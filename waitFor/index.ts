/**
 * A utility helper function for to wait for an expectation to resolve
 *
 * @function waitFor
 * @param callback - a callback function to invoke
 * @param timeout - time to wait before throwing an error
 * @returns promise or error
 * @example ```await waitFor(() => { expect(a).toEqual(b) });```
 */
const waitFor = (callback: () => void, timeout = 1000): Promise<any> =>
  new Promise((resolve, reject) => {
    const startTime = Date.now();

    const tick = () => {
      setTimeout(() => {
        try {
          callback();
          resolve("");
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

export default waitFor;
