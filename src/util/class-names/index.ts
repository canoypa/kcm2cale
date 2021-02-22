type ClassName = string;
type ActivationCondition = boolean;
type classNamesArg = ClassName | Record<ClassName, ActivationCondition>;

export const classNames = (...classnames: classNamesArg[]): string => {
  const classes: string[] = [];

  classnames.forEach((val) => {
    if (typeof val === "string") {
      classes.push(val);
      return;
    }

    if (typeof val === "object") {
      Object.entries(val).forEach(([cn, cond]) => cond && classes.push(cn));
      return;
    }
  });

  return classes.join(" ");
};
