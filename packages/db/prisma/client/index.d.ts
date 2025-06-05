
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model Videos
 * 
 */
export type Videos = $Result.DefaultSelection<Prisma.$VideosPayload>
/**
 * Model VideoProcessor
 * 
 */
export type VideoProcessor = $Result.DefaultSelection<Prisma.$VideoProcessorPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model WebHook
 * 
 */
export type WebHook = $Result.DefaultSelection<Prisma.$WebHookPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VideoStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  READY: 'READY',
  FAILED: 'FAILED'
};

export type VideoStatus = (typeof VideoStatus)[keyof typeof VideoStatus]


export const WebHookType: {
  VIDEO_CREATED: 'VIDEO_CREATED',
  VIDEO_DELETED: 'VIDEO_DELETED',
  VIDEO_UPDATED: 'VIDEO_UPDATED'
};

export type WebHookType = (typeof WebHookType)[keyof typeof WebHookType]


export const WebHookHTTPMethods: {
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

export type WebHookHTTPMethods = (typeof WebHookHTTPMethods)[keyof typeof WebHookHTTPMethods]

}

export type VideoStatus = $Enums.VideoStatus

export const VideoStatus: typeof $Enums.VideoStatus

export type WebHookType = $Enums.WebHookType

export const WebHookType: typeof $Enums.WebHookType

export type WebHookHTTPMethods = $Enums.WebHookHTTPMethods

