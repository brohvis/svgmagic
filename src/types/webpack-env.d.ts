declare namespace NodeJS {
    interface Require {
      context: (
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp,
      ) => {
        keys: () => string[];
        (path: string): any;
      };
    }
  }
  