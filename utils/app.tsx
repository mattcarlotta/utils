/* eslint-disable no-use-before-define */
import * as React from "react";

export type AppState = {
  isLoading: boolean;
  data: string;
};

export default function App(): React.ReactElement {
  const [state, setState] = React.useState<AppState>({
    isLoading: true,
    data: ""
  });
  const { data, isLoading } = state;

  const fetchData = React.useCallback(async (): Promise<void> => {
    await new Promise(r =>
      setTimeout(() => {
        r("");
      }, 250)
    );

    setState({
      isLoading: false,
      data: "hi"
    });
  }, []);

  React.useEffect(() => {
    if (isLoading) fetchData();
  }, [isLoading, fetchData]);

  return isLoading ? (
    <p id="loading">Loading...</p>
  ) : (
    <p id="message">{data}</p>
  );
}