export const WebHookHTTPMethods: typeof $Enums.WebHookHTTPMethods

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videos`: Exposes CRUD operations for the **Videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.videos.findMany()
    * ```
    */
  get videos(): Prisma.VideosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoProcessor`: Exposes CRUD operations for the **VideoProcessor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoProcessors
    * const videoProcessors = await prisma.videoProcessor.findMany()
    * ```
    */
  get videoProcessor(): Prisma.VideoProcessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webHook`: Exposes CRUD operations for the **WebHook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebHooks
    * const webHooks = await prisma.webHook.findMany()
    * ```
    */
  get webHook(): Prisma.WebHookDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Collection: 'Collection',
    Videos: 'Videos',
    VideoProcessor: 'VideoProcessor',
    ApiKey: 'ApiKey',
    WebHook: 'WebHook'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "collection" | "videos" | "videoProcessor" | "apiKey" | "webHook"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      Videos: {
        payload: Prisma.$VideosPayload<ExtArgs>
        fields: Prisma.VideosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          findFirst: {
            args: Prisma.VideosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          findMany: {
            args: Prisma.VideosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>[]
          }
          create: {
            args: Prisma.VideosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          createMany: {
            args: Prisma.VideosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>[]
          }
          delete: {
            args: Prisma.VideosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          update: {
            args: Prisma.VideosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          deleteMany: {
            args: Prisma.VideosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>[]
          }
          upsert: {
            args: Prisma.VideosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideosPayload>
          }
          aggregate: {
            args: Prisma.VideosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideos>
          }
          groupBy: {
            args: Prisma.VideosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideosGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideosCountArgs<ExtArgs>
            result: $Utils.Optional<VideosCountAggregateOutputType> | number
          }
        }
      }
      VideoProcessor: {
        payload: Prisma.$VideoProcessorPayload<ExtArgs>
        fields: Prisma.VideoProcessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoProcessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoProcessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload>
          }
          findFirst: {
            args: Prisma.VideoProcessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoProcessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload>
          }
          findMany: {
            args: Prisma.VideoProcessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload>[]
          }
          create: {
            args: Prisma.VideoProcessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload>
          }
          createMany: {
            args: Prisma.VideoProcessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoProcessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload>[]
          }
          delete: {
            args: Prisma.VideoProcessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload>
          }
          update: {
            args: Prisma.VideoProcessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload>
          }
          deleteMany: {
            args: Prisma.VideoProcessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoProcessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoProcessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload>[]
          }
          upsert: {
            args: Prisma.VideoProcessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoProcessorPayload>
          }
          aggregate: {
            args: Prisma.VideoProcessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoProcessor>
          }
          groupBy: {
            args: Prisma.VideoProcessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoProcessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoProcessorCountArgs<ExtArgs>
            result: $Utils.Optional<VideoProcessorCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      WebHook: {
        payload: Prisma.$WebHookPayload<ExtArgs>
        fields: Prisma.WebHookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebHookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebHookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload>
          }
          findFirst: {
            args: Prisma.WebHookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebHookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload>
          }
          findMany: {
            args: Prisma.WebHookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload>[]
          }
          create: {
            args: Prisma.WebHookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload>
          }
          createMany: {
            args: Prisma.WebHookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebHookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload>[]
          }
          delete: {
            args: Prisma.WebHookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload>
          }
          update: {
            args: Prisma.WebHookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload>
          }
          deleteMany: {
            args: Prisma.WebHookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebHookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebHookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload>[]
          }
          upsert: {
            args: Prisma.WebHookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebHookPayload>
          }
          aggregate: {
            args: Prisma.WebHookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebHook>
          }
          groupBy: {
            args: Prisma.WebHookGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebHookGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebHookCountArgs<ExtArgs>
            result: $Utils.Optional<WebHookCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    collection?: CollectionOmit
    videos?: VideosOmit
    videoProcessor?: VideoProcessorOmit
    apiKey?: ApiKeyOmit
    webHook?: WebHookOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    collections: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    videos: number
    webhooks: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | CollectionCountOutputTypeCountVideosArgs
    webhooks?: boolean | CollectionCountOutputTypeCountWebhooksArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideosWhereInput
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountWebhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebHookWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    image: string | null
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | User$sessionArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | User$sessionArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs> | null
      collections: Prisma.$CollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      image: string | null
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends User$sessionArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.session
   */
  export type User$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * User.collections
   */
  export type User$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    iconName: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    iconName: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    name: number
    iconName: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollectionMinAggregateInputType = {
    id?: true
    name?: true
    iconName?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    name?: true
    iconName?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    name?: true
    iconName?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    name: string
    iconName: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconName?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    videos?: boolean | Collection$videosArgs<ExtArgs>
    apiKey?: boolean | Collection$apiKeyArgs<ExtArgs>
    webhooks?: boolean | Collection$webhooksArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconName?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconName?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    name?: boolean
    iconName?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "iconName" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    videos?: boolean | Collection$videosArgs<ExtArgs>
    apiKey?: boolean | Collection$apiKeyArgs<ExtArgs>
    webhooks?: boolean | Collection$webhooksArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      videos: Prisma.$VideosPayload<ExtArgs>[]
      apiKey: Prisma.$ApiKeyPayload<ExtArgs> | null
      webhooks: Prisma.$WebHookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      iconName: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {CollectionUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videos<T extends Collection$videosArgs<ExtArgs> = {}>(args?: Subset<T, Collection$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKey<T extends Collection$apiKeyArgs<ExtArgs> = {}>(args?: Subset<T, Collection$apiKeyArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    webhooks<T extends Collection$webhooksArgs<ExtArgs> = {}>(args?: Subset<T, Collection$webhooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly name: FieldRef<"Collection", 'String'>
    readonly iconName: FieldRef<"Collection", 'String'>
    readonly userId: FieldRef<"Collection", 'String'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly updatedAt: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection updateManyAndReturn
   */
  export type CollectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection.videos
   */
  export type Collection$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    where?: VideosWhereInput
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    cursor?: VideosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * Collection.apiKey
   */
  export type Collection$apiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
  }

  /**
   * Collection.webhooks
   */
  export type Collection$webhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    where?: WebHookWhereInput
    orderBy?: WebHookOrderByWithRelationInput | WebHookOrderByWithRelationInput[]
    cursor?: WebHookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebHookScalarFieldEnum | WebHookScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model Videos
   */

  export type AggregateVideos = {
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  export type VideosAvgAggregateOutputType = {
    durationInSeconds: number | null
    sizeInBytes: number | null
  }

  export type VideosSumAggregateOutputType = {
    durationInSeconds: number | null
    sizeInBytes: number | null
  }

  export type VideosMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    location: string | null
    thumbnailLocation: string | null
    streamLocation: string | null
    durationInSeconds: number | null
    sizeInBytes: number | null
    status: $Enums.VideoStatus | null
    collectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideosMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    location: string | null
    thumbnailLocation: string | null
    streamLocation: string | null
    durationInSeconds: number | null
    sizeInBytes: number | null
    status: $Enums.VideoStatus | null
    collectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideosCountAggregateOutputType = {
    id: number
    title: number
    description: number
    location: number
    thumbnailLocation: number
    streamLocation: number
    durationInSeconds: number
    sizeInBytes: number
    status: number
    collectionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideosAvgAggregateInputType = {
    durationInSeconds?: true
    sizeInBytes?: true
  }

  export type VideosSumAggregateInputType = {
    durationInSeconds?: true
    sizeInBytes?: true
  }

  export type VideosMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    thumbnailLocation?: true
    streamLocation?: true
    durationInSeconds?: true
    sizeInBytes?: true
    status?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideosMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    thumbnailLocation?: true
    streamLocation?: true
    durationInSeconds?: true
    sizeInBytes?: true
    status?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideosCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    thumbnailLocation?: true
    streamLocation?: true
    durationInSeconds?: true
    sizeInBytes?: true
    status?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to aggregate.
     */
    where?: VideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideosMaxAggregateInputType
  }

  export type GetVideosAggregateType<T extends VideosAggregateArgs> = {
        [P in keyof T & keyof AggregateVideos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideos[P]>
      : GetScalarType<T[P], AggregateVideos[P]>
  }




  export type VideosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideosWhereInput
    orderBy?: VideosOrderByWithAggregationInput | VideosOrderByWithAggregationInput[]
    by: VideosScalarFieldEnum[] | VideosScalarFieldEnum
    having?: VideosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideosCountAggregateInputType | true
    _avg?: VideosAvgAggregateInputType
    _sum?: VideosSumAggregateInputType
    _min?: VideosMinAggregateInputType
    _max?: VideosMaxAggregateInputType
  }

  export type VideosGroupByOutputType = {
    id: string
    title: string
    description: string | null
    location: string | null
    thumbnailLocation: string | null
    streamLocation: string | null
    durationInSeconds: number
    sizeInBytes: number
    status: $Enums.VideoStatus
    collectionId: string
    createdAt: Date
    updatedAt: Date
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  type GetVideosGroupByPayload<T extends VideosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideosGroupByOutputType[P]>
            : GetScalarType<T[P], VideosGroupByOutputType[P]>
        }
      >
    >


  export type VideosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    thumbnailLocation?: boolean
    streamLocation?: boolean
    durationInSeconds?: boolean
    sizeInBytes?: boolean
    status?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    processor?: boolean | Videos$processorArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type VideosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    thumbnailLocation?: boolean
    streamLocation?: boolean
    durationInSeconds?: boolean
    sizeInBytes?: boolean
    status?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type VideosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    thumbnailLocation?: boolean
    streamLocation?: boolean
    durationInSeconds?: boolean
    sizeInBytes?: boolean
    status?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>

  export type VideosSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    thumbnailLocation?: boolean
    streamLocation?: boolean
    durationInSeconds?: boolean
    sizeInBytes?: boolean
    status?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "location" | "thumbnailLocation" | "streamLocation" | "durationInSeconds" | "sizeInBytes" | "status" | "collectionId" | "createdAt" | "updatedAt", ExtArgs["result"]["videos"]>
  export type VideosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    processor?: boolean | Videos$processorArgs<ExtArgs>
  }
  export type VideosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }
  export type VideosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }

  export type $VideosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Videos"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
      processor: Prisma.$VideoProcessorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      location: string | null
      thumbnailLocation: string | null
      streamLocation: string | null
      durationInSeconds: number
      sizeInBytes: number
      status: $Enums.VideoStatus
      collectionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videos"]>
    composites: {}
  }

  type VideosGetPayload<S extends boolean | null | undefined | VideosDefaultArgs> = $Result.GetResult<Prisma.$VideosPayload, S>

  type VideosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideosCountAggregateInputType | true
    }

  export interface VideosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Videos'], meta: { name: 'Videos' } }
    /**
     * Find zero or one Videos that matches the filter.
     * @param {VideosFindUniqueArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideosFindUniqueArgs>(args: SelectSubset<T, VideosFindUniqueArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideosFindUniqueOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideosFindUniqueOrThrowArgs>(args: SelectSubset<T, VideosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosFindFirstArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideosFindFirstArgs>(args?: SelectSubset<T, VideosFindFirstArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosFindFirstOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideosFindFirstOrThrowArgs>(args?: SelectSubset<T, VideosFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.videos.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videosWithIdOnly = await prisma.videos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideosFindManyArgs>(args?: SelectSubset<T, VideosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videos.
     * @param {VideosCreateArgs} args - Arguments to create a Videos.
     * @example
     * // Create one Videos
     * const Videos = await prisma.videos.create({
     *   data: {
     *     // ... data to create a Videos
     *   }
     * })
     * 
     */
    create<T extends VideosCreateArgs>(args: SelectSubset<T, VideosCreateArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideosCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideosCreateManyArgs>(args?: SelectSubset<T, VideosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideosCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideosCreateManyAndReturnArgs>(args?: SelectSubset<T, VideosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videos.
     * @param {VideosDeleteArgs} args - Arguments to delete one Videos.
     * @example
     * // Delete one Videos
     * const Videos = await prisma.videos.delete({
     *   where: {
     *     // ... filter to delete one Videos
     *   }
     * })
     * 
     */
    delete<T extends VideosDeleteArgs>(args: SelectSubset<T, VideosDeleteArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videos.
     * @param {VideosUpdateArgs} args - Arguments to update one Videos.
     * @example
     * // Update one Videos
     * const videos = await prisma.videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideosUpdateArgs>(args: SelectSubset<T, VideosUpdateArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideosDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideosDeleteManyArgs>(args?: SelectSubset<T, VideosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideosUpdateManyArgs>(args: SelectSubset<T, VideosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideosUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideosUpdateManyAndReturnArgs>(args: SelectSubset<T, VideosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videos.
     * @param {VideosUpsertArgs} args - Arguments to update or create a Videos.
     * @example
     * // Update or create a Videos
     * const videos = await prisma.videos.upsert({
     *   create: {
     *     // ... data to create a Videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videos we want to update
     *   }
     * })
     */
    upsert<T extends VideosUpsertArgs>(args: SelectSubset<T, VideosUpsertArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.videos.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideosCountArgs>(
      args?: Subset<T, VideosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideosAggregateArgs>(args: Subset<T, VideosAggregateArgs>): Prisma.PrismaPromise<GetVideosAggregateType<T>>

    /**
     * Group by Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideosGroupByArgs['orderBy'] }
        : { orderBy?: VideosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Videos model
   */
  readonly fields: VideosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    processor<T extends Videos$processorArgs<ExtArgs> = {}>(args?: Subset<T, Videos$processorArgs<ExtArgs>>): Prisma__VideoProcessorClient<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Videos model
   */
  interface VideosFieldRefs {
    readonly id: FieldRef<"Videos", 'String'>
    readonly title: FieldRef<"Videos", 'String'>
    readonly description: FieldRef<"Videos", 'String'>
    readonly location: FieldRef<"Videos", 'String'>
    readonly thumbnailLocation: FieldRef<"Videos", 'String'>
    readonly streamLocation: FieldRef<"Videos", 'String'>
    readonly durationInSeconds: FieldRef<"Videos", 'Int'>
    readonly sizeInBytes: FieldRef<"Videos", 'Int'>
    readonly status: FieldRef<"Videos", 'VideoStatus'>
    readonly collectionId: FieldRef<"Videos", 'String'>
    readonly createdAt: FieldRef<"Videos", 'DateTime'>
    readonly updatedAt: FieldRef<"Videos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Videos findUnique
   */
  export type VideosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where: VideosWhereUniqueInput
  }

  /**
   * Videos findUniqueOrThrow
   */
  export type VideosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where: VideosWhereUniqueInput
  }

  /**
   * Videos findFirst
   */
  export type VideosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * Videos findFirstOrThrow
   */
  export type VideosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * Videos findMany
   */
  export type VideosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideosOrderByWithRelationInput | VideosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * Videos create
   */
  export type VideosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * The data needed to create a Videos.
     */
    data: XOR<VideosCreateInput, VideosUncheckedCreateInput>
  }

  /**
   * Videos createMany
   */
  export type VideosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideosCreateManyInput | VideosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Videos createManyAndReturn
   */
  export type VideosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideosCreateManyInput | VideosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Videos update
   */
  export type VideosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * The data needed to update a Videos.
     */
    data: XOR<VideosUpdateInput, VideosUncheckedUpdateInput>
    /**
     * Choose, which Videos to update.
     */
    where: VideosWhereUniqueInput
  }

  /**
   * Videos updateMany
   */
  export type VideosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideosUpdateManyMutationInput, VideosUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideosWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Videos updateManyAndReturn
   */
  export type VideosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideosUpdateManyMutationInput, VideosUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideosWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Videos upsert
   */
  export type VideosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * The filter to search for the Videos to update in case it exists.
     */
    where: VideosWhereUniqueInput
    /**
     * In case the Videos found by the `where` argument doesn't exist, create a new Videos with this data.
     */
    create: XOR<VideosCreateInput, VideosUncheckedCreateInput>
    /**
     * In case the Videos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideosUpdateInput, VideosUncheckedUpdateInput>
  }

  /**
   * Videos delete
   */
  export type VideosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
    /**
     * Filter which Videos to delete.
     */
    where: VideosWhereUniqueInput
  }

  /**
   * Videos deleteMany
   */
  export type VideosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideosWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Videos.processor
   */
  export type Videos$processorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    where?: VideoProcessorWhereInput
  }

  /**
   * Videos without action
   */
  export type VideosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Videos
     */
    select?: VideosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Videos
     */
    omit?: VideosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideosInclude<ExtArgs> | null
  }


  /**
   * Model VideoProcessor
   */

  export type AggregateVideoProcessor = {
    _count: VideoProcessorCountAggregateOutputType | null
    _min: VideoProcessorMinAggregateOutputType | null
    _max: VideoProcessorMaxAggregateOutputType | null
  }

  export type VideoProcessorMinAggregateOutputType = {
    id: string | null
    tmpLocation: string | null
    videoId: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoProcessorMaxAggregateOutputType = {
    id: string | null
    tmpLocation: string | null
    videoId: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoProcessorCountAggregateOutputType = {
    id: number
    tmpLocation: number
    videoId: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoProcessorMinAggregateInputType = {
    id?: true
    tmpLocation?: true
    videoId?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoProcessorMaxAggregateInputType = {
    id?: true
    tmpLocation?: true
    videoId?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoProcessorCountAggregateInputType = {
    id?: true
    tmpLocation?: true
    videoId?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoProcessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoProcessor to aggregate.
     */
    where?: VideoProcessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProcessors to fetch.
     */
    orderBy?: VideoProcessorOrderByWithRelationInput | VideoProcessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoProcessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProcessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProcessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoProcessors
    **/
    _count?: true | VideoProcessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoProcessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoProcessorMaxAggregateInputType
  }

  export type GetVideoProcessorAggregateType<T extends VideoProcessorAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoProcessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoProcessor[P]>
      : GetScalarType<T[P], AggregateVideoProcessor[P]>
  }




  export type VideoProcessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoProcessorWhereInput
    orderBy?: VideoProcessorOrderByWithAggregationInput | VideoProcessorOrderByWithAggregationInput[]
    by: VideoProcessorScalarFieldEnum[] | VideoProcessorScalarFieldEnum
    having?: VideoProcessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoProcessorCountAggregateInputType | true
    _min?: VideoProcessorMinAggregateInputType
    _max?: VideoProcessorMaxAggregateInputType
  }

  export type VideoProcessorGroupByOutputType = {
    id: string
    tmpLocation: string
    videoId: string
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: VideoProcessorCountAggregateOutputType | null
    _min: VideoProcessorMinAggregateOutputType | null
    _max: VideoProcessorMaxAggregateOutputType | null
  }

  type GetVideoProcessorGroupByPayload<T extends VideoProcessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoProcessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoProcessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoProcessorGroupByOutputType[P]>
            : GetScalarType<T[P], VideoProcessorGroupByOutputType[P]>
        }
      >
    >


  export type VideoProcessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmpLocation?: boolean
    videoId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoProcessor"]>

  export type VideoProcessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmpLocation?: boolean
    videoId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoProcessor"]>

  export type VideoProcessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmpLocation?: boolean
    videoId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoProcessor"]>

  export type VideoProcessorSelectScalar = {
    id?: boolean
    tmpLocation?: boolean
    videoId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoProcessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tmpLocation" | "videoId" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["videoProcessor"]>
  export type VideoProcessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideosDefaultArgs<ExtArgs>
  }
  export type VideoProcessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideosDefaultArgs<ExtArgs>
  }
  export type VideoProcessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideosDefaultArgs<ExtArgs>
  }

  export type $VideoProcessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoProcessor"
    objects: {
      video: Prisma.$VideosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tmpLocation: string
      videoId: string
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videoProcessor"]>
    composites: {}
  }

  type VideoProcessorGetPayload<S extends boolean | null | undefined | VideoProcessorDefaultArgs> = $Result.GetResult<Prisma.$VideoProcessorPayload, S>

  type VideoProcessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoProcessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoProcessorCountAggregateInputType | true
    }

  export interface VideoProcessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoProcessor'], meta: { name: 'VideoProcessor' } }
    /**
     * Find zero or one VideoProcessor that matches the filter.
     * @param {VideoProcessorFindUniqueArgs} args - Arguments to find a VideoProcessor
     * @example
     * // Get one VideoProcessor
     * const videoProcessor = await prisma.videoProcessor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoProcessorFindUniqueArgs>(args: SelectSubset<T, VideoProcessorFindUniqueArgs<ExtArgs>>): Prisma__VideoProcessorClient<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoProcessor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoProcessorFindUniqueOrThrowArgs} args - Arguments to find a VideoProcessor
     * @example
     * // Get one VideoProcessor
     * const videoProcessor = await prisma.videoProcessor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoProcessorFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoProcessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoProcessorClient<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoProcessor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProcessorFindFirstArgs} args - Arguments to find a VideoProcessor
     * @example
     * // Get one VideoProcessor
     * const videoProcessor = await prisma.videoProcessor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoProcessorFindFirstArgs>(args?: SelectSubset<T, VideoProcessorFindFirstArgs<ExtArgs>>): Prisma__VideoProcessorClient<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoProcessor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProcessorFindFirstOrThrowArgs} args - Arguments to find a VideoProcessor
     * @example
     * // Get one VideoProcessor
     * const videoProcessor = await prisma.videoProcessor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoProcessorFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoProcessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoProcessorClient<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoProcessors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProcessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoProcessors
     * const videoProcessors = await prisma.videoProcessor.findMany()
     * 
     * // Get first 10 VideoProcessors
     * const videoProcessors = await prisma.videoProcessor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoProcessorWithIdOnly = await prisma.videoProcessor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoProcessorFindManyArgs>(args?: SelectSubset<T, VideoProcessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoProcessor.
     * @param {VideoProcessorCreateArgs} args - Arguments to create a VideoProcessor.
     * @example
     * // Create one VideoProcessor
     * const VideoProcessor = await prisma.videoProcessor.create({
     *   data: {
     *     // ... data to create a VideoProcessor
     *   }
     * })
     * 
     */
    create<T extends VideoProcessorCreateArgs>(args: SelectSubset<T, VideoProcessorCreateArgs<ExtArgs>>): Prisma__VideoProcessorClient<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoProcessors.
     * @param {VideoProcessorCreateManyArgs} args - Arguments to create many VideoProcessors.
     * @example
     * // Create many VideoProcessors
     * const videoProcessor = await prisma.videoProcessor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoProcessorCreateManyArgs>(args?: SelectSubset<T, VideoProcessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoProcessors and returns the data saved in the database.
     * @param {VideoProcessorCreateManyAndReturnArgs} args - Arguments to create many VideoProcessors.
     * @example
     * // Create many VideoProcessors
     * const videoProcessor = await prisma.videoProcessor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoProcessors and only return the `id`
     * const videoProcessorWithIdOnly = await prisma.videoProcessor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoProcessorCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoProcessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoProcessor.
     * @param {VideoProcessorDeleteArgs} args - Arguments to delete one VideoProcessor.
     * @example
     * // Delete one VideoProcessor
     * const VideoProcessor = await prisma.videoProcessor.delete({
     *   where: {
     *     // ... filter to delete one VideoProcessor
     *   }
     * })
     * 
     */
    delete<T extends VideoProcessorDeleteArgs>(args: SelectSubset<T, VideoProcessorDeleteArgs<ExtArgs>>): Prisma__VideoProcessorClient<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoProcessor.
     * @param {VideoProcessorUpdateArgs} args - Arguments to update one VideoProcessor.
     * @example
     * // Update one VideoProcessor
     * const videoProcessor = await prisma.videoProcessor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoProcessorUpdateArgs>(args: SelectSubset<T, VideoProcessorUpdateArgs<ExtArgs>>): Prisma__VideoProcessorClient<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoProcessors.
     * @param {VideoProcessorDeleteManyArgs} args - Arguments to filter VideoProcessors to delete.
     * @example
     * // Delete a few VideoProcessors
     * const { count } = await prisma.videoProcessor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoProcessorDeleteManyArgs>(args?: SelectSubset<T, VideoProcessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoProcessors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProcessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoProcessors
     * const videoProcessor = await prisma.videoProcessor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoProcessorUpdateManyArgs>(args: SelectSubset<T, VideoProcessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoProcessors and returns the data updated in the database.
     * @param {VideoProcessorUpdateManyAndReturnArgs} args - Arguments to update many VideoProcessors.
     * @example
     * // Update many VideoProcessors
     * const videoProcessor = await prisma.videoProcessor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoProcessors and only return the `id`
     * const videoProcessorWithIdOnly = await prisma.videoProcessor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoProcessorUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoProcessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoProcessor.
     * @param {VideoProcessorUpsertArgs} args - Arguments to update or create a VideoProcessor.
     * @example
     * // Update or create a VideoProcessor
     * const videoProcessor = await prisma.videoProcessor.upsert({
     *   create: {
     *     // ... data to create a VideoProcessor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoProcessor we want to update
     *   }
     * })
     */
    upsert<T extends VideoProcessorUpsertArgs>(args: SelectSubset<T, VideoProcessorUpsertArgs<ExtArgs>>): Prisma__VideoProcessorClient<$Result.GetResult<Prisma.$VideoProcessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoProcessors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProcessorCountArgs} args - Arguments to filter VideoProcessors to count.
     * @example
     * // Count the number of VideoProcessors
     * const count = await prisma.videoProcessor.count({
     *   where: {
     *     // ... the filter for the VideoProcessors we want to count
     *   }
     * })
    **/
    count<T extends VideoProcessorCountArgs>(
      args?: Subset<T, VideoProcessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoProcessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoProcessor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProcessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoProcessorAggregateArgs>(args: Subset<T, VideoProcessorAggregateArgs>): Prisma.PrismaPromise<GetVideoProcessorAggregateType<T>>

    /**
     * Group by VideoProcessor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoProcessorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoProcessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoProcessorGroupByArgs['orderBy'] }
        : { orderBy?: VideoProcessorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoProcessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoProcessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoProcessor model
   */
  readonly fields: VideoProcessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoProcessor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoProcessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideosDefaultArgs<ExtArgs>>): Prisma__VideosClient<$Result.GetResult<Prisma.$VideosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VideoProcessor model
   */
  interface VideoProcessorFieldRefs {
    readonly id: FieldRef<"VideoProcessor", 'String'>
    readonly tmpLocation: FieldRef<"VideoProcessor", 'String'>
    readonly videoId: FieldRef<"VideoProcessor", 'String'>
    readonly completedAt: FieldRef<"VideoProcessor", 'DateTime'>
    readonly createdAt: FieldRef<"VideoProcessor", 'DateTime'>
    readonly updatedAt: FieldRef<"VideoProcessor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoProcessor findUnique
   */
  export type VideoProcessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    /**
     * Filter, which VideoProcessor to fetch.
     */
    where: VideoProcessorWhereUniqueInput
  }

  /**
   * VideoProcessor findUniqueOrThrow
   */
  export type VideoProcessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    /**
     * Filter, which VideoProcessor to fetch.
     */
    where: VideoProcessorWhereUniqueInput
  }

  /**
   * VideoProcessor findFirst
   */
  export type VideoProcessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    /**
     * Filter, which VideoProcessor to fetch.
     */
    where?: VideoProcessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProcessors to fetch.
     */
    orderBy?: VideoProcessorOrderByWithRelationInput | VideoProcessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoProcessors.
     */
    cursor?: VideoProcessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProcessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProcessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoProcessors.
     */
    distinct?: VideoProcessorScalarFieldEnum | VideoProcessorScalarFieldEnum[]
  }

  /**
   * VideoProcessor findFirstOrThrow
   */
  export type VideoProcessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    /**
     * Filter, which VideoProcessor to fetch.
     */
    where?: VideoProcessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProcessors to fetch.
     */
    orderBy?: VideoProcessorOrderByWithRelationInput | VideoProcessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoProcessors.
     */
    cursor?: VideoProcessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProcessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProcessors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoProcessors.
     */
    distinct?: VideoProcessorScalarFieldEnum | VideoProcessorScalarFieldEnum[]
  }

  /**
   * VideoProcessor findMany
   */
  export type VideoProcessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    /**
     * Filter, which VideoProcessors to fetch.
     */
    where?: VideoProcessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoProcessors to fetch.
     */
    orderBy?: VideoProcessorOrderByWithRelationInput | VideoProcessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoProcessors.
     */
    cursor?: VideoProcessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoProcessors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoProcessors.
     */
    skip?: number
    distinct?: VideoProcessorScalarFieldEnum | VideoProcessorScalarFieldEnum[]
  }

  /**
   * VideoProcessor create
   */
  export type VideoProcessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoProcessor.
     */
    data: XOR<VideoProcessorCreateInput, VideoProcessorUncheckedCreateInput>
  }

  /**
   * VideoProcessor createMany
   */
  export type VideoProcessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoProcessors.
     */
    data: VideoProcessorCreateManyInput | VideoProcessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoProcessor createManyAndReturn
   */
  export type VideoProcessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * The data used to create many VideoProcessors.
     */
    data: VideoProcessorCreateManyInput | VideoProcessorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoProcessor update
   */
  export type VideoProcessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoProcessor.
     */
    data: XOR<VideoProcessorUpdateInput, VideoProcessorUncheckedUpdateInput>
    /**
     * Choose, which VideoProcessor to update.
     */
    where: VideoProcessorWhereUniqueInput
  }

  /**
   * VideoProcessor updateMany
   */
  export type VideoProcessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoProcessors.
     */
    data: XOR<VideoProcessorUpdateManyMutationInput, VideoProcessorUncheckedUpdateManyInput>
    /**
     * Filter which VideoProcessors to update
     */
    where?: VideoProcessorWhereInput
    /**
     * Limit how many VideoProcessors to update.
     */
    limit?: number
  }

  /**
   * VideoProcessor updateManyAndReturn
   */
  export type VideoProcessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * The data used to update VideoProcessors.
     */
    data: XOR<VideoProcessorUpdateManyMutationInput, VideoProcessorUncheckedUpdateManyInput>
    /**
     * Filter which VideoProcessors to update
     */
    where?: VideoProcessorWhereInput
    /**
     * Limit how many VideoProcessors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoProcessor upsert
   */
  export type VideoProcessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoProcessor to update in case it exists.
     */
    where: VideoProcessorWhereUniqueInput
    /**
     * In case the VideoProcessor found by the `where` argument doesn't exist, create a new VideoProcessor with this data.
     */
    create: XOR<VideoProcessorCreateInput, VideoProcessorUncheckedCreateInput>
    /**
     * In case the VideoProcessor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoProcessorUpdateInput, VideoProcessorUncheckedUpdateInput>
  }

  /**
   * VideoProcessor delete
   */
  export type VideoProcessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
    /**
     * Filter which VideoProcessor to delete.
     */
    where: VideoProcessorWhereUniqueInput
  }

  /**
   * VideoProcessor deleteMany
   */
  export type VideoProcessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoProcessors to delete
     */
    where?: VideoProcessorWhereInput
    /**
     * Limit how many VideoProcessors to delete.
     */
    limit?: number
  }

  /**
   * VideoProcessor without action
   */
  export type VideoProcessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoProcessor
     */
    select?: VideoProcessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoProcessor
     */
    omit?: VideoProcessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoProcessorInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    collectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    collectionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    collectionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    key?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    collectionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    key: string
    collectionId: string
    createdAt: Date
    updatedAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    collectionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "collectionId" | "createdAt" | "updatedAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      collectionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly collectionId: FieldRef<"ApiKey", 'String'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model WebHook
   */

  export type AggregateWebHook = {
    _count: WebHookCountAggregateOutputType | null
    _min: WebHookMinAggregateOutputType | null
    _max: WebHookMaxAggregateOutputType | null
  }

  export type WebHookMinAggregateOutputType = {
    id: string | null
    type: $Enums.WebHookType | null
    url: string | null
    httpMethod: $Enums.WebHookHTTPMethods | null
    collectionId: string | null
  }

  export type WebHookMaxAggregateOutputType = {
    id: string | null
    type: $Enums.WebHookType | null
    url: string | null
    httpMethod: $Enums.WebHookHTTPMethods | null
    collectionId: string | null
  }

  export type WebHookCountAggregateOutputType = {
    id: number
    type: number
    url: number
    httpMethod: number
    collectionId: number
    _all: number
  }


  export type WebHookMinAggregateInputType = {
    id?: true
    type?: true
    url?: true
    httpMethod?: true
    collectionId?: true
  }

  export type WebHookMaxAggregateInputType = {
    id?: true
    type?: true
    url?: true
    httpMethod?: true
    collectionId?: true
  }

  export type WebHookCountAggregateInputType = {
    id?: true
    type?: true
    url?: true
    httpMethod?: true
    collectionId?: true
    _all?: true
  }

  export type WebHookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebHook to aggregate.
     */
    where?: WebHookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebHooks to fetch.
     */
    orderBy?: WebHookOrderByWithRelationInput | WebHookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebHookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebHooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebHooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebHooks
    **/
    _count?: true | WebHookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebHookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebHookMaxAggregateInputType
  }

  export type GetWebHookAggregateType<T extends WebHookAggregateArgs> = {
        [P in keyof T & keyof AggregateWebHook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebHook[P]>
      : GetScalarType<T[P], AggregateWebHook[P]>
  }




  export type WebHookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebHookWhereInput
    orderBy?: WebHookOrderByWithAggregationInput | WebHookOrderByWithAggregationInput[]
    by: WebHookScalarFieldEnum[] | WebHookScalarFieldEnum
    having?: WebHookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebHookCountAggregateInputType | true
    _min?: WebHookMinAggregateInputType
    _max?: WebHookMaxAggregateInputType
  }

  export type WebHookGroupByOutputType = {
    id: string
    type: $Enums.WebHookType
    url: string
    httpMethod: $Enums.WebHookHTTPMethods
    collectionId: string
    _count: WebHookCountAggregateOutputType | null
    _min: WebHookMinAggregateOutputType | null
    _max: WebHookMaxAggregateOutputType | null
  }

  type GetWebHookGroupByPayload<T extends WebHookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebHookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebHookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebHookGroupByOutputType[P]>
            : GetScalarType<T[P], WebHookGroupByOutputType[P]>
        }
      >
    >


  export type WebHookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    httpMethod?: boolean
    collectionId?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webHook"]>

  export type WebHookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    httpMethod?: boolean
    collectionId?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webHook"]>

  export type WebHookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    httpMethod?: boolean
    collectionId?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webHook"]>

  export type WebHookSelectScalar = {
    id?: boolean
    type?: boolean
    url?: boolean
    httpMethod?: boolean
    collectionId?: boolean
  }

  export type WebHookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "url" | "httpMethod" | "collectionId", ExtArgs["result"]["webHook"]>
  export type WebHookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }
  export type WebHookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }
  export type WebHookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }

  export type $WebHookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebHook"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.WebHookType
      url: string
      httpMethod: $Enums.WebHookHTTPMethods
      collectionId: string
    }, ExtArgs["result"]["webHook"]>
    composites: {}
  }

  type WebHookGetPayload<S extends boolean | null | undefined | WebHookDefaultArgs> = $Result.GetResult<Prisma.$WebHookPayload, S>

  type WebHookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebHookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebHookCountAggregateInputType | true
    }

  export interface WebHookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebHook'], meta: { name: 'WebHook' } }
    /**
     * Find zero or one WebHook that matches the filter.
     * @param {WebHookFindUniqueArgs} args - Arguments to find a WebHook
     * @example
     * // Get one WebHook
     * const webHook = await prisma.webHook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebHookFindUniqueArgs>(args: SelectSubset<T, WebHookFindUniqueArgs<ExtArgs>>): Prisma__WebHookClient<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebHook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebHookFindUniqueOrThrowArgs} args - Arguments to find a WebHook
     * @example
     * // Get one WebHook
     * const webHook = await prisma.webHook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebHookFindUniqueOrThrowArgs>(args: SelectSubset<T, WebHookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebHookClient<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebHook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebHookFindFirstArgs} args - Arguments to find a WebHook
     * @example
     * // Get one WebHook
     * const webHook = await prisma.webHook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebHookFindFirstArgs>(args?: SelectSubset<T, WebHookFindFirstArgs<ExtArgs>>): Prisma__WebHookClient<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebHook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebHookFindFirstOrThrowArgs} args - Arguments to find a WebHook
     * @example
     * // Get one WebHook
     * const webHook = await prisma.webHook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebHookFindFirstOrThrowArgs>(args?: SelectSubset<T, WebHookFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebHookClient<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebHooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebHookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebHooks
     * const webHooks = await prisma.webHook.findMany()
     * 
     * // Get first 10 WebHooks
     * const webHooks = await prisma.webHook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webHookWithIdOnly = await prisma.webHook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebHookFindManyArgs>(args?: SelectSubset<T, WebHookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebHook.
     * @param {WebHookCreateArgs} args - Arguments to create a WebHook.
     * @example
     * // Create one WebHook
     * const WebHook = await prisma.webHook.create({
     *   data: {
     *     // ... data to create a WebHook
     *   }
     * })
     * 
     */
    create<T extends WebHookCreateArgs>(args: SelectSubset<T, WebHookCreateArgs<ExtArgs>>): Prisma__WebHookClient<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebHooks.
     * @param {WebHookCreateManyArgs} args - Arguments to create many WebHooks.
     * @example
     * // Create many WebHooks
     * const webHook = await prisma.webHook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebHookCreateManyArgs>(args?: SelectSubset<T, WebHookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebHooks and returns the data saved in the database.
     * @param {WebHookCreateManyAndReturnArgs} args - Arguments to create many WebHooks.
     * @example
     * // Create many WebHooks
     * const webHook = await prisma.webHook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebHooks and only return the `id`
     * const webHookWithIdOnly = await prisma.webHook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebHookCreateManyAndReturnArgs>(args?: SelectSubset<T, WebHookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebHook.
     * @param {WebHookDeleteArgs} args - Arguments to delete one WebHook.
     * @example
     * // Delete one WebHook
     * const WebHook = await prisma.webHook.delete({
     *   where: {
     *     // ... filter to delete one WebHook
     *   }
     * })
     * 
     */
    delete<T extends WebHookDeleteArgs>(args: SelectSubset<T, WebHookDeleteArgs<ExtArgs>>): Prisma__WebHookClient<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebHook.
     * @param {WebHookUpdateArgs} args - Arguments to update one WebHook.
     * @example
     * // Update one WebHook
     * const webHook = await prisma.webHook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebHookUpdateArgs>(args: SelectSubset<T, WebHookUpdateArgs<ExtArgs>>): Prisma__WebHookClient<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebHooks.
     * @param {WebHookDeleteManyArgs} args - Arguments to filter WebHooks to delete.
     * @example
     * // Delete a few WebHooks
     * const { count } = await prisma.webHook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebHookDeleteManyArgs>(args?: SelectSubset<T, WebHookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebHooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebHookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebHooks
     * const webHook = await prisma.webHook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebHookUpdateManyArgs>(args: SelectSubset<T, WebHookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebHooks and returns the data updated in the database.
     * @param {WebHookUpdateManyAndReturnArgs} args - Arguments to update many WebHooks.
     * @example
     * // Update many WebHooks
     * const webHook = await prisma.webHook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebHooks and only return the `id`
     * const webHookWithIdOnly = await prisma.webHook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebHookUpdateManyAndReturnArgs>(args: SelectSubset<T, WebHookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebHook.
     * @param {WebHookUpsertArgs} args - Arguments to update or create a WebHook.
     * @example
     * // Update or create a WebHook
     * const webHook = await prisma.webHook.upsert({
     *   create: {
     *     // ... data to create a WebHook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebHook we want to update
     *   }
     * })
     */
    upsert<T extends WebHookUpsertArgs>(args: SelectSubset<T, WebHookUpsertArgs<ExtArgs>>): Prisma__WebHookClient<$Result.GetResult<Prisma.$WebHookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebHooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebHookCountArgs} args - Arguments to filter WebHooks to count.
     * @example
     * // Count the number of WebHooks
     * const count = await prisma.webHook.count({
     *   where: {
     *     // ... the filter for the WebHooks we want to count
     *   }
     * })
    **/
    count<T extends WebHookCountArgs>(
      args?: Subset<T, WebHookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebHookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebHook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebHookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebHookAggregateArgs>(args: Subset<T, WebHookAggregateArgs>): Prisma.PrismaPromise<GetWebHookAggregateType<T>>

    /**
     * Group by WebHook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebHookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebHookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebHookGroupByArgs['orderBy'] }
        : { orderBy?: WebHookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebHookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebHookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebHook model
   */
  readonly fields: WebHookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebHook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebHookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebHook model
   */
  interface WebHookFieldRefs {
    readonly id: FieldRef<"WebHook", 'String'>
    readonly type: FieldRef<"WebHook", 'WebHookType'>
    readonly url: FieldRef<"WebHook", 'String'>
    readonly httpMethod: FieldRef<"WebHook", 'WebHookHTTPMethods'>
    readonly collectionId: FieldRef<"WebHook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WebHook findUnique
   */
  export type WebHookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    /**
     * Filter, which WebHook to fetch.
     */
    where: WebHookWhereUniqueInput
  }

  /**
   * WebHook findUniqueOrThrow
   */
  export type WebHookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    /**
     * Filter, which WebHook to fetch.
     */
    where: WebHookWhereUniqueInput
  }

  /**
   * WebHook findFirst
   */
  export type WebHookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    /**
     * Filter, which WebHook to fetch.
     */
    where?: WebHookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebHooks to fetch.
     */
    orderBy?: WebHookOrderByWithRelationInput | WebHookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebHooks.
     */
    cursor?: WebHookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebHooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebHooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebHooks.
     */
    distinct?: WebHookScalarFieldEnum | WebHookScalarFieldEnum[]
  }

  /**
   * WebHook findFirstOrThrow
   */
  export type WebHookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    /**
     * Filter, which WebHook to fetch.
     */
    where?: WebHookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebHooks to fetch.
     */
    orderBy?: WebHookOrderByWithRelationInput | WebHookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebHooks.
     */
    cursor?: WebHookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebHooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebHooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebHooks.
     */
    distinct?: WebHookScalarFieldEnum | WebHookScalarFieldEnum[]
  }

  /**
   * WebHook findMany
   */
  export type WebHookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    /**
     * Filter, which WebHooks to fetch.
     */
    where?: WebHookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebHooks to fetch.
     */
    orderBy?: WebHookOrderByWithRelationInput | WebHookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebHooks.
     */
    cursor?: WebHookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebHooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebHooks.
     */
    skip?: number
    distinct?: WebHookScalarFieldEnum | WebHookScalarFieldEnum[]
  }

  /**
   * WebHook create
   */
  export type WebHookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    /**
     * The data needed to create a WebHook.
     */
    data: XOR<WebHookCreateInput, WebHookUncheckedCreateInput>
  }

  /**
   * WebHook createMany
   */
  export type WebHookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebHooks.
     */
    data: WebHookCreateManyInput | WebHookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebHook createManyAndReturn
   */
  export type WebHookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * The data used to create many WebHooks.
     */
    data: WebHookCreateManyInput | WebHookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebHook update
   */
  export type WebHookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    /**
     * The data needed to update a WebHook.
     */
    data: XOR<WebHookUpdateInput, WebHookUncheckedUpdateInput>
    /**
     * Choose, which WebHook to update.
     */
    where: WebHookWhereUniqueInput
  }

  /**
   * WebHook updateMany
   */
  export type WebHookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebHooks.
     */
    data: XOR<WebHookUpdateManyMutationInput, WebHookUncheckedUpdateManyInput>
    /**
     * Filter which WebHooks to update
     */
    where?: WebHookWhereInput
    /**
     * Limit how many WebHooks to update.
     */
    limit?: number
  }

  /**
   * WebHook updateManyAndReturn
   */
  export type WebHookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * The data used to update WebHooks.
     */
    data: XOR<WebHookUpdateManyMutationInput, WebHookUncheckedUpdateManyInput>
    /**
     * Filter which WebHooks to update
     */
    where?: WebHookWhereInput
    /**
     * Limit how many WebHooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebHook upsert
   */
  export type WebHookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    /**
     * The filter to search for the WebHook to update in case it exists.
     */
    where: WebHookWhereUniqueInput
    /**
     * In case the WebHook found by the `where` argument doesn't exist, create a new WebHook with this data.
     */
    create: XOR<WebHookCreateInput, WebHookUncheckedCreateInput>
    /**
     * In case the WebHook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebHookUpdateInput, WebHookUncheckedUpdateInput>
  }

  /**
   * WebHook delete
   */
  export type WebHookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
    /**
     * Filter which WebHook to delete.
     */
    where: WebHookWhereUniqueInput
  }

  /**
   * WebHook deleteMany
   */
  export type WebHookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebHooks to delete
     */
    where?: WebHookWhereInput
    /**
     * Limit how many WebHooks to delete.
     */
    limit?: number
  }

  /**
   * WebHook without action
   */
  export type WebHookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebHook
     */
    select?: WebHookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebHook
     */
    omit?: WebHookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebHookInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iconName: 'iconName',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const VideosScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    location: 'location',
    thumbnailLocation: 'thumbnailLocation',
    streamLocation: 'streamLocation',
    durationInSeconds: 'durationInSeconds',
    sizeInBytes: 'sizeInBytes',
    status: 'status',
    collectionId: 'collectionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideosScalarFieldEnum = (typeof VideosScalarFieldEnum)[keyof typeof VideosScalarFieldEnum]


  export const VideoProcessorScalarFieldEnum: {
    id: 'id',
    tmpLocation: 'tmpLocation',
    videoId: 'videoId',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoProcessorScalarFieldEnum = (typeof VideoProcessorScalarFieldEnum)[keyof typeof VideoProcessorScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    collectionId: 'collectionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const WebHookScalarFieldEnum: {
    id: 'id',
    type: 'type',
    url: 'url',
    httpMethod: 'httpMethod',
    collectionId: 'collectionId'
  };

  export type WebHookScalarFieldEnum = (typeof WebHookScalarFieldEnum)[keyof typeof WebHookScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VideoStatus'
   */
  export type EnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus'>
    


  /**
   * Reference to a field of type 'VideoStatus[]'
   */
  export type ListEnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus[]'>
    


  /**
   * Reference to a field of type 'WebHookType'
   */
  export type EnumWebHookTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebHookType'>
    


  /**
   * Reference to a field of type 'WebHookType[]'
   */
  export type ListEnumWebHookTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebHookType[]'>
    


  /**
   * Reference to a field of type 'WebHookHTTPMethods'
   */
  export type EnumWebHookHTTPMethodsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebHookHTTPMethods'>
    


  /**
   * Reference to a field of type 'WebHookHTTPMethods[]'
   */
  export type ListEnumWebHookHTTPMethodsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebHookHTTPMethods[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    collections?: CollectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: SessionOrderByWithRelationInput
    collections?: CollectionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    collections?: CollectionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    iconName?: StringFilter<"Collection"> | string
    userId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    videos?: VideosListRelationFilter
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
    webhooks?: WebHookListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    iconName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    videos?: VideosOrderByRelationAggregateInput
    apiKey?: ApiKeyOrderByWithRelationInput
    webhooks?: WebHookOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    name?: StringFilter<"Collection"> | string
    iconName?: StringFilter<"Collection"> | string
    userId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    videos?: VideosListRelationFilter
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
    webhooks?: WebHookListRelationFilter
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    iconName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    name?: StringWithAggregatesFilter<"Collection"> | string
    iconName?: StringWithAggregatesFilter<"Collection"> | string
    userId?: StringWithAggregatesFilter<"Collection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type VideosWhereInput = {
    AND?: VideosWhereInput | VideosWhereInput[]
    OR?: VideosWhereInput[]
    NOT?: VideosWhereInput | VideosWhereInput[]
    id?: StringFilter<"Videos"> | string
    title?: StringFilter<"Videos"> | string
    description?: StringNullableFilter<"Videos"> | string | null
    location?: StringNullableFilter<"Videos"> | string | null
    thumbnailLocation?: StringNullableFilter<"Videos"> | string | null
    streamLocation?: StringNullableFilter<"Videos"> | string | null
    durationInSeconds?: IntFilter<"Videos"> | number
    sizeInBytes?: IntFilter<"Videos"> | number
    status?: EnumVideoStatusFilter<"Videos"> | $Enums.VideoStatus
    collectionId?: StringFilter<"Videos"> | string
    createdAt?: DateTimeFilter<"Videos"> | Date | string
    updatedAt?: DateTimeFilter<"Videos"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    processor?: XOR<VideoProcessorNullableScalarRelationFilter, VideoProcessorWhereInput> | null
  }

  export type VideosOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    thumbnailLocation?: SortOrderInput | SortOrder
    streamLocation?: SortOrderInput | SortOrder
    durationInSeconds?: SortOrder
    sizeInBytes?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collection?: CollectionOrderByWithRelationInput
    processor?: VideoProcessorOrderByWithRelationInput
  }

  export type VideosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideosWhereInput | VideosWhereInput[]
    OR?: VideosWhereInput[]
    NOT?: VideosWhereInput | VideosWhereInput[]
    title?: StringFilter<"Videos"> | string
    description?: StringNullableFilter<"Videos"> | string | null
    location?: StringNullableFilter<"Videos"> | string | null
    thumbnailLocation?: StringNullableFilter<"Videos"> | string | null
    streamLocation?: StringNullableFilter<"Videos"> | string | null
    durationInSeconds?: IntFilter<"Videos"> | number
    sizeInBytes?: IntFilter<"Videos"> | number
    status?: EnumVideoStatusFilter<"Videos"> | $Enums.VideoStatus
    collectionId?: StringFilter<"Videos"> | string
    createdAt?: DateTimeFilter<"Videos"> | Date | string
    updatedAt?: DateTimeFilter<"Videos"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    processor?: XOR<VideoProcessorNullableScalarRelationFilter, VideoProcessorWhereInput> | null
  }, "id">

  export type VideosOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    thumbnailLocation?: SortOrderInput | SortOrder
    streamLocation?: SortOrderInput | SortOrder
    durationInSeconds?: SortOrder
    sizeInBytes?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideosCountOrderByAggregateInput
    _avg?: VideosAvgOrderByAggregateInput
    _max?: VideosMaxOrderByAggregateInput
    _min?: VideosMinOrderByAggregateInput
    _sum?: VideosSumOrderByAggregateInput
  }

  export type VideosScalarWhereWithAggregatesInput = {
    AND?: VideosScalarWhereWithAggregatesInput | VideosScalarWhereWithAggregatesInput[]
    OR?: VideosScalarWhereWithAggregatesInput[]
    NOT?: VideosScalarWhereWithAggregatesInput | VideosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Videos"> | string
    title?: StringWithAggregatesFilter<"Videos"> | string
    description?: StringNullableWithAggregatesFilter<"Videos"> | string | null
    location?: StringNullableWithAggregatesFilter<"Videos"> | string | null
    thumbnailLocation?: StringNullableWithAggregatesFilter<"Videos"> | string | null
    streamLocation?: StringNullableWithAggregatesFilter<"Videos"> | string | null
    durationInSeconds?: IntWithAggregatesFilter<"Videos"> | number
    sizeInBytes?: IntWithAggregatesFilter<"Videos"> | number
    status?: EnumVideoStatusWithAggregatesFilter<"Videos"> | $Enums.VideoStatus
    collectionId?: StringWithAggregatesFilter<"Videos"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Videos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Videos"> | Date | string
  }

  export type VideoProcessorWhereInput = {
    AND?: VideoProcessorWhereInput | VideoProcessorWhereInput[]
    OR?: VideoProcessorWhereInput[]
    NOT?: VideoProcessorWhereInput | VideoProcessorWhereInput[]
    id?: StringFilter<"VideoProcessor"> | string
    tmpLocation?: StringFilter<"VideoProcessor"> | string
    videoId?: StringFilter<"VideoProcessor"> | string
    completedAt?: DateTimeNullableFilter<"VideoProcessor"> | Date | string | null
    createdAt?: DateTimeFilter<"VideoProcessor"> | Date | string
    updatedAt?: DateTimeFilter<"VideoProcessor"> | Date | string
    video?: XOR<VideosScalarRelationFilter, VideosWhereInput>
  }

  export type VideoProcessorOrderByWithRelationInput = {
    id?: SortOrder
    tmpLocation?: SortOrder
    videoId?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    video?: VideosOrderByWithRelationInput
  }

  export type VideoProcessorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    videoId?: string
    AND?: VideoProcessorWhereInput | VideoProcessorWhereInput[]
    OR?: VideoProcessorWhereInput[]
    NOT?: VideoProcessorWhereInput | VideoProcessorWhereInput[]
    tmpLocation?: StringFilter<"VideoProcessor"> | string
    completedAt?: DateTimeNullableFilter<"VideoProcessor"> | Date | string | null
    createdAt?: DateTimeFilter<"VideoProcessor"> | Date | string
    updatedAt?: DateTimeFilter<"VideoProcessor"> | Date | string
    video?: XOR<VideosScalarRelationFilter, VideosWhereInput>
  }, "id" | "videoId">

  export type VideoProcessorOrderByWithAggregationInput = {
    id?: SortOrder
    tmpLocation?: SortOrder
    videoId?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoProcessorCountOrderByAggregateInput
    _max?: VideoProcessorMaxOrderByAggregateInput
    _min?: VideoProcessorMinOrderByAggregateInput
  }

  export type VideoProcessorScalarWhereWithAggregatesInput = {
    AND?: VideoProcessorScalarWhereWithAggregatesInput | VideoProcessorScalarWhereWithAggregatesInput[]
    OR?: VideoProcessorScalarWhereWithAggregatesInput[]
    NOT?: VideoProcessorScalarWhereWithAggregatesInput | VideoProcessorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoProcessor"> | string
    tmpLocation?: StringWithAggregatesFilter<"VideoProcessor"> | string
    videoId?: StringWithAggregatesFilter<"VideoProcessor"> | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"VideoProcessor"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VideoProcessor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VideoProcessor"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    collectionId?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collection?: CollectionOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    collectionId?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }, "id" | "key" | "collectionId">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    collectionId?: StringWithAggregatesFilter<"ApiKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type WebHookWhereInput = {
    AND?: WebHookWhereInput | WebHookWhereInput[]
    OR?: WebHookWhereInput[]
    NOT?: WebHookWhereInput | WebHookWhereInput[]
    id?: StringFilter<"WebHook"> | string
    type?: EnumWebHookTypeFilter<"WebHook"> | $Enums.WebHookType
    url?: StringFilter<"WebHook"> | string
    httpMethod?: EnumWebHookHTTPMethodsFilter<"WebHook"> | $Enums.WebHookHTTPMethods
    collectionId?: StringFilter<"WebHook"> | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }

  export type WebHookOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    httpMethod?: SortOrder
    collectionId?: SortOrder
    collection?: CollectionOrderByWithRelationInput
  }

  export type WebHookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    type_collectionId?: WebHookTypeCollectionIdCompoundUniqueInput
    AND?: WebHookWhereInput | WebHookWhereInput[]
    OR?: WebHookWhereInput[]
    NOT?: WebHookWhereInput | WebHookWhereInput[]
    type?: EnumWebHookTypeFilter<"WebHook"> | $Enums.WebHookType
    url?: StringFilter<"WebHook"> | string
    httpMethod?: EnumWebHookHTTPMethodsFilter<"WebHook"> | $Enums.WebHookHTTPMethods
    collectionId?: StringFilter<"WebHook"> | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }, "id" | "type_collectionId">

  export type WebHookOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    httpMethod?: SortOrder
    collectionId?: SortOrder
    _count?: WebHookCountOrderByAggregateInput
    _max?: WebHookMaxOrderByAggregateInput
    _min?: WebHookMinOrderByAggregateInput
  }

  export type WebHookScalarWhereWithAggregatesInput = {
    AND?: WebHookScalarWhereWithAggregatesInput | WebHookScalarWhereWithAggregatesInput[]
    OR?: WebHookScalarWhereWithAggregatesInput[]
    NOT?: WebHookScalarWhereWithAggregatesInput | WebHookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebHook"> | string
    type?: EnumWebHookTypeWithAggregatesFilter<"WebHook"> | $Enums.WebHookType
    url?: StringWithAggregatesFilter<"WebHook"> | string
    httpMethod?: EnumWebHookHTTPMethodsWithAggregatesFilter<"WebHook"> | $Enums.WebHookHTTPMethods
    collectionId?: StringWithAggregatesFilter<"WebHook"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedOneWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateInput = {
    id?: string
    name: string
    iconName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    videos?: VideosCreateNestedManyWithoutCollectionInput
    apiKey?: ApiKeyCreateNestedOneWithoutCollectionInput
    webhooks?: WebHookCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    name: string
    iconName?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideosUncheckedCreateNestedManyWithoutCollectionInput
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutCollectionInput
    webhooks?: WebHookUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    videos?: VideosUpdateManyWithoutCollectionNestedInput
    apiKey?: ApiKeyUpdateOneWithoutCollectionNestedInput
    webhooks?: WebHookUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideosUncheckedUpdateManyWithoutCollectionNestedInput
    apiKey?: ApiKeyUncheckedUpdateOneWithoutCollectionNestedInput
    webhooks?: WebHookUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    name: string
    iconName?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideosCreateInput = {
    id?: string
    title: string
    description?: string | null
    location?: string | null
    thumbnailLocation?: string | null
    streamLocation?: string | null
    durationInSeconds?: number
    sizeInBytes?: number
    status?: $Enums.VideoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    collection: CollectionCreateNestedOneWithoutVideosInput
    processor?: VideoProcessorCreateNestedOneWithoutVideoInput
  }

  export type VideosUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    location?: string | null
    thumbnailLocation?: string | null
    streamLocation?: string | null
    durationInSeconds?: number
    sizeInBytes?: number
    status?: $Enums.VideoStatus
    collectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    processor?: VideoProcessorUncheckedCreateNestedOneWithoutVideoInput
  }

  export type VideosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailLocation?: NullableStringFieldUpdateOperationsInput | string | null
    streamLocation?: NullableStringFieldUpdateOperationsInput | string | null
    durationInSeconds?: IntFieldUpdateOperationsInput | number
    sizeInBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutVideosNestedInput
    processor?: VideoProcessorUpdateOneWithoutVideoNestedInput
  }

  export type VideosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailLocation?: NullableStringFieldUpdateOperationsInput | string | null
    streamLocation?: NullableStringFieldUpdateOperationsInput | string | null
    durationInSeconds?: IntFieldUpdateOperationsInput | number
    sizeInBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processor?: VideoProcessorUncheckedUpdateOneWithoutVideoNestedInput
  }

  export type VideosCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    location?: string | null
    thumbnailLocation?: string | null
    streamLocation?: string | null
    durationInSeconds?: number
    sizeInBytes?: number
    status?: $Enums.VideoStatus
    collectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailLocation?: NullableStringFieldUpdateOperationsInput | string | null
    streamLocation?: NullableStringFieldUpdateOperationsInput | string | null
    durationInSeconds?: IntFieldUpdateOperationsInput | number
    sizeInBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailLocation?: NullableStringFieldUpdateOperationsInput | string | null
    streamLocation?: NullableStringFieldUpdateOperationsInput | string | null
    durationInSeconds?: IntFieldUpdateOperationsInput | number
    sizeInBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoProcessorCreateInput = {
    id?: string
    tmpLocation: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideosCreateNestedOneWithoutProcessorInput
  }

  export type VideoProcessorUncheckedCreateInput = {
    id?: string
    tmpLocation: string
    videoId: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoProcessorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmpLocation?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideosUpdateOneRequiredWithoutProcessorNestedInput
  }

  export type VideoProcessorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmpLocation?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoProcessorCreateManyInput = {
    id?: string
    tmpLocation: string
    videoId: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoProcessorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmpLocation?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoProcessorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmpLocation?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    key?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collection: CollectionCreateNestedOneWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    key?: string
    collectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    key?: string
    collectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebHookCreateInput = {
    id?: string
    type: $Enums.WebHookType
    url: string
    httpMethod?: $Enums.WebHookHTTPMethods
    collection: CollectionCreateNestedOneWithoutWebhooksInput
  }

  export type WebHookUncheckedCreateInput = {
    id?: string
    type: $Enums.WebHookType
    url: string
    httpMethod?: $Enums.WebHookHTTPMethods
    collectionId: string
  }

  export type WebHookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWebHookTypeFieldUpdateOperationsInput | $Enums.WebHookType
    url?: StringFieldUpdateOperationsInput | string
    httpMethod?: EnumWebHookHTTPMethodsFieldUpdateOperationsInput | $Enums.WebHookHTTPMethods
    collection?: CollectionUpdateOneRequiredWithoutWebhooksNestedInput
  }

  export type WebHookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWebHookTypeFieldUpdateOperationsInput | $Enums.WebHookType
    url?: StringFieldUpdateOperationsInput | string
    httpMethod?: EnumWebHookHTTPMethodsFieldUpdateOperationsInput | $Enums.WebHookHTTPMethods
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type WebHookCreateManyInput = {
    id?: string
    type: $Enums.WebHookType
    url: string
    httpMethod?: $Enums.WebHookHTTPMethods
    collectionId: string
  }

  export type WebHookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWebHookTypeFieldUpdateOperationsInput | $Enums.WebHookType
    url?: StringFieldUpdateOperationsInput | string
    httpMethod?: EnumWebHookHTTPMethodsFieldUpdateOperationsInput | $Enums.WebHookHTTPMethods
  }

  export type WebHookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWebHookTypeFieldUpdateOperationsInput | $Enums.WebHookType
    url?: StringFieldUpdateOperationsInput | string
    httpMethod?: EnumWebHookHTTPMethodsFieldUpdateOperationsInput | $Enums.WebHookHTTPMethods
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VideosListRelationFilter = {
    every?: VideosWhereInput
    some?: VideosWhereInput
    none?: VideosWhereInput
  }

  export type ApiKeyNullableScalarRelationFilter = {
    is?: ApiKeyWhereInput | null
    isNot?: ApiKeyWhereInput | null
  }

  export type WebHookListRelationFilter = {
    every?: WebHookWhereInput
    some?: WebHookWhereInput
    none?: WebHookWhereInput
  }

  export type VideosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebHookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type VideoProcessorNullableScalarRelationFilter = {
    is?: VideoProcessorWhereInput | null
    isNot?: VideoProcessorWhereInput | null
  }

  export type VideosCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    thumbnailLocation?: SortOrder
    streamLocation?: SortOrder
    durationInSeconds?: SortOrder
    sizeInBytes?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideosAvgOrderByAggregateInput = {
    durationInSeconds?: SortOrder
    sizeInBytes?: SortOrder
  }

  export type VideosMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    thumbnailLocation?: SortOrder
    streamLocation?: SortOrder
    durationInSeconds?: SortOrder
    sizeInBytes?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideosMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    thumbnailLocation?: SortOrder
    streamLocation?: SortOrder
    durationInSeconds?: SortOrder
    sizeInBytes?: SortOrder
    status?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideosSumOrderByAggregateInput = {
    durationInSeconds?: SortOrder
    sizeInBytes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type VideosScalarRelationFilter = {
    is?: VideosWhereInput
    isNot?: VideosWhereInput
  }

  export type VideoProcessorCountOrderByAggregateInput = {
    id?: SortOrder
    tmpLocation?: SortOrder
    videoId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoProcessorMaxOrderByAggregateInput = {
    id?: SortOrder
    tmpLocation?: SortOrder
    videoId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoProcessorMinOrderByAggregateInput = {
    id?: SortOrder
    tmpLocation?: SortOrder
    videoId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWebHookTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WebHookType | EnumWebHookTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WebHookType[] | ListEnumWebHookTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebHookType[] | ListEnumWebHookTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWebHookTypeFilter<$PrismaModel> | $Enums.WebHookType
  }

  export type EnumWebHookHTTPMethodsFilter<$PrismaModel = never> = {
    equals?: $Enums.WebHookHTTPMethods | EnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    in?: $Enums.WebHookHTTPMethods[] | ListEnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebHookHTTPMethods[] | ListEnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    not?: NestedEnumWebHookHTTPMethodsFilter<$PrismaModel> | $Enums.WebHookHTTPMethods
  }

  export type WebHookTypeCollectionIdCompoundUniqueInput = {
    type: $Enums.WebHookType
    collectionId: string
  }

  export type WebHookCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    httpMethod?: SortOrder
    collectionId?: SortOrder
  }

  export type WebHookMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    httpMethod?: SortOrder
    collectionId?: SortOrder
  }

  export type WebHookMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    httpMethod?: SortOrder
    collectionId?: SortOrder
  }

  export type EnumWebHookTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebHookType | EnumWebHookTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WebHookType[] | ListEnumWebHookTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebHookType[] | ListEnumWebHookTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWebHookTypeWithAggregatesFilter<$PrismaModel> | $Enums.WebHookType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebHookTypeFilter<$PrismaModel>
    _max?: NestedEnumWebHookTypeFilter<$PrismaModel>
  }

  export type EnumWebHookHTTPMethodsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebHookHTTPMethods | EnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    in?: $Enums.WebHookHTTPMethods[] | ListEnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebHookHTTPMethods[] | ListEnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    not?: NestedEnumWebHookHTTPMethodsWithAggregatesFilter<$PrismaModel> | $Enums.WebHookHTTPMethods
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebHookHTTPMethodsFilter<$PrismaModel>
    _max?: NestedEnumWebHookHTTPMethodsFilter<$PrismaModel>
  }

  export type SessionCreateNestedOneWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    connect?: SessionWhereUniqueInput
  }

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    connect?: SessionWhereUniqueInput
  }

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    upsert?: SessionUpsertWithoutUserInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutUserInput, SessionUpdateWithoutUserInput>, SessionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    upsert?: SessionUpsertWithoutUserInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutUserInput, SessionUpdateWithoutUserInput>, SessionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type VideosCreateNestedManyWithoutCollectionInput = {
    create?: XOR<VideosCreateWithoutCollectionInput, VideosUncheckedCreateWithoutCollectionInput> | VideosCreateWithoutCollectionInput[] | VideosUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: VideosCreateOrConnectWithoutCollectionInput | VideosCreateOrConnectWithoutCollectionInput[]
    createMany?: VideosCreateManyCollectionInputEnvelope
    connect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedOneWithoutCollectionInput = {
    create?: XOR<ApiKeyCreateWithoutCollectionInput, ApiKeyUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCollectionInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type WebHookCreateNestedManyWithoutCollectionInput = {
    create?: XOR<WebHookCreateWithoutCollectionInput, WebHookUncheckedCreateWithoutCollectionInput> | WebHookCreateWithoutCollectionInput[] | WebHookUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: WebHookCreateOrConnectWithoutCollectionInput | WebHookCreateOrConnectWithoutCollectionInput[]
    createMany?: WebHookCreateManyCollectionInputEnvelope
    connect?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
  }

  export type VideosUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<VideosCreateWithoutCollectionInput, VideosUncheckedCreateWithoutCollectionInput> | VideosCreateWithoutCollectionInput[] | VideosUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: VideosCreateOrConnectWithoutCollectionInput | VideosCreateOrConnectWithoutCollectionInput[]
    createMany?: VideosCreateManyCollectionInputEnvelope
    connect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedOneWithoutCollectionInput = {
    create?: XOR<ApiKeyCreateWithoutCollectionInput, ApiKeyUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCollectionInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type WebHookUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<WebHookCreateWithoutCollectionInput, WebHookUncheckedCreateWithoutCollectionInput> | WebHookCreateWithoutCollectionInput[] | WebHookUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: WebHookCreateOrConnectWithoutCollectionInput | WebHookCreateOrConnectWithoutCollectionInput[]
    createMany?: WebHookCreateManyCollectionInputEnvelope
    connect?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    upsert?: UserUpsertWithoutCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionsInput, UserUpdateWithoutCollectionsInput>, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type VideosUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<VideosCreateWithoutCollectionInput, VideosUncheckedCreateWithoutCollectionInput> | VideosCreateWithoutCollectionInput[] | VideosUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: VideosCreateOrConnectWithoutCollectionInput | VideosCreateOrConnectWithoutCollectionInput[]
    upsert?: VideosUpsertWithWhereUniqueWithoutCollectionInput | VideosUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: VideosCreateManyCollectionInputEnvelope
    set?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    disconnect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    delete?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    connect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    update?: VideosUpdateWithWhereUniqueWithoutCollectionInput | VideosUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: VideosUpdateManyWithWhereWithoutCollectionInput | VideosUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: VideosScalarWhereInput | VideosScalarWhereInput[]
  }

  export type ApiKeyUpdateOneWithoutCollectionNestedInput = {
    create?: XOR<ApiKeyCreateWithoutCollectionInput, ApiKeyUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCollectionInput
    upsert?: ApiKeyUpsertWithoutCollectionInput
    disconnect?: ApiKeyWhereInput | boolean
    delete?: ApiKeyWhereInput | boolean
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutCollectionInput, ApiKeyUpdateWithoutCollectionInput>, ApiKeyUncheckedUpdateWithoutCollectionInput>
  }

  export type WebHookUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<WebHookCreateWithoutCollectionInput, WebHookUncheckedCreateWithoutCollectionInput> | WebHookCreateWithoutCollectionInput[] | WebHookUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: WebHookCreateOrConnectWithoutCollectionInput | WebHookCreateOrConnectWithoutCollectionInput[]
    upsert?: WebHookUpsertWithWhereUniqueWithoutCollectionInput | WebHookUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: WebHookCreateManyCollectionInputEnvelope
    set?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
    disconnect?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
    delete?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
    connect?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
    update?: WebHookUpdateWithWhereUniqueWithoutCollectionInput | WebHookUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: WebHookUpdateManyWithWhereWithoutCollectionInput | WebHookUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: WebHookScalarWhereInput | WebHookScalarWhereInput[]
  }

  export type VideosUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<VideosCreateWithoutCollectionInput, VideosUncheckedCreateWithoutCollectionInput> | VideosCreateWithoutCollectionInput[] | VideosUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: VideosCreateOrConnectWithoutCollectionInput | VideosCreateOrConnectWithoutCollectionInput[]
    upsert?: VideosUpsertWithWhereUniqueWithoutCollectionInput | VideosUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: VideosCreateManyCollectionInputEnvelope
    set?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    disconnect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    delete?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    connect?: VideosWhereUniqueInput | VideosWhereUniqueInput[]
    update?: VideosUpdateWithWhereUniqueWithoutCollectionInput | VideosUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: VideosUpdateManyWithWhereWithoutCollectionInput | VideosUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: VideosScalarWhereInput | VideosScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateOneWithoutCollectionNestedInput = {
    create?: XOR<ApiKeyCreateWithoutCollectionInput, ApiKeyUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutCollectionInput
    upsert?: ApiKeyUpsertWithoutCollectionInput
    disconnect?: ApiKeyWhereInput | boolean
    delete?: ApiKeyWhereInput | boolean
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutCollectionInput, ApiKeyUpdateWithoutCollectionInput>, ApiKeyUncheckedUpdateWithoutCollectionInput>
  }

  export type WebHookUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<WebHookCreateWithoutCollectionInput, WebHookUncheckedCreateWithoutCollectionInput> | WebHookCreateWithoutCollectionInput[] | WebHookUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: WebHookCreateOrConnectWithoutCollectionInput | WebHookCreateOrConnectWithoutCollectionInput[]
    upsert?: WebHookUpsertWithWhereUniqueWithoutCollectionInput | WebHookUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: WebHookCreateManyCollectionInputEnvelope
    set?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
    disconnect?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
    delete?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
    connect?: WebHookWhereUniqueInput | WebHookWhereUniqueInput[]
    update?: WebHookUpdateWithWhereUniqueWithoutCollectionInput | WebHookUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: WebHookUpdateManyWithWhereWithoutCollectionInput | WebHookUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: WebHookScalarWhereInput | WebHookScalarWhereInput[]
  }

  export type CollectionCreateNestedOneWithoutVideosInput = {
    create?: XOR<CollectionCreateWithoutVideosInput, CollectionUncheckedCreateWithoutVideosInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutVideosInput
    connect?: CollectionWhereUniqueInput
  }

  export type VideoProcessorCreateNestedOneWithoutVideoInput = {
    create?: XOR<VideoProcessorCreateWithoutVideoInput, VideoProcessorUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoProcessorCreateOrConnectWithoutVideoInput
    connect?: VideoProcessorWhereUniqueInput
  }

  export type VideoProcessorUncheckedCreateNestedOneWithoutVideoInput = {
    create?: XOR<VideoProcessorCreateWithoutVideoInput, VideoProcessorUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoProcessorCreateOrConnectWithoutVideoInput
    connect?: VideoProcessorWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVideoStatusFieldUpdateOperationsInput = {
    set?: $Enums.VideoStatus
  }

  export type CollectionUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<CollectionCreateWithoutVideosInput, CollectionUncheckedCreateWithoutVideosInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutVideosInput
    upsert?: CollectionUpsertWithoutVideosInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutVideosInput, CollectionUpdateWithoutVideosInput>, CollectionUncheckedUpdateWithoutVideosInput>
  }

  export type VideoProcessorUpdateOneWithoutVideoNestedInput = {
    create?: XOR<VideoProcessorCreateWithoutVideoInput, VideoProcessorUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoProcessorCreateOrConnectWithoutVideoInput
    upsert?: VideoProcessorUpsertWithoutVideoInput
    disconnect?: VideoProcessorWhereInput | boolean
    delete?: VideoProcessorWhereInput | boolean
    connect?: VideoProcessorWhereUniqueInput
    update?: XOR<XOR<VideoProcessorUpdateToOneWithWhereWithoutVideoInput, VideoProcessorUpdateWithoutVideoInput>, VideoProcessorUncheckedUpdateWithoutVideoInput>
  }

  export type VideoProcessorUncheckedUpdateOneWithoutVideoNestedInput = {
    create?: XOR<VideoProcessorCreateWithoutVideoInput, VideoProcessorUncheckedCreateWithoutVideoInput>
    connectOrCreate?: VideoProcessorCreateOrConnectWithoutVideoInput
    upsert?: VideoProcessorUpsertWithoutVideoInput
    disconnect?: VideoProcessorWhereInput | boolean
    delete?: VideoProcessorWhereInput | boolean
    connect?: VideoProcessorWhereUniqueInput
    update?: XOR<XOR<VideoProcessorUpdateToOneWithWhereWithoutVideoInput, VideoProcessorUpdateWithoutVideoInput>, VideoProcessorUncheckedUpdateWithoutVideoInput>
  }

  export type VideosCreateNestedOneWithoutProcessorInput = {
    create?: XOR<VideosCreateWithoutProcessorInput, VideosUncheckedCreateWithoutProcessorInput>
    connectOrCreate?: VideosCreateOrConnectWithoutProcessorInput
    connect?: VideosWhereUniqueInput
  }

  export type VideosUpdateOneRequiredWithoutProcessorNestedInput = {
    create?: XOR<VideosCreateWithoutProcessorInput, VideosUncheckedCreateWithoutProcessorInput>
    connectOrCreate?: VideosCreateOrConnectWithoutProcessorInput
    upsert?: VideosUpsertWithoutProcessorInput
    connect?: VideosWhereUniqueInput
    update?: XOR<XOR<VideosUpdateToOneWithWhereWithoutProcessorInput, VideosUpdateWithoutProcessorInput>, VideosUncheckedUpdateWithoutProcessorInput>
  }

  export type CollectionCreateNestedOneWithoutApiKeyInput = {
    create?: XOR<CollectionCreateWithoutApiKeyInput, CollectionUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutApiKeyInput
    connect?: CollectionWhereUniqueInput
  }

  export type CollectionUpdateOneRequiredWithoutApiKeyNestedInput = {
    create?: XOR<CollectionCreateWithoutApiKeyInput, CollectionUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutApiKeyInput
    upsert?: CollectionUpsertWithoutApiKeyInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutApiKeyInput, CollectionUpdateWithoutApiKeyInput>, CollectionUncheckedUpdateWithoutApiKeyInput>
  }

  export type CollectionCreateNestedOneWithoutWebhooksInput = {
    create?: XOR<CollectionCreateWithoutWebhooksInput, CollectionUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutWebhooksInput
    connect?: CollectionWhereUniqueInput
  }

  export type EnumWebHookTypeFieldUpdateOperationsInput = {
    set?: $Enums.WebHookType
  }

  export type EnumWebHookHTTPMethodsFieldUpdateOperationsInput = {
    set?: $Enums.WebHookHTTPMethods
  }

  export type CollectionUpdateOneRequiredWithoutWebhooksNestedInput = {
    create?: XOR<CollectionCreateWithoutWebhooksInput, CollectionUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutWebhooksInput
    upsert?: CollectionUpsertWithoutWebhooksInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutWebhooksInput, CollectionUpdateWithoutWebhooksInput>, CollectionUncheckedUpdateWithoutWebhooksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type NestedEnumWebHookTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WebHookType | EnumWebHookTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WebHookType[] | ListEnumWebHookTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebHookType[] | ListEnumWebHookTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWebHookTypeFilter<$PrismaModel> | $Enums.WebHookType
  }

  export type NestedEnumWebHookHTTPMethodsFilter<$PrismaModel = never> = {
    equals?: $Enums.WebHookHTTPMethods | EnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    in?: $Enums.WebHookHTTPMethods[] | ListEnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebHookHTTPMethods[] | ListEnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    not?: NestedEnumWebHookHTTPMethodsFilter<$PrismaModel> | $Enums.WebHookHTTPMethods
  }

  export type NestedEnumWebHookTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebHookType | EnumWebHookTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WebHookType[] | ListEnumWebHookTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebHookType[] | ListEnumWebHookTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWebHookTypeWithAggregatesFilter<$PrismaModel> | $Enums.WebHookType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebHookTypeFilter<$PrismaModel>
    _max?: NestedEnumWebHookTypeFilter<$PrismaModel>
  }

  export type NestedEnumWebHookHTTPMethodsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebHookHTTPMethods | EnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    in?: $Enums.WebHookHTTPMethods[] | ListEnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebHookHTTPMethods[] | ListEnumWebHookHTTPMethodsFieldRefInput<$PrismaModel>
    not?: NestedEnumWebHookHTTPMethodsWithAggregatesFilter<$PrismaModel> | $Enums.WebHookHTTPMethods
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebHookHTTPMethodsFilter<$PrismaModel>
    _max?: NestedEnumWebHookHTTPMethodsFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type CollectionCreateWithoutUserInput = {
    id?: string
    name: string
    iconName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideosCreateNestedManyWithoutCollectionInput
    apiKey?: ApiKeyCreateNestedOneWithoutCollectionInput
    webhooks?: WebHookCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    iconName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideosUncheckedCreateNestedManyWithoutCollectionInput
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutCollectionInput
    webhooks?: WebHookUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithoutUserInput = {
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutUserInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutUserInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    iconName?: StringFilter<"Collection"> | string
    userId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCollectionsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
  }

  export type VideosCreateWithoutCollectionInput = {
    id?: string
    title: string
    description?: string | null
    location?: string | null
    thumbnailLocation?: string | null
    streamLocation?: string | null
    durationInSeconds?: number
    sizeInBytes?: number
    status?: $Enums.VideoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    processor?: VideoProcessorCreateNestedOneWithoutVideoInput
  }

  export type VideosUncheckedCreateWithoutCollectionInput = {
    id?: string
    title: string
    description?: string | null
    location?: string | null
    thumbnailLocation?: string | null
    streamLocation?: string | null
    durationInSeconds?: number
    sizeInBytes?: number
    status?: $Enums.VideoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    processor?: VideoProcessorUncheckedCreateNestedOneWithoutVideoInput
  }

  export type VideosCreateOrConnectWithoutCollectionInput = {
    where: VideosWhereUniqueInput
    create: XOR<VideosCreateWithoutCollectionInput, VideosUncheckedCreateWithoutCollectionInput>
  }

  export type VideosCreateManyCollectionInputEnvelope = {
    data: VideosCreateManyCollectionInput | VideosCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutCollectionInput = {
    id?: string
    key?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutCollectionInput = {
    id?: string
    key?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutCollectionInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutCollectionInput, ApiKeyUncheckedCreateWithoutCollectionInput>
  }

  export type WebHookCreateWithoutCollectionInput = {
    id?: string
    type: $Enums.WebHookType
    url: string
    httpMethod?: $Enums.WebHookHTTPMethods
  }

  export type WebHookUncheckedCreateWithoutCollectionInput = {
    id?: string
    type: $Enums.WebHookType
    url: string
    httpMethod?: $Enums.WebHookHTTPMethods
  }

  export type WebHookCreateOrConnectWithoutCollectionInput = {
    where: WebHookWhereUniqueInput
    create: XOR<WebHookCreateWithoutCollectionInput, WebHookUncheckedCreateWithoutCollectionInput>
  }

  export type WebHookCreateManyCollectionInputEnvelope = {
    data: WebHookCreateManyCollectionInput | WebHookCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type VideosUpsertWithWhereUniqueWithoutCollectionInput = {
    where: VideosWhereUniqueInput
    update: XOR<VideosUpdateWithoutCollectionInput, VideosUncheckedUpdateWithoutCollectionInput>
    create: XOR<VideosCreateWithoutCollectionInput, VideosUncheckedCreateWithoutCollectionInput>
  }

  export type VideosUpdateWithWhereUniqueWithoutCollectionInput = {
    where: VideosWhereUniqueInput
    data: XOR<VideosUpdateWithoutCollectionInput, VideosUncheckedUpdateWithoutCollectionInput>
  }

  export type VideosUpdateManyWithWhereWithoutCollectionInput = {
    where: VideosScalarWhereInput
    data: XOR<VideosUpdateManyMutationInput, VideosUncheckedUpdateManyWithoutCollectionInput>
  }

  export type VideosScalarWhereInput = {
    AND?: VideosScalarWhereInput | VideosScalarWhereInput[]
    OR?: VideosScalarWhereInput[]
    NOT?: VideosScalarWhereInput | VideosScalarWhereInput[]
    id?: StringFilter<"Videos"> | string
    title?: StringFilter<"Videos"> | string
    description?: StringNullableFilter<"Videos"> | string | null
    location?: StringNullableFilter<"Videos"> | string | null
    thumbnailLocation?: StringNullableFilter<"Videos"> | string | null
    streamLocation?: StringNullableFilter<"Videos"> | string | null
    durationInSeconds?: IntFilter<"Videos"> | number
    sizeInBytes?: IntFilter<"Videos"> | number
    status?: EnumVideoStatusFilter<"Videos"> | $Enums.VideoStatus
    collectionId?: StringFilter<"Videos"> | string
    createdAt?: DateTimeFilter<"Videos"> | Date | string
    updatedAt?: DateTimeFilter<"Videos"> | Date | string
  }

  export type ApiKeyUpsertWithoutCollectionInput = {
    update: XOR<ApiKeyUpdateWithoutCollectionInput, ApiKeyUncheckedUpdateWithoutCollectionInput>
    create: XOR<ApiKeyCreateWithoutCollectionInput, ApiKeyUncheckedCreateWithoutCollectionInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutCollectionInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutCollectionInput, ApiKeyUncheckedUpdateWithoutCollectionInput>
  }

  export type ApiKeyUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebHookUpsertWithWhereUniqueWithoutCollectionInput = {
    where: WebHookWhereUniqueInput
    update: XOR<WebHookUpdateWithoutCollectionInput, WebHookUncheckedUpdateWithoutCollectionInput>
    create: XOR<WebHookCreateWithoutCollectionInput, WebHookUncheckedCreateWithoutCollectionInput>
  }

  export type WebHookUpdateWithWhereUniqueWithoutCollectionInput = {
    where: WebHookWhereUniqueInput
    data: XOR<WebHookUpdateWithoutCollectionInput, WebHookUncheckedUpdateWithoutCollectionInput>
  }

  export type WebHookUpdateManyWithWhereWithoutCollectionInput = {
    where: WebHookScalarWhereInput
    data: XOR<WebHookUpdateManyMutationInput, WebHookUncheckedUpdateManyWithoutCollectionInput>
  }

  export type WebHookScalarWhereInput = {
    AND?: WebHookScalarWhereInput | WebHookScalarWhereInput[]
    OR?: WebHookScalarWhereInput[]
    NOT?: WebHookScalarWhereInput | WebHookScalarWhereInput[]
    id?: StringFilter<"WebHook"> | string
    type?: EnumWebHookTypeFilter<"WebHook"> | $Enums.WebHookType
    url?: StringFilter<"WebHook"> | string
    httpMethod?: EnumWebHookHTTPMethodsFilter<"WebHook"> | $Enums.WebHookHTTPMethods
    collectionId?: StringFilter<"WebHook"> | string
  }

  export type CollectionCreateWithoutVideosInput = {
    id?: string
    name: string
    iconName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    apiKey?: ApiKeyCreateNestedOneWithoutCollectionInput
    webhooks?: WebHookCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutVideosInput = {
    id?: string
    name: string
    iconName?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutCollectionInput
    webhooks?: WebHookUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutVideosInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutVideosInput, CollectionUncheckedCreateWithoutVideosInput>
  }

  export type VideoProcessorCreateWithoutVideoInput = {
    id?: string
    tmpLocation: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoProcessorUncheckedCreateWithoutVideoInput = {
    id?: string
    tmpLocation: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoProcessorCreateOrConnectWithoutVideoInput = {
    where: VideoProcessorWhereUniqueInput
    create: XOR<VideoProcessorCreateWithoutVideoInput, VideoProcessorUncheckedCreateWithoutVideoInput>
  }

  export type CollectionUpsertWithoutVideosInput = {
    update: XOR<CollectionUpdateWithoutVideosInput, CollectionUncheckedUpdateWithoutVideosInput>
    create: XOR<CollectionCreateWithoutVideosInput, CollectionUncheckedCreateWithoutVideosInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutVideosInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutVideosInput, CollectionUncheckedUpdateWithoutVideosInput>
  }

  export type CollectionUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    apiKey?: ApiKeyUpdateOneWithoutCollectionNestedInput
    webhooks?: WebHookUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUncheckedUpdateOneWithoutCollectionNestedInput
    webhooks?: WebHookUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type VideoProcessorUpsertWithoutVideoInput = {
    update: XOR<VideoProcessorUpdateWithoutVideoInput, VideoProcessorUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoProcessorCreateWithoutVideoInput, VideoProcessorUncheckedCreateWithoutVideoInput>
    where?: VideoProcessorWhereInput
  }

  export type VideoProcessorUpdateToOneWithWhereWithoutVideoInput = {
    where?: VideoProcessorWhereInput
    data: XOR<VideoProcessorUpdateWithoutVideoInput, VideoProcessorUncheckedUpdateWithoutVideoInput>
  }

  export type VideoProcessorUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmpLocation?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoProcessorUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmpLocation?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideosCreateWithoutProcessorInput = {
    id?: string
    title: string
    description?: string | null
    location?: string | null
    thumbnailLocation?: string | null
    streamLocation?: string | null
    durationInSeconds?: number
    sizeInBytes?: number
    status?: $Enums.VideoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    collection: CollectionCreateNestedOneWithoutVideosInput
  }

  export type VideosUncheckedCreateWithoutProcessorInput = {
    id?: string
    title: string
    description?: string | null
    location?: string | null
    thumbnailLocation?: string | null
    streamLocation?: string | null
    durationInSeconds?: number
    sizeInBytes?: number
    status?: $Enums.VideoStatus
    collectionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideosCreateOrConnectWithoutProcessorInput = {
    where: VideosWhereUniqueInput
    create: XOR<VideosCreateWithoutProcessorInput, VideosUncheckedCreateWithoutProcessorInput>
  }

  export type VideosUpsertWithoutProcessorInput = {
    update: XOR<VideosUpdateWithoutProcessorInput, VideosUncheckedUpdateWithoutProcessorInput>
    create: XOR<VideosCreateWithoutProcessorInput, VideosUncheckedCreateWithoutProcessorInput>
    where?: VideosWhereInput
  }

  export type VideosUpdateToOneWithWhereWithoutProcessorInput = {
    where?: VideosWhereInput
    data: XOR<VideosUpdateWithoutProcessorInput, VideosUncheckedUpdateWithoutProcessorInput>
  }

  export type VideosUpdateWithoutProcessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailLocation?: NullableStringFieldUpdateOperationsInput | string | null
    streamLocation?: NullableStringFieldUpdateOperationsInput | string | null
    durationInSeconds?: IntFieldUpdateOperationsInput | number
    sizeInBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideosUncheckedUpdateWithoutProcessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailLocation?: NullableStringFieldUpdateOperationsInput | string | null
    streamLocation?: NullableStringFieldUpdateOperationsInput | string | null
    durationInSeconds?: IntFieldUpdateOperationsInput | number
    sizeInBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateWithoutApiKeyInput = {
    id?: string
    name: string
    iconName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    videos?: VideosCreateNestedManyWithoutCollectionInput
    webhooks?: WebHookCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutApiKeyInput = {
    id?: string
    name: string
    iconName?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideosUncheckedCreateNestedManyWithoutCollectionInput
    webhooks?: WebHookUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutApiKeyInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutApiKeyInput, CollectionUncheckedCreateWithoutApiKeyInput>
  }

  export type CollectionUpsertWithoutApiKeyInput = {
    update: XOR<CollectionUpdateWithoutApiKeyInput, CollectionUncheckedUpdateWithoutApiKeyInput>
    create: XOR<CollectionCreateWithoutApiKeyInput, CollectionUncheckedCreateWithoutApiKeyInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutApiKeyInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutApiKeyInput, CollectionUncheckedUpdateWithoutApiKeyInput>
  }

  export type CollectionUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    videos?: VideosUpdateManyWithoutCollectionNestedInput
    webhooks?: WebHookUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideosUncheckedUpdateManyWithoutCollectionNestedInput
    webhooks?: WebHookUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateWithoutWebhooksInput = {
    id?: string
    name: string
    iconName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    videos?: VideosCreateNestedManyWithoutCollectionInput
    apiKey?: ApiKeyCreateNestedOneWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutWebhooksInput = {
    id?: string
    name: string
    iconName?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideosUncheckedCreateNestedManyWithoutCollectionInput
    apiKey?: ApiKeyUncheckedCreateNestedOneWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutWebhooksInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutWebhooksInput, CollectionUncheckedCreateWithoutWebhooksInput>
  }

  export type CollectionUpsertWithoutWebhooksInput = {
    update: XOR<CollectionUpdateWithoutWebhooksInput, CollectionUncheckedUpdateWithoutWebhooksInput>
    create: XOR<CollectionCreateWithoutWebhooksInput, CollectionUncheckedCreateWithoutWebhooksInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutWebhooksInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutWebhooksInput, CollectionUncheckedUpdateWithoutWebhooksInput>
  }

  export type CollectionUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    videos?: VideosUpdateManyWithoutCollectionNestedInput
    apiKey?: ApiKeyUpdateOneWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideosUncheckedUpdateManyWithoutCollectionNestedInput
    apiKey?: ApiKeyUncheckedUpdateOneWithoutCollectionNestedInput
  }

  export type CollectionCreateManyUserInput = {
    id?: string
    name: string
    iconName?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideosUpdateManyWithoutCollectionNestedInput
    apiKey?: ApiKeyUpdateOneWithoutCollectionNestedInput
    webhooks?: WebHookUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideosUncheckedUpdateManyWithoutCollectionNestedInput
    apiKey?: ApiKeyUncheckedUpdateOneWithoutCollectionNestedInput
    webhooks?: WebHookUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideosCreateManyCollectionInput = {
    id?: string
    title: string
    description?: string | null
    location?: string | null
    thumbnailLocation?: string | null
    streamLocation?: string | null
    durationInSeconds?: number
    sizeInBytes?: number
    status?: $Enums.VideoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebHookCreateManyCollectionInput = {
    id?: string
    type: $Enums.WebHookType
    url: string
    httpMethod?: $Enums.WebHookHTTPMethods
  }

  export type VideosUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailLocation?: NullableStringFieldUpdateOperationsInput | string | null
    streamLocation?: NullableStringFieldUpdateOperationsInput | string | null
    durationInSeconds?: IntFieldUpdateOperationsInput | number
    sizeInBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processor?: VideoProcessorUpdateOneWithoutVideoNestedInput
  }

  export type VideosUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailLocation?: NullableStringFieldUpdateOperationsInput | string | null
    streamLocation?: NullableStringFieldUpdateOperationsInput | string | null
    durationInSeconds?: IntFieldUpdateOperationsInput | number
    sizeInBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processor?: VideoProcessorUncheckedUpdateOneWithoutVideoNestedInput
  }

  export type VideosUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailLocation?: NullableStringFieldUpdateOperationsInput | string | null
    streamLocation?: NullableStringFieldUpdateOperationsInput | string | null
    durationInSeconds?: IntFieldUpdateOperationsInput | number
    sizeInBytes?: IntFieldUpdateOperationsInput | number
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebHookUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWebHookTypeFieldUpdateOperationsInput | $Enums.WebHookType
    url?: StringFieldUpdateOperationsInput | string
    httpMethod?: EnumWebHookHTTPMethodsFieldUpdateOperationsInput | $Enums.WebHookHTTPMethods
  }

  export type WebHookUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWebHookTypeFieldUpdateOperationsInput | $Enums.WebHookType
    url?: StringFieldUpdateOperationsInput | string
    httpMethod?: EnumWebHookHTTPMethodsFieldUpdateOperationsInput | $Enums.WebHookHTTPMethods
  }

  export type WebHookUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWebHookTypeFieldUpdateOperationsInput | $Enums.WebHookType
    url?: StringFieldUpdateOperationsInput | string
    httpMethod?: EnumWebHookHTTPMethodsFieldUpdateOperationsInput | $Enums.WebHookHTTPMethods
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}