import { act } from "react-dom/test-utils";
import waitFor from "../waitFor";

/* istanbul ignore file */

/**
 * A utility helper function for ReactDOM to wait for an asynchronous expectation wrapped in `act` to resolve
 *
 * @param callback - a callback function to invoke
 * @param timeout - time to wait before throwing an error
 * @returns promise or error
 * @example ```await waitFor(() => { expect(a).toEqual(b) });```
 */
const waitForAct = (
  callback: () => void,
  timeout = 1000
): Promise<void> | Error => act(() => waitFor(callback, timeout));

export default waitForAct;
