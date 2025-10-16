import type { User, Session } from "lucia";
declare global {
  namespace App {
    interface Locals {
      user: User | null;
      session: Session | null;
    }
  }
}
declare module "lucia" {
  interface User {
    name: string;
  }
}
export {};
