type ClassName = string;
type ActivationCondition = boolean;
type classNamesArg = ClassName | Record<ClassName, ActivationCondition>;

export const classNames = (...classnames: classNamesArg[]): string => {
  const classes: string[] = [];
  classnames.forEach((val) => {
    if (typeof val === "string") return classes.push(val);
    if (typeof val === "object") {
      return Object.entries(val).forEach(
        ([cn, cond]) => cond && classes.push(cn)
      );
    }
  });
  return classes.join(" ");
};
