/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/create` | `/(tabs)/home` | `/(tabs)/profile` | `/_sitemap` | `/create` | `/home` | `/login` | `/messages` | `/profile`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
