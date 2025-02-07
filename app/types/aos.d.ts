declare module "aos" {
  interface AosOptions {
    duration?: number;
    delay?: number;
    once?: boolean;
    easing?: string;
  }

  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
  };

  export default AOS;
}
