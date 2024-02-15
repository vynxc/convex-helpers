/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.9.0.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as counter from "../counter.js";
import type * as customFunctionExample from "../customFunctionExample.js";
import type * as http from "../http.js";
import type * as lib_honoWithConvex from "../lib/honoWithConvex.js";
import type * as lib_migrations from "../lib/migrations.js";
import type * as lib_rowLevelSecurity from "../lib/rowLevelSecurity.js";
import type * as lib_withUser from "../lib/withUser.js";
import type * as lib_withZod from "../lib/withZod.js";
import type * as presence from "../presence.js";
import type * as relationshipsExample from "../relationshipsExample.js";
import type * as sessionsExample from "../sessionsExample.js";
import type * as valuesExample from "../valuesExample.js";
import type * as zodExample from "../zodExample.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  counter: typeof counter;
  customFunctionExample: typeof customFunctionExample;
  http: typeof http;
  "lib/honoWithConvex": typeof lib_honoWithConvex;
  "lib/migrations": typeof lib_migrations;
  "lib/rowLevelSecurity": typeof lib_rowLevelSecurity;
  "lib/withUser": typeof lib_withUser;
  "lib/withZod": typeof lib_withZod;
  presence: typeof presence;
  relationshipsExample: typeof relationshipsExample;
  sessionsExample: typeof sessionsExample;
  valuesExample: typeof valuesExample;
  zodExample: typeof zodExample;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
