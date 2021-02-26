interface Options {
  noSuffix?: boolean;
}
export const useSetPageTitle = () => (title: string, options?: Options) => {
  const suffix = options?.noSuffix ? "" : ` - ${__APP_NAME__}`;
  document.title = `${title}${suffix}`;
};
