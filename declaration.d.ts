declare module 'tailwindcss' {
  import { PluginCreator } from 'postcss';
  export type Config = Record<string, any>;
  const tailwindcss: PluginCreator<Config>;
  export default tailwindcss;
}
