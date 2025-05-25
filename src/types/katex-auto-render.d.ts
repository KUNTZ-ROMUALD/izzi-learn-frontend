declare module 'katex/contrib/auto-render' {
    export default function renderMathInElement(
      el: HTMLElement,
      options?: {
        delimiters?: { left: string; right: string; display: boolean }[];
        throwOnError?: boolean;
      }
    ): void;
  }