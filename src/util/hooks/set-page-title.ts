interface Options {
  noSuffix?: boolean;
}
export const useSetPageTitle = () => (title: string, options?: Options) => {
  const suffix = ` - ${__APP_NAME__}`;
  document.title = `${title}${!options?.noSuffix && suffix}`;
};
